(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[3],{293:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__2WXhY",posts:"MyPosts_posts__3gXdt"}},294:function(t,e,s){t.exports={item:"Post_item__1R9gh"}},295:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__b9bzy",mainPhoto:"ProfileInfo_mainPhoto__2KKsi",touchBlock:"ProfileInfo_touchBlock__2qfj1",spanBlock:"ProfileInfo_spanBlock__u6fIb",infoBlock:"ProfileInfo_infoBlock__XeJNY",myContacts:"ProfileInfo_myContacts__29FD2",toggleEditMode:"ProfileInfo_toggleEditMode__2VYSN"}},296:function(t,e,s){t.exports={StatusBody:"ProfileStatus_StatusBody__2FIKP",StatusSpan:"ProfileStatus_StatusSpan__2SLCC"}},298:function(t,e,s){"use strict";s.r(e);var o=s(3),c=s(1),i=s(36),n=s(37),a=s(39),r=s(38),l=s(0),j=s.n(l),d=s(15),u=s(99),b=s(293),h=s.n(b),p=s(294),f=s.n(p),O=function(t){return Object(c.jsxs)("div",{className:f.a.item,children:[Object(c.jsx)("img",{src:"https://avatars.mds.yandex.net/get-ott/374297/2a000001616b87458162c9216ccd5144e94d/678x380",alt:"fail load"}),t.message,Object(c.jsx)("div",{children:Object(c.jsxs)("span",{children:[t.likesCount," likes"]})})]})},x=s(133),v=s(66),m=s(32),k=Object(v.a)(10),g=Object(x.a)({form:"ProfileAddNewPostForm"})((function(t){var e=t.handleSubmit;return Object(c.jsxs)("form",{onSubmit:e,children:[Object(m.a)(null,"newPostText",[v.b,k],m.c),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"Add post"})})]})})),P=function(t){var e=t.posts,s=t.addPost,o=e.map((function(t){return Object(c.jsx)(O,{message:t.message,likesCount:t.likesCount})}));return Object(c.jsxs)("div",{className:h.a.postsBlock,children:[Object(c.jsx)("h3",{children:"My posts:"}),Object(c.jsx)(g,{onSubmit:function(t){s(t.newPostText)}}),Object(c.jsx)("div",{className:h.a.posts,children:o})]})},_=Object(d.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),{addPost:u.a})(P),S=s(100),y=s(295),N=s.n(y),B=s(41),C=s(111),I=s(296),F=s.n(I),A=function(t){var e=Object(l.useState)(!1),s=Object(S.a)(e,2),o=s[0],i=s[1],n=Object(l.useState)(t.status),a=Object(S.a)(n,2),r=a[0],j=a[1];Object(l.useEffect)((function(){j(t.status)}),[t.status]);return Object(c.jsxs)("div",{children:[!o&&Object(c.jsx)("div",{className:F.a.StatusBody,children:Object(c.jsxs)("span",{onDoubleClick:function(){i(!0)},children:[Object(c.jsxs)("span",{className:F.a.StatusSpan,children:[Object(c.jsx)("b",{children:"Status"}),":"]})," ",t.status||"Status is Undefinded"]})}),o&&Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{children:"edit status: "}),Object(c.jsx)("input",{autoFocus:!0,onBlur:function(){i(!1),t.updateStatus(r)},onChange:function(t){j(t.currentTarget.value)},value:r})]})]})},M=function(t){var e=t.profile,s=t.activateEditMode;return Object(c.jsxs)("form",{children:[Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:s,children:"save edit"})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"Full Name"}),": ",e.fullName," ",Object(m.a)()," //\u0421\u043e\u0437\u0434\u0430\u0432\u0430\u043b\u0438 \u0444\u043e\u0440\u043c\u0443 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e CreateField"]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"About me"}),": ",e.aboutMe]}),Object(c.jsx)("div",{children:e.lookingForAJob?Object(c.jsx)("div",{children:Object(c.jsx)("b",{children:"Looking for a job"})}):Object(c.jsx)("div",{children:Object(c.jsx)("b",{children:"Not looking for a job"})})}),Object(c.jsxs)("div",{children:[e.lookingForAJob?Object(c.jsxs)("div",{children:[" ",Object(c.jsx)("b",{children:"Description of the job you are looking for"}),": ",e.lookingForAJobDescription]}):null," "]})]})},w=function(t){var e=t.contact,s=t.link;return s?Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:e}),": ",s]}):null},J=function(t){var e=t.profile,s=t.status,o=t.updateStatus,i=t.isOwner,n=t.savePhoto,a=Object(l.useState)(!1),r=Object(S.a)(a,2),j=r[0],d=r[1],u=Object(l.useState)(!1),b=Object(S.a)(u,2),h=b[0],p=b[1];if(!e)return Object(c.jsx)(B.a,{});var f=function(){p(!0)};return Object(c.jsx)("div",{children:h?Object(c.jsx)(M,{profile:e,activateEditMode:f}):Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:N.a.descriptionBlock,children:[Object(c.jsxs)("div",{className:N.a.touchBlock,onClick:function(){d(!0)},onBlur:null,children:[Object(c.jsx)("img",{src:e.photos.large||C.a,alt:"fail load",className:N.a.mainPhoto}),i&&Object(c.jsx)("span",{className:N.a.spanBlock,children:"Click to change avatar"})]}),Object(c.jsxs)("div",{className:N.a.infoBlock,children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"Full Name"}),": ",e.fullName]}),j&&i&&Object(c.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&n(t.target.files[0])}}),Object(c.jsx)(A,{status:s,updateStatus:o}),Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"About me"}),": ",e.aboutMe]}),Object(c.jsx)("div",{children:e.lookingForAJob?Object(c.jsx)("div",{children:Object(c.jsx)("b",{children:"Looking for a job"})}):Object(c.jsx)("div",{children:Object(c.jsx)("b",{children:"Not looking for a job"})})}),Object(c.jsxs)("div",{children:[e.lookingForAJob?Object(c.jsxs)("div",{children:[" ",Object(c.jsx)("b",{children:"Description of the job you are looking for"}),": ",e.lookingForAJobDescription]}):null," "]}),i&&Object(c.jsx)("div",{className:N.a.toggleEditMode,children:Object(c.jsx)("button",{onClick:f,children:"edit"})})]})]}),Object(c.jsxs)("div",{className:N.a.myContacts,children:[Object(c.jsx)("b",{children:"My contacts"}),": ",Object.keys(e.contacts).map((function(t){return Object(c.jsx)(w,{contact:t,link:e.contacts[t]},t)}))]})]})})},D=function(t){return Object(c.jsxs)("div",{children:[Object(c.jsx)(J,{savePhoto:t.savePhoto,isOwner:t.isOwner,profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(c.jsx)(_,{})]})},U=s(11),E=s(9),T=function(t){Object(a.a)(s,t);var e=Object(r.a)(s);function s(){return Object(i.a)(this,s),e.apply(this,arguments)}return Object(n.a)(s,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e,s){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(c.jsx)(D,Object(o.a)(Object(o.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),s}(j.a.Component);e.default=Object(E.d)(Object(d.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.UserId,isAuth:t.auth.isAuth}}),{getUserProfile:u.d,getStatus:u.c,updateStatus:u.f,savePhoto:u.e}),U.f)(T)}}]);
//# sourceMappingURL=3.dd152359.chunk.js.map