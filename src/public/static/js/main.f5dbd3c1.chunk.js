(this["webpackJsonpthreadder-frontend"]=this["webpackJsonpthreadder-frontend"]||[]).push([[0],{142:function(e,t,n){},164:function(e,t,n){},165:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(11),o=n.n(i),c=n(33),s=n.n(c),l=n(29),u=n(45),d=n(14),f=n(63),h=n(202),m=n(214),g=n(9),b=n.n(g),j=n(95),p=n.n(j),x=n(105),v={main:"#283845",light:"#395164",dark:"#22303c",contrastText:"#ffffff",contrastText2:"#e5e5e5"},O={paper:v.light,default:"#202c39"},w=Object(x.a)({palette:{primary:v,secondary:{main:"#ffc107",light:"#ffd147",dark:"#c97d02",hover:"#ffa042",inactive:"#432a01",contrastText:"#14213d",inactiveText:"#111111"},background:O},spacing:4,shape:{borderRadius:2}}),y=n(215),k=n(210),C=n(209),I=n(219),T=n(206),S=n(207),N=n(168),E=n(38),L=n(203),F=n(3),H=Object(h.a)((function(e){return{styledButton:{"&:disabled":{color:e.palette.secondary.inactiveText,backgroundColor:e.palette.secondary.inactive},"&:hover":{backgroundColor:e.palette.secondary.hover}}}}));function A(e){var t=H(),n=b()(e.className,t.styledButton);return Object(F.jsx)(L.a,Object(E.a)(Object(E.a)({},e),{},{className:n}))}var D=n(216),z=n(205),B=n(222),W=n(220),P=Object(h.a)((function(e){return{menuList:{border:"solid 1px ".concat(e.palette.primary.dark)}}}));function R(e){var t={paper:P().menuList};return Object(F.jsx)(W.a,Object(E.a)({classes:t},e))}var U=n(223),G=Object(h.a)((function(e){return{menuList:{border:"solid 1px ".concat(e.palette.primary.dark)},menuItem:{color:e.palette.primary.contrastText,"&:hover":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main}}}}));function M(e){var t=G(),n=Object(a.useState)(null),r=Object(d.a)(n,2),i=r[0],o=r[1],c=function(){o(null)};return Object(F.jsxs)(D.a,{children:[Object(F.jsx)(z.a,{size:"small",onClick:function(e){o(e.currentTarget)},children:Object(F.jsx)(B.a,{src:e.user.profileImage,alt:"".concat(e.user.name," profile picture")})}),Object(F.jsxs)(R,{id:"account-settings-menu",getContentAnchorEl:null,anchorEl:i,anchorReference:"anchorEl",anchorOrigin:{horizontal:"center",vertical:"bottom"},transformOrigin:{horizontal:"center",vertical:"top"},open:Boolean(i),onClose:c,autoFocus:!1,children:[Object(F.jsx)(U.a,{className:t.menuItem,onClick:function(){c();var t=e.user.screenName;window.open("https://twitter.com/".concat(t),"_blank")},children:"Go to Twitter"}),Object(F.jsx)(U.a,{className:t.menuItem,onClick:function(){c(),e.logout()},children:"Log out"})]})]})}var _=Object(h.a)((function(e){return{toolbar:{height:"1em",padding:"1em 1.5em"},title:{flexGrow:1}}}));function q(e){var t=_(),n=Object(F.jsx)(A,{variant:"contained",color:"secondary",onClick:e.login,children:"Log in"});return Object(F.jsx)(T.a,{position:"relative",children:Object(F.jsxs)(S.a,{className:t.toolbar,children:[Object(F.jsx)(N.a,{variant:"h5",className:t.title,children:"Threadder"}),e.loggedIn?Object(F.jsx)(M,{user:e.user,logout:e.logout}):n]})})}var V=Object(h.a)((function(e){return{toolbarButton:{marginRight:"0.45em",color:e.palette.secondary.dark,"&:hover":{color:e.palette.secondary.main}}}}));function J(e){var t=V(),n=b()(e.className,t.toolbarButton);return Object(F.jsx)(z.a,Object(E.a)(Object(E.a)({},e),{},{className:n,children:e.children}))}var Y=n(97),Z=n.n(Y),$=n(99),K=n.n($),Q=n(98),X=n.n(Q),ee=n(208),te=n(96),ne=n(104),ae=(n(141),n(142),Object(h.a)((function(e){return{root:{padding:0,marginTop:"0.5em"}}})));function re(e){var t=ae(),n=Object(a.useState)(!1),r=Object(d.a)(n,2),i=r[0],o=r[1];return Object(F.jsxs)("div",{className:t.root,children:[Object(F.jsx)(I.a,{smDown:!0,children:Object(F.jsx)(ee.a,{onClickAway:function(){o(!1)},children:Object(F.jsxs)("span",{style:{position:"relative"},children:[i&&Object(F.jsx)(ne.a,{set:"twitter",data:te,title:"",emoji:"",showPreview:!1,perLine:8,onSelect:e.pickEmojiHandler}),Object(F.jsx)(J,{size:"small",onClick:function(){o((function(e){return!e}))},title:"Emoji",children:Object(F.jsx)(Z.a,{})})]})})}),Object(F.jsx)(J,{size:"small",onClick:e.splitTweetHandler,title:"Split",children:Object(F.jsx)(X.a,{})}),Object(F.jsx)(J,{size:"small",onClick:e.clearTweetHandler,title:"Clear",children:Object(F.jsx)(K.a,{})})]})}var ie=Object(h.a)((function(e){return{root:{flexFlow:"column nowrap"},fullHeight:{height:"100%"},containerWithShadow:{boxShadow:e.shadows[4]},expandingFlexItem:{flex:1},fixedSizeFlexItem:{flex:0},textareaContainer:{display:"flex",flexFlow:"column nowrap",padding:"1.5em",paddingBottom:"0.55em",backgroundColor:e.palette.primary.main},threadTextarea:{fontFamily:"inherit",fontSize:"inherit",resize:"none",width:"100%",padding:"0.5em 0.75em",color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,border:0,boxShadow:"inset 0px 0px 5px 0px rgba(0, 0, 0, 0.4)","&:focus":{border:0,outline:0}},statsContainer:{padding:"1em 1.5em",display:"flex",flexFlow:"row nowrap",justifyContent:"space-between",backgroundColor:e.palette.primary.dark},statsText:{color:e.palette.primary.contrastText2},emojiPicker:{position:"absolute"}}})),oe=r.a.forwardRef((function(e,t){var n=ie();return Object(F.jsxs)(C.a,{container:!0,spacing:2,className:b()(n.root,n.fullHeight),children:[Object(F.jsx)(C.a,{item:!0,xs:12,className:b()(n.expandingFlexItem,n.fullHeight),children:Object(F.jsxs)(k.a,{className:b()(n.textareaContainer,n.fullHeight,n.containerWithShadow),children:[Object(F.jsx)("textarea",{className:b()(n.threadTextarea,n.fullHeight),onChange:e.handleTweetInput,onSelect:e.handleCursorPositionChange,placeholder:"Type your tweet here...",value:e.tweetText,ref:t}),Object(F.jsx)(re,{pickEmojiHandler:e.pickEmojiHandler,splitTweetHandler:e.splitTweetHandler,clearTweetHandler:e.clearTweetHandler})]})}),Object(F.jsx)(C.a,{item:!0,xs:12,className:n.fixedSizeFlexItem,children:Object(F.jsxs)(k.a,{className:b()(n.statsContainer,n.containerWithShadow),children:[Object(F.jsx)(N.a,{variant:"body2",className:n.statsText,children:"Characters: ".concat(e.tweetText.length)}),Object(F.jsx)(N.a,{variant:"body2",className:n.statsText,children:"Tweets: ".concat(e.thread.length)})]})}),Object(F.jsx)(I.a,{mdUp:!0,children:Object(F.jsx)(C.a,{item:!0,xs:12,className:n.fixedSizeFlexItem,children:Object(F.jsx)(A,{variant:"contained",color:"secondary",fullWidth:!0,onClick:e.viewThreadHandler,children:"View thread"})})})]})})),ce=n(39),se=n(101),le=n.n(se),ue=n(100);n.n(ue).a.config();var de=280,fe="Untitled User",he=Object(h.a)((function(e){return{root:{width:"100%",marginTop:"0.4em",display:"flex",flexFlow:"row nowrap",gap:0,justifyContent:"space-between",alignItems:"center"},imageButton:{margin:0,padding:0,position:"relative",left:"-0.1875rem"},resetFont:{fontFamily:"inherit",fontSize:"inherit"},tweetLength:{margin:0,width:"100%",textAlign:"right",color:e.palette.secondary.main}}}));function me(e){var t=he(),n=[".png",".jpg",".jpeg",".gif",".webp"],a=function(e){return e.length>4||e.some((function(e){return"image/gif"===e.type}))&&e.length>1},r=function(e){var t=n.map((function(e){return"image/".concat(e.slice(1))}));return e.every((function(e){return t.some((function(t){return e.type===t}))}))},i=function(e){return e.size<5e6||"image/gif"===e.type&&e.size<15e6};return Object(F.jsxs)(C.a,{className:t.root,children:[Object(F.jsx)(C.a,{item:!0,children:Object(F.jsxs)(J,{className:t.imageButton,size:"small",title:"Add image",disabled:e.addDisabled,onClick:function(e){e.target.parentElement.parentElement.querySelector("input[type='file']").click()},children:[Object(F.jsx)(le.a,{}),Object(F.jsx)("input",{type:"file",accept:n.join(","),multiple:!0,hidden:!0,onChange:function(t){var o=t.target.files;if(0!==o.length){var c=Array.from(o);a(c)?e.setAlertData("error","A maximum of 1 GIF or 4 images can be added"):r(c)?c.every((function(e){return i(e)}))?(e.addImagesHandler(c),t.target.value=""):e.setAlertData("error","You can only upload images that are smaller than 5 MB or GIFs smaller than 15 MB"):e.setAlertData("error","Only the following file types are supported: ".concat(n.join(", ")))}}})]})}),Object(F.jsx)(C.a,{item:!0,children:Object(F.jsx)("p",{className:b()(t.resetFont,t.tweetLength),children:"".concat(e.length,"/").concat(de)})})]})}var ge,be=n(102),je=n.n(be),pe=Object(h.a)((function(e){return{root:{position:"relative",width:"100%",minHeight:"100%",maxHeight:"100%"},deleteButton:{padding:0,margin:0,position:"absolute",right:"6px",top:"6px",display:"flex",justifyContent:"center",alignItems:"center"},iconBackground:{position:"absolute",minWidth:"65%",maxWidth:"65%",minHeight:"65%",maxHeight:"65%",backgroundColor:"black",borderRadius:"1em"},buttonIcon:{zIndex:900,scale:1.2},image:{width:"100%",height:"100%",objectFit:"cover"}}}));function xe(e){var t=pe();return Object(F.jsxs)("div",{className:t.root,style:{gridColumn:e.gridColumn,gridRow:e.gridRow},children:[Object(F.jsxs)(J,{size:"small",className:t.deleteButton,onClick:function(){return e.deleteImageHandler(e.imageIndex)},children:[Object(F.jsx)("span",{className:t.iconBackground}),Object(F.jsx)(je.a,{className:t.buttonIcon})]}),Object(F.jsx)("img",{src:e.imageSource,alt:e.altText,className:t.image,onLoad:function(){URL.revokeObjectURL(e.imageSource)}})]})}function ve(e){return e%2===0}var Oe=!1;function we(){return Oe}function ye(){return new Promise((function(e,t){window.indexedDB||t("Your browser doesn't support IndexedDB. Some features may not work properly.");var n=window.indexedDB.open("threadderDB",1);n.addEventListener("error",(function(e){var n=e.target.error;t("".concat(n.name,": ").concat(n.message))})),n.addEventListener("blocked",(function(){t("Upgrading the database failed. Please close all other tabs with this site open.")})),n.addEventListener("upgradeneeded",(function(e){!function(e){t=e.createObjectStore("images",{keyPath:"tweetIndex"}),n=[{name:"tweetIndex",keyPath:"tweetIndex",params:{unique:!0}}],n.forEach((function(e){t.createIndex(null===e||void 0===e?void 0:e.name,null===e||void 0===e?void 0:e.keyPath,null===e||void 0===e?void 0:e.params)}));var t,n}(e.target.result)})),n.addEventListener("success",(function(t){ge=t.target.result,Oe=!0,ge.addEventListener("close",(function(){Oe=!1})),e("Connected")}))}))}function ke(e,t,n){return new Promise((function(a,r){ge&&ge instanceof IDBDatabase?function(e){var t=e.map(function(){var e=Object(u.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.arrayBuffer();case 2:if(!((n=e.sent)instanceof ArrayBuffer)){e.next=5;break}return e.abrupt("return",{name:t.name,type:t.type,buffer:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return Promise.all(t)}(t).then((function(t){var i=ge.transaction(["images"],"readwrite"),o=i.objectStore("images"),c={tweetIndex:e,buffers:t},s=o[n](c),l=function(){r("Failed to save images to database")};i.addEventListener("abort",(function(){r("Adding images to the database was aborted")})),i.addEventListener("error",l),s.addEventListener("success",(function(){a("All done!")})),s.addEventListener("error",l)})).catch((function(){r("Images are not formatted properly for the database")})):r("Can't save any images because the database isn't open")}))}function Ce(e,t){return ke(e,t,"add")}function Ie(e,t){return ke(e,t,"put")}function Te(e,t){return new Promise((function(n,a){if(ge&&ge instanceof IDBDatabase){var r=ge.transaction(["images"],"readwrite"),i=r.objectStore("images")[t](e),o=function(){a("Failed to save images to database")};r.addEventListener("abort",(function(){a("Adding images to the database was aborted")})),r.addEventListener("error",o),i.addEventListener("success",(function(e){n(e.target.result)})),i.addEventListener("error",o)}else a("Can't save any images because the database isn't open")}))}function Se(e){return Te(e,"delete")}function Ne(e){return new Promise((function(t){Te(e,"get").then((function(e){t(!!e)})).catch((function(){t(!1)}))}))}function Ee(e){return e.map((function(e){return new File([e.buffer],e.name,{type:e.type})}))}var Le=Object(h.a)((function(e){return{root:{marginBottom:"1em",flexFlow:"row nowrap","&:last-child":{marginBottom:0}},expandingFlexItem:{flex:1},fixedSizeFlexItem:{flex:0},verticalGrid:{display:"flex",flexFlow:"column nowrap"},centerVerticalGridItems:{alignItems:"center"},threadLineContainer:{padding:0},threadLine:{width:"2px",height:"calc(100% + 1.5em)",backgroundColor:e.palette.background.default},tweetContainer:{marginLeft:"1em"},resetFont:{fontFamily:"inherit",fontSize:"inherit"},defaultTextColor:{color:e.palette.primary.contrastText},userName:{fontWeight:"bold"},userHandle:{color:e.palette.primary.contrastText2,marginLeft:"0.5em"},tweetText:{padding:0,margin:0,marginTop:"0.25em",whiteSpace:"pre-wrap",overflowWrap:"break-word"},imageGallery:{width:"100%",height:"16em",minHeight:"16em",maxHeight:"16em",marginTop:"0.4em",borderRadius:"0.5em",display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr",gridGap:"0.25em"},hiddenOverflow:{overflow:"hidden"}}}));function Fe(e){var t=Le(),n=e.tweetIndex,r=e.setAlertData,i=Object(a.useState)([]),o=Object(d.a)(i,2),c=o[0],l=o[1],f=Object(a.useState)(!0),h=Object(d.a)(f,2),m=h[0],g=h[1],j=Object(a.useState)(!1),p=Object(d.a)(j,2),x=p[0],v=p[1],O=function(e){var t=[].concat(Object(ce.a)(c.slice(0,e)),Object(ce.a)(c.slice(e+1)));l(t)},w=c.map((function(e,t,n){var a,r,i=(a=t,r=n.length,[ve(a)?1:2,ve(a)&&r===a+1||a%2!==0?3:2]),o=Object(d.a)(i,2),c=o[0],s=o[1],l=function(e,t){return[e<2?1:2,e<2&&t<3||e>=2?3:2]}(t,n.length),u=Object(d.a)(l,2),f=u[0],h=u[1],m=e+t+c+s+f+h,g=URL.createObjectURL(e);return Object(F.jsx)(xe,{imageSource:g,altText:"",gridColumn:"".concat(c," / ").concat(s),gridRow:"".concat(f," / ").concat(h),imageIndex:t,deleteImageHandler:O},m)}));return Object(a.useEffect)((function(){var e,t;m&&(e=setInterval((function(){we()&&(clearInterval(e),function(e){return new Promise((function(t){Te(e,"get").then((function(e){t(e?Ee(e.buffers):[])})).catch((function(){t([])}))}))}(n).then((function(e){l(e)})),g(!1))}),20),t||(t=setTimeout((function(){clearInterval(e)}),1e4)))}),[m,n]),Object(a.useEffect)((function(){var e=4===c.length||1===c.length&&"image/gif"===c[0].type;v(e)}),[c]),Object(a.useEffect)((function(){Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!we()){e.next=5;break}return e.next=3,Ne(n);case 3:e.sent?c.length>0?Ie(n,c).catch((function(e){r("error",e)})):Se(n).catch((function(e){r("error",e)})):c.length>0&&Ce(n,c).catch((function(e){r("error",e)}));case 5:case"end":return e.stop()}}),e)})))()}),[n,r,c]),Object(F.jsxs)(C.a,{container:!0,className:t.root,children:[Object(F.jsxs)(C.a,{container:!0,className:b()(t.fixedSizeFlexItem,t.verticalGrid,t.centerVerticalGridItems),children:[Object(F.jsx)(C.a,{item:!0,children:Object(F.jsx)(B.a,{src:e.user.profileImage,alt:"".concat(e.user.name," profile picture")})}),e.threadLine&&Object(F.jsx)(C.a,{item:!0,className:b()(t.expandingFlexItem,t.threadLineContainer),children:Object(F.jsx)("div",{className:t.threadLine})})]}),Object(F.jsxs)(C.a,{container:!0,className:b()(t.expandingFlexItem,t.verticalGrid,t.tweetContainer,t.hiddenOverflow),children:[Object(F.jsxs)(C.a,{item:!0,children:[Object(F.jsx)("span",{className:b()(t.resetFont,t.defaultTextColor,t.userName),children:e.user.name}),Object(F.jsx)("span",{className:b()(t.resetFont,t.userHandle),children:"@".concat(e.user.screenName)})]}),Object(F.jsx)(C.a,{item:!0,children:Object(F.jsx)("p",{className:b()(t.resetFont,t.defaultTextColor,t.tweetText),children:e.text})}),Object(F.jsx)(I.a,{xsUp:0===c.length,children:Object(F.jsx)(C.a,{item:!0,className:b()(t.imageGallery,t.hiddenOverflow),children:w})}),Object(F.jsx)(C.a,{item:!0,children:Object(F.jsx)(me,{length:e.text.length,addDisabled:x,setAlertData:e.setAlertData,addImagesHandler:function(e){var t=[].concat(Object(ce.a)(c),Object(ce.a)(e));l(t)}})})]})]})}var He=Object(h.a)((function(e){return{root:{flexFlow:"column nowrap"},fullHeight:{height:"100%"},containerWithShadow:{boxShadow:e.shadows[4]},expandingFlexItem:{flex:1},fixedSizeFlexItem:{flex:0},autoOverflow:{overflow:"auto"},hiddenOverflow:{overflow:"hidden"},tweetsContainer:{padding:"1.5em",backgroundColor:e.palette.primary.main},buttonRowContainer:{display:"flex",flexFlow:"row nowrap",justifyContent:"space-between",gap:"1em",margin:0,padding:0}}}));function Ae(e){var t=He(),n=e.thread.map((function(t,n,a){return Object(F.jsx)(Fe,{tweetIndex:n,user:e.user,text:t,threadLine:n+1<a.length,setAlertData:e.setAlertData},n)}));return Object(F.jsxs)(C.a,{container:!0,spacing:2,className:b()(t.root,t.fullHeight,t.hiddenOverflow),children:[Object(F.jsx)(C.a,{item:!0,xs:12,className:b()(t.expandingFlexItem,t.fullHeight,t.hiddenOverflow),children:Object(F.jsx)(k.a,{className:b()(t.tweetsContainer,t.fullHeight,t.containerWithShadow,t.autoOverflow),children:n})}),Object(F.jsx)(C.a,{item:!0,xs:12,className:t.fixedSizeFlexItem,children:Object(F.jsxs)(k.a,{className:b()(t.buttonRowContainer,t.fullHeight),children:[Object(F.jsx)(I.a,{mdUp:!0,children:Object(F.jsx)(A,{variant:"contained",color:"secondary",fullWidth:!0,onClick:e.editThreadHandler,children:"Edit thread"})}),Object(F.jsx)(A,{variant:"contained",color:"secondary",onClick:e.publishHandler,disabled:!n.length>0,fullWidth:!0,children:"Publish thread"})]})})]})}var De=n(221),ze=n(211),Be=n(212),We=Object(h.a)((function(e){return{dialogText:{color:e.palette.primary.contrastText,textAlign:"center"}}}));function Pe(e){var t=We();return Object(F.jsx)(De.a,{open:e.open,children:Object(F.jsx)(ze.a,{children:Object(F.jsx)(Be.a,{className:t.dialogText,children:e.msg})})})}var Re=n(213),Ue=n(217),Ge=Object(h.a)((function(e){return{root:{position:"absolute",width:"50%",margin:0,zIndex:1e4,left:"25%",top:0}}}));function Me(e){var t=Ge();return Object(F.jsx)(Re.a,{in:e.visible,className:t.root,children:Object(F.jsx)(Ue.a,{severity:e.severity,children:e.msg})})}function _e(e){return e.replace(/^[ \t]*/,"").replace(/[ \t]*$/,"")}function qe(e){return e.split(/(\n)/).filter((function(e,t,n){return"\n"!==e||"\n"===e&&"\n"!==n[t]}))}function Ve(e){var t,n=[],a=Object(l.a)(e.matchAll(/\svs?\.|\s\w+[a-zA-Z]+(\.)(?=\s*[a-zA-Z]+\w*)|\d+[\s./-]\d+(\.)(?=\s*\W*[a-zA-Z]+\w*\W*)|\s\d+(\.)(?=\s*\W*[a-zA-Z]+\w*\W*)|(\.)$/g));try{for(a.s();!(t=a.n()).done;){var r=t.value;(r[1]||r[2]||r[3]||r[4])&&n.push(r.index+r[0].length)}}catch(i){a.e(i)}finally{a.f()}return n.map((function(t,n,a){return 0===n?e.slice(0,t):n+1===a.length&&t+1<e.length?e.slice(t):e.slice(a[n-1],t)})).map((function(e){return _e(e)}))}function Je(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";if(0===e.length)return[];for(var n=[],a=0;a<e.length;a++)if(0!==a){var r=n.length-1,i=n[r],o=e[a];i.length<=70||i.length+o.length<=de?(i+=o.startsWith("\n")?o:"".concat(t).concat(o),n[r]=i):n.push(e[a])}else n.push(e[a]);return n}function Ye(e){for(var t=[],n=0;n<e.length;n++){var a=e[n];if(0!==n){var r=t.length-1,i=$e(t[r]);i.length+a.length+1<=de?t[r]="".concat(i," ").concat(a):t.push(a)}else t.push(a)}return t}function Ze(e){if(e.length<=de)return e;for(var t=Math.ceil(e.length/277),n=[],a=0;a<t;a++){var r=277*a,i=277*(a+1),o=e.slice(r,i)+"...";n.push(o)}return n}function $e(e){return"..."===e.slice(e.length-3)?e.slice(0,e.length-3):e}function Ke(e){var t=e.trim().split("(---)").map((function(e){return e.trim()})).filter((function(e){return""!==e}));if(Qe(t))return t;var n=t.map((function(e){return e.length<=de?e:function(e){var t=Je(qe(e),"\n");return t.every((function(e){return e.length<=de}))?t:Je(t.map((function(e){return e.length<=de?e:Ve(e)})).flat().map((function(e){return e.trim()})))}(e)})).flat().map((function(e){return e.trim()}));return Qe(n)?n:Ye(n.map((function(e){return e.length<=de?e:function(e){if(e.length<=de)return e;var t,n=e.split(" ").filter((function(e){return 0!==e.length})),a="",r=[],i=Object(l.a)(n);try{for(i.s();!(t=i.n()).done;){var o=t.value.trim();o.length>de?(a.length>0&&(r.push("".concat(a,"...")),a=""),r=[].concat(Object(ce.a)(r),Object(ce.a)(Ze(o)))):0===a.length?a+=o:a.length+o.length+1<277?a+=" ".concat(o):(r.push("".concat(a,"...")),a=o)}}catch(s){i.e(s)}finally{i.f()}a.length>0&&r.push(a);var c=r.length-1;return r[c]=$e(r[c]),r}(e)})).flat().map((function(e){return e.trim()}))).flat().map((function(e){return e.trim()}))}function Qe(e){return e.every((function(e){return e.length<=de}))}function Xe(e){return null!==e&&(t=e,Object.entries(t).length>0)&&function(e,t){var n,a=Object.keys(e),r=Object(l.a)(t);try{for(r.s();!(n=r.n()).done;){var i=n.value;if(!a.includes(i))return!1}}catch(o){r.e(o)}finally{r.f()}return!0}(e,["name","screenName","profileImage"])&&e.name!==fe;var t}var et=n(103),tt=n.n(et);function nt(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return tt()({url:e,method:t,withCredentials:!0,baseURL:"",data:n||{}})}function at(e){return new Promise((function(t,n){var a=e.map((function(e){return function(e){var t=new FormData;return t.append("mediaFile",e),nt("/upload_media","post",t)}(e)}));Promise.all(a).then((function(e){var n=e.map((function(e){return e.data.media_id}));t(n)})).catch((function(e){n(e)}))}))}function rt(e){return nt("/publish_thread","post",{tweets:e})}function it(e){return"local"===e?localStorage:"session"===e?sessionStorage:void 0}function ot(e,t,n){var a=it(e);a&&a.setItem(t,JSON.stringify(n))}function ct(e,t){var n=it(e);if(n)return JSON.parse(n.getItem(t))}var st=Object(h.a)((function(e){return{root:{height:"100vh",maxHeight:"100vh"},gridContainer:{flexFlow:"column nowrap",height:"100%"},appHeader:{flex:0},appView:Object(f.a)({flex:1},e.breakpoints.up("md"),{display:"flex",flexFlow:"row nowrap",gap:e.spacing(1.5)}),mainArea:{height:"100%"},hiddenOverflow:{overflow:"hidden"}}}));function lt(e){var t=st(),n={name:fe,screenName:"untitled_user",profileImage:""},r=Object(a.useState)(!1),i=Object(d.a)(r,2),o=i[0],c=i[1],f=Object(a.useState)(!1),h=Object(d.a)(f,2),g=h[0],j=h[1],x=Object(a.useState)("error"),v=Object(d.a)(x,2),O=v[0],T=v[1],S=Object(a.useState)(""),N=Object(d.a)(S,2),E=N[0],L=N[1],H=Object(a.useState)(!1),A=Object(d.a)(H,2),D=A[0],z=A[1],B=Object(a.useState)("This is an empty dialog"),W=Object(d.a)(B,2),P=W[0],R=W[1],U=Object(a.useState)(ct("session","loggedIn")||!1),G=Object(d.a)(U,2),M=G[0],_=G[1],V=Object(a.useState)(ct("session","user")||n),J=Object(d.a)(V,2),Y=J[0],Z=J[1],$=Object(a.useState)(ct("session","tweetText")||""),K=Object(d.a)($,2),Q=K[0],X=K[1],ee=Object(a.useState)({start:Q.length,end:Q.length}),te=Object(d.a)(ee,2),ne=te[0],ae=te[1],re=Object(a.useState)([]),ie=Object(d.a)(re,2),ce=ie[0],se=ie[1],le=Object(a.useState)(!0),ue=Object(d.a)(le,2),de=ue[0],he=ue[1],me=Object(a.createRef)(),be=function(e){var t=function(e,t,n){return[e.slice(0,t.start)+n+e.slice(t.end),t.start+n.length]}(Q,ne,e),n=Object(d.a)(t,2),a=n[0],r=n[1];ae({start:r,end:r}),X(a)},je=function(){he(!de)},pe=Object(a.useCallback)((function(e,t){j(!0),T(e),L(t)}),[]),xe=function(){Oe("Please wait while we try to log you into your account"),nt("/request_token","get").then((function(e){document.location.href=e.data.redirect})).catch((function(e){console.log(e),pe("error","string"===typeof e?e:"Login failed")})).finally(ke)},ve=Object(a.useCallback)(Object(u.a)(s.a.mark((function e(){var t,n,a,r,i,o,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Oe("Hold tight while we publish your thread"),t=ce.map((function(e){return{text:e,media:[]}})),e.next=4,new Promise((function(e,t){if(ge&&ge instanceof IDBDatabase){var n=ge.transaction(["images"],"readonly"),a=n.objectStore("images").getAll(),r=function(){t("Failed to retrieve images from the database")};n.addEventListener("error",r),n.addEventListener("abort",(function(){t("Retrieving the images from the database was aborted")})),a.addEventListener("error",r),a.addEventListener("success",(function(t){var n,a=[],r=Object(l.a)(t.target.result);try{for(r.s();!(n=r.n()).done;){var i=n.value,o=i.buffers;delete i.buffers,i.files=Ee(o),a.push(i)}}catch(c){r.e(c)}finally{r.f()}e(a)}))}else t("Database is not connected")}));case 4:if(!((n=e.sent)instanceof Array&&n.length>0)){e.next=34;break}a=Object(l.a)(n),e.prev=7,a.s();case 9:if((r=a.n()).done){e.next=26;break}return i=r.value,o=Number(i.tweetIndex),e.prev=12,e.next=15,at(i.files);case 15:c=e.sent,t[o].media=c,e.next=24;break;case 19:return e.prev=19,e.t0=e.catch(12),ke(),pe("error","Thread publishing was cancelled because publishing the images failed"),e.abrupt("return");case 24:e.next=9;break;case 26:e.next=31;break;case 28:e.prev=28,e.t1=e.catch(7),a.e(e.t1);case 31:return e.prev=31,a.f(),e.finish(31);case 34:rt(t).then((function(){pe("success","Thread published successfully"),X("")})).catch((function(e){console.log(e),pe("error","string"===typeof e?e:"Failed to publish your thread")})).finally(ke);case 35:case"end":return e.stop()}}),e,null,[[7,28,31,34],[12,19]])}))),[ce,pe]),Oe=function(e){R(e),z(!0)},ke=function(){z(!1)};return Object(a.useEffect)((function(){o||ye().then((function(){c(!0)})).catch((function(e){pe("error",e)}))}),[o,pe]),Object(a.useEffect)((function(){ct("session","loginSuccessMessage")?(ot("session","loginSuccessMessage",!1),pe("success","You are now logged in")):ct("session","loginFailMessage")&&(ot("session","loginFailMessage",!1),pe("error","Login failed"))}),[pe]),Object(a.useEffect)((function(){if(""!==document.location.search){var e=p.a.parse(document.location.search);document.location.href="/",Xe(e)?(_(!0),Z(e),ot("session","loginSuccessMessage",!0)):ot("session","loginFailMessage",!0)}}),[]),Object(a.useEffect)((function(){""===document.location.search&&ce.length>0&&ct("session","publishAfterLogin")&&(ot("session","publishAfterLogin",!1),ve())}),[ce,ve]),Object(a.useEffect)((function(){me.current&&(me.current.selectionStart=ne.start,me.current.selectionEnd=ne.end)})),Object(a.useEffect)((function(){me.current&&me.current.focus()}),[me]),Object(a.useEffect)((function(){ot("session","loggedIn",M)}),[M]),Object(a.useEffect)((function(){ot("session","user",Y)}),[Y]),Object(a.useEffect)((function(){var e,t;e=setInterval((function(){we()&&(clearInterval(e),0===Q.length&&function(){if(ge&&ge instanceof IDBDatabase){var e=ge.transaction(["images"],"readwrite"),t=e.objectStore("images").clear();e.addEventListener("error",(function(){return"Clear images transaction failed"})),t.addEventListener("error",(function(){return"Clear images request failed"}))}}())}),20),t||(t=setTimeout((function(){clearInterval(e)}),1e4))}),[Q]),Object(a.useEffect)((function(){0===Q.length?se([]):se(Ke(Q)),ot("session","tweetText",Q)}),[Q]),Object(a.useEffect)((function(){var e;if(g)return e&&clearTimeout(e),e=setTimeout((function(){j(!1)}),4e3),function(){return clearTimeout(e)}}),[g]),Object(F.jsx)(m.a,{theme:w,children:Object(F.jsxs)(y.a,{children:[Object(F.jsx)(Me,{visible:g,severity:O,msg:E}),Object(F.jsx)(Pe,{open:D,msg:P}),Object(F.jsx)(k.a,{className:t.root,children:Object(F.jsxs)(C.a,{container:!0,spacing:3,className:t.gridContainer,children:[Object(F.jsx)(C.a,{item:!0,xs:12,className:t.appHeader,children:Object(F.jsx)(q,{user:Y,loggedIn:M,login:xe,logout:function(){nt("/logout","get").then((function(){pe("success","You are now logged out"),_(!1),Z(n)})).catch((function(e){console.log(e),pe("error","string"===typeof e?e:"Logout failed")}))}})}),Object(F.jsxs)(C.a,{item:!0,xs:12,className:b()(t.appView,t.hiddenOverflow),children:[Object(F.jsx)(I.a,{smDown:!de,children:Object(F.jsx)(C.a,{item:!0,xs:12,md:7,className:b()(t.mainArea,t.hiddenOverflow),children:Object(F.jsx)(oe,{tweetText:Q,handleTweetInput:function(e){var t=e.target.value;X(t),ae({start:e.target.selectionStart,end:e.target.selectionEnd})},handleCursorPositionChange:function(e){var t=e.target.selectionStart,n=e.target.selectionEnd;ae({start:t,end:n})},pickEmojiHandler:function(e){be(e.native)},splitTweetHandler:function(){be("\n(---)\n")},clearTweetHandler:function(){X("")},thread:ce,viewThreadHandler:je,ref:me})})}),Object(F.jsx)(I.a,{smDown:de,children:Object(F.jsx)(C.a,{item:!0,xs:12,md:5,className:b()(t.mainArea,t.hiddenOverflow),children:Object(F.jsx)(Ae,{user:Y,thread:ce,editThreadHandler:je,publishHandler:function(){M?ve():(ot("session","publishAfterLogin",!0),xe())},setAlertData:pe})})})]})]})})]})})}var ut=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function dt(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(164);o.a.render(Object(F.jsx)(r.a.StrictMode,{children:Object(F.jsx)(lt,{})}),document.querySelector("#root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");ut?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):dt(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):dt(t,e)}))}}()}},[[165,1,2]]]);
//# sourceMappingURL=main.f5dbd3c1.chunk.js.map