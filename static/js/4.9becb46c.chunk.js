(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[4],{292:function(e,s,t){e.exports={dialogs:"Dialogs_dialogs__2xp4L",dialogsItems:"Dialogs_dialogsItems__1h0Fr",dialog:"Dialogs_dialog__2rCpF",active:"Dialogs_active__1gAP3",messages:"Dialogs_messages__3BnXf",message:"Dialogs_message__1_Ih0"}},298:function(e,s,t){"use strict";t.r(s);var a=t(131),n=t(14),i=t(3),c=t(1),o=t(36),d=t(37),r=t(39),j=t(38),l=t(0),g=t.n(l),u=t(11),b=function(e){return{isAuth:e.auth.isAuth}},m=t(292),O=t.n(m),h=t(12),p=function(e){var s="/dialog/"+e.id;return Object(c.jsxs)("div",{className:O.a.dialog,children:[Object(c.jsx)("img",{src:"https://avatars.mds.yandex.net/get-ott/374297/2a000001616b87458162c9216ccd5144e94d/678x380",alt:"fail load"}),Object(c.jsx)(h.b,{to:s,children:e.name})]})},x=function(e){return Object(c.jsx)("div",{className:O.a.message,children:e.message})},f=t(92),v=t(132),_=t(66),y=t(32),M=Object(_.a)(15),w=Object(v.a)({form:"dialogAddMessageForm"})((function(e){return Object(c.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(c.jsx)("div",{children:Object(c.jsx)(f.a,{name:"newMessageBody",component:y.c,value:e.newMessageBody,validate:[_.b,M]})}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"Send"})})]})})),A=function(e){if(!e.isAuth)return Object(c.jsx)(u.a,{to:"/login"});var s=e.dialogsPage,t=s.dialogs.map((function(e){return Object(c.jsx)(p,{name:e.name,id:e.id},e.id)})),a=s.messages.map((function(e){return Object(c.jsx)(x,{message:e.message},e.id)})),n=s.newMessageBody;return Object(c.jsxs)("div",{className:O.a.dialogs,children:[Object(c.jsx)("div",{className:O.a.dialogsItems,children:t}),Object(c.jsx)("div",{className:O.a.messages,children:Object(c.jsxs)("div",{children:[a,Object(c.jsx)("div",{}),Object(c.jsx)(w,{onSubmit:function(s){console.log(s),e.sendMessage(s.newMessageBody)},newMessageBody:n})]})})]})},B=t(9);s.default=Object(B.d)(Object(n.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(a.b)(s))}}})),(function(e){var s=function(s){Object(r.a)(a,s);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(c.jsx)(e,Object(i.a)({},this.props)):Object(c.jsx)(u.a,{to:"/login"})}}]),a}(g.a.Component);return Object(n.b)(b)(s)}))(A)}}]);
//# sourceMappingURL=4.9becb46c.chunk.js.map