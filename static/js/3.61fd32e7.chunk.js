(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[3],{293:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__2WXhY",posts:"MyPosts_posts__3gXdt"}},294:function(t,e,s){t.exports={item:"Post_item__1R9gh"}},295:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__b9bzy"}},297:function(t,e,s){"use strict";s.r(e);var i=s(3),n=s(1),c=s(36),o=s(37),a=s(39),r=s(38),u=s(0),d=s.n(u),j=s(14),l=s(99),b=s(293),p=s.n(b),h=s(294),f=s.n(h),O=function(t){return Object(n.jsxs)("div",{className:f.a.item,children:[Object(n.jsx)("img",{src:"https://avatars.mds.yandex.net/get-ott/374297/2a000001616b87458162c9216ccd5144e94d/678x380",alt:"fail load"}),t.message,Object(n.jsx)("div",{children:Object(n.jsxs)("span",{children:[t.likesCount," likes"]})})]})},x=s(132),v=s(66),m=s(32),g=Object(v.a)(10),k=Object(x.a)({form:"ProfileAddNewPostForm"})((function(t){var e=t.handleSubmit;return Object(n.jsxs)("form",{onSubmit:e,children:[Object(m.a)(null,"newPostText",[v.b,g],m.c),Object(n.jsx)("div",{children:Object(n.jsx)("button",{type:"submit",children:"Add post"})})]})})),P=function(t){var e=t.posts,s=t.addPost,i=e.map((function(t){return Object(n.jsx)(O,{message:t.message,likesCount:t.likesCount})}));return Object(n.jsxs)("div",{className:p.a.postsBlock,children:[Object(n.jsx)("h3",{children:"My posts"}),Object(n.jsx)(k,{onSubmit:function(t){s(t.newPostText)}}),Object(n.jsx)("div",{className:p.a.posts,children:i})]})},S=Object(j.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),{addPost:l.a})(P),w=s(295),y=s.n(w),_=s(41),A=s(110),B=s(133),C=function(t){var e=Object(u.useState)(!1),s=Object(B.a)(e,2),i=s[0],c=s[1],o=Object(u.useState)(t.status),a=Object(B.a)(o,2),r=a[0],d=a[1];Object(u.useEffect)((function(){d(t.status)}),[t.status]);return Object(n.jsxs)("div",{children:[!i&&Object(n.jsx)("div",{children:Object(n.jsxs)("span",{onDoubleClick:function(){c(!0)},children:["Status: ",t.status||"Status is Undefinded"]})}),i&&Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:"edit status: "}),Object(n.jsx)("input",{autoFocus:!0,onBlur:function(){c(!1),t.updateStatus(r)},onChange:function(t){d(t.currentTarget.value)},value:r})]})]})},F=function(t,e){return e?Object(n.jsxs)("div",{children:[t,": ",e]}):null},I=function(t){var e=t.profile,s=t.status,i=t.updateStatus;return e?Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:y.a.descriptionBlock,children:[Object(n.jsx)("img",{src:null!=e.photos.large?e.photos.large:A.a,alt:"fail load"}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{children:["name: ",e.fullName]}),Object(n.jsx)(C,{status:s,updateStatus:i}),Object(n.jsxs)("div",{children:["about me: ",e.aboutMe]}),Object(n.jsx)("div",{children:e.lookingForAJob?Object(n.jsx)("div",{children:"Finding a work"}):Object(n.jsx)("div",{children:"Is't finding a work"})}),Object(n.jsxs)("div",{children:[e.lookingForAJob?Object(n.jsxs)("div",{children:[" Description for a finding work: ",e.lookingForAJobDescription]}):null," "]}),Object(n.jsxs)("div",{children:["My contacts:",F("facebook",e.contacts.facebook),F("website",e.contacts.website),F("vk",e.contacts.vk),F("twitter",e.contacts.twitter),F("instagram",e.contacts.instagram),F("youtube",e.contacts.youtube),F("github",e.contacts.github),F("mainLink",e.contacts.mainLink)]})]})]})}):Object(n.jsx)(_.a,{})},M=function(t){return Object(n.jsxs)("div",{children:[Object(n.jsx)(I,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(n.jsx)(S,{})]})},N=s(11),U=s(9),J=function(t){Object(a.a)(s,t);var e=Object(r.a)(s);function s(){return Object(c.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(n.jsx)(M,Object(i.a)(Object(i.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(d.a.Component);e.default=Object(U.d)(Object(j.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.UserId,isAuth:t.auth.isAuth}}),{getUserProfile:l.d,getStatus:l.c,updateStatus:l.e}),N.f)(J)}}]);
//# sourceMappingURL=3.61fd32e7.chunk.js.map