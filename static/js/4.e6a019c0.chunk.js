(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[4],{292:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__2xp4L",dialogsItems:"Dialogs_dialogsItems__1h0Fr",dialog:"Dialogs_dialog__2rCpF",active:"Dialogs_active__1gAP3",messages:"Dialogs_messages__3BnXf",message:"Dialogs_message__1_Ih0",dialogItem:"Dialogs_dialogItem__CfNnJ"}},299:function(e,s,a){"use strict";a.r(s);var t=a(132),n=a(16),i=a(3),c=a(1),o=a(37),d=a(38),r=a(40),l=a(39),g=a(0),j=a.n(g),u=a(11),b=function(e){return{isAuth:e.auth.isAuth}},m=a(292),O=a.n(m),h=a(12),f=function(e){var s="/dialog/"+e.id;return Object(c.jsxs)("div",{className:O.a.dialog,children:[Object(c.jsx)("img",{src:"https://avatars.mds.yandex.net/get-ott/374297/2a000001616b87458162c9216ccd5144e94d/678x380",alt:"fail load"}),Object(c.jsx)(h.b,{className:O.a.dialogItem,to:s,children:e.name})]})},p=function(e){return Object(c.jsx)("div",{className:O.a.message,children:e.message})},x=a(92),_=a(133),v=a(66),y=a(33),M=Object(v.a)(15),w=Object(_.a)({form:"dialogAddMessageForm"})((function(e){return Object(c.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(c.jsx)("div",{children:Object(c.jsx)(x.a,{name:"newMessageBody",component:y.c,value:e.newMessageBody,validate:[v.b,M]})}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"Send"})})]})})),D=function(e){if(!e.isAuth)return Object(c.jsx)(u.a,{to:"/login"});var s=e.dialogsPage,a=s.dialogs.map((function(e){return Object(c.jsx)(f,{name:e.name,id:e.id},e.id)})),t=s.messages.map((function(e){return Object(c.jsx)(p,{message:e.message},e.id)})),n=s.newMessageBody;return Object(c.jsxs)("div",{className:O.a.dialogs,children:[Object(c.jsx)("div",{className:O.a.dialogsItems,children:a}),Object(c.jsx)("div",{className:O.a.messages,children:Object(c.jsxs)("div",{children:[t,Object(c.jsx)("div",{}),Object(c.jsx)(w,{onSubmit:function(s){console.log(s),e.sendMessage(s.newMessageBody)},newMessageBody:n})]})})]})},I=a(10);s.default=Object(I.d)(Object(n.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(t.b)(s))}}})),(function(e){var s=function(s){Object(r.a)(t,s);var a=Object(l.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return this.props.isAuth?Object(c.jsx)(e,Object(i.a)({},this.props)):Object(c.jsx)(u.a,{to:"/login"})}}]),t}(j.a.Component);return Object(n.b)(b)(s)}))(D)}}]);
//# sourceMappingURL=4.e6a019c0.chunk.js.map