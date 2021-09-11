import {
    initMediaUpload,
    appendMediaFile,
    finalizeMediaUpload,
    checkUploadStatus,
} from "./twitterWrappers.js";

function TwitterStorage(opts) {
    this.getDestination = function getDestination(req, file, cb) {
        cb(null, file.originalname);
    };
}

TwitterStorage.prototype._handleFile = function _handleFile(req, file, cb) {
    this.getDestination(req, file, function (err, path) {
        if (err) {
            return cb(err);
        }

        const stream = file.stream;

        let totalSize = 0;
        let chunks = [];

        stream.on("data", (chunk) => {
            totalSize += chunk.length;

            chunks.push(chunk);
        });

        stream.on("end", () => {
            file.size = totalSize;
            file.chunks = chunks;

            const token = {
                key: req.session.accessToken,
                secret: req.session.accessTokenSecret,
            };

            initMediaUpload(file, token)
                .then((mediaData) => {
                    file.id = mediaData.data.media_id_string;

                    return appendMediaFile(file, token);
                })
                .then(() => {
                    return finalizeMediaUpload(file, token);
                })
                .then((mediaData) => {
                    const id = mediaData.data.media_id_string;

                    return new Promise((resolve) => {
                        if (mediaData.data.processing_info) {
                            const timeoutDuration =
                                mediaData.data.processing_info.check_after_secs;

                            return checkUploadStatus(
                                id,
                                token,
                                timeoutDuration
                            );
                        } else {
                            resolve(id);
                        }
                    });
                })
                .then((id) => {
                    cb(null, {
                        path: path,
                        media_id: id,
                    });
                })
                .catch((err) => {
                    cb(err);
                });
        });
    });
};

TwitterStorage.prototype._removeFile = function _removeFile(req, file, cb) {
    cb();
};

export default function (opts) {
    return new TwitterStorage(opts);
}
