"use strict";(self.webpackChunkmy_animal=self.webpackChunkmy_animal||[]).push([[13],{591:function(e,a,n){n.d(a,{Z:function(){return r}});var i=n(885),t=n(791),l=n(184),r=function(e){var a=(0,t.useState)(),n=(0,i.Z)(a,2),r=n[0],s=n[1],d=(0,t.useState)(),c=(0,i.Z)(d,2),o=c[0],u=c[1],p=(0,t.useState)(!1),m=(0,i.Z)(p,2),h=m[0],x=m[1],v=(0,t.useRef)();(0,t.useEffect)((function(){if(r){var e=new FileReader;e.onload=function(){u(e.result)},e.readAsDataURL(r)}}),[r]);return(0,l.jsxs)("div",{className:"form-control",children:[(0,l.jsx)("input",{id:e.id,ref:v,type:"file",accept:".jpg,.png,.jpeg",name:"profile-img",onChange:function(a){var n,i=h;a.target.files&&1===a.target.files.length?(n=a.target.files[0],s(n),x(!0),i=!0):(x(!1),i=!1),e.onInput(e.id,n,i)},style:{display:"none"}}),(0,l.jsxs)("div",{className:"image-upload",children:[(0,l.jsxs)("div",{className:"image-upload__preview",children:[o&&(0,l.jsx)("img",{src:o.toString(),alt:"preview"}),!o&&(0,l.jsx)("p",{children:"\uc0ac\uc9c4\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."})]}),(0,l.jsx)("button",{type:"button",onClick:function(){v.current.click()},children:"\uc0ac\uc9c4 \uc120\ud0dd"})]}),!h&&"* ".concat(e.errorText)]})}},625:function(e,a,n){n.r(a),n.d(a,{default:function(){return j}});var i=n(214),t=n(861),l=n(885),r=n(791),s=n(871),d=n(158),c=n(581),o=n(436),u=n(612),p=n(591),m=n(534),h=n(388),x={"new-animal":"AddAnimal_new-animal__5H8sC","new-animal__detail":"AddAnimal_new-animal__detail__0X+6W","new-animal__desc":"AddAnimal_new-animal__desc__CqFHP","new-animal__btn":"AddAnimal_new-animal__btn__ezQcj"},v=n(89),_=n(184),j=function(){var e=(0,o.Z)(),a=e.isLoading,n=e.error,j=e.sendRequest,f=e.clearError,g=(0,r.useContext)(d.V),w=(0,s.s0)(),b=(0,c.Z)({animalName:{value:"",isValid:!1},species:{value:"",isValid:!1},age:{value:"",isValid:!1},description:{value:"",isValid:!1},imageUrl:{value:null,isValid:!1}},!1),Z=(0,l.Z)(b,2),N=Z[0],y=Z[1],A=function(){var e=(0,t.Z)((0,i.Z)().mark((function e(a){var n,t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,(n=new FormData).append("animalName",N.inputs.animalName.value),n.append("species",N.inputs.species.value),n.append("age",N.inputs.age.value),n.append("description",N.inputs.description.value),n.append("imageUrl",N.inputs.imageUrl.value),g.userId&&n.append("creator",g.userId),e.next=11,j("".concat("https://my-animals.herokuapp.com/api","/animals"),"POST",{Authorization:"Bearer ".concat(g.token)},n);case 11:t=e.sent,console.log(t),w("/".concat(g.userId,"/animals")),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(a){return e.apply(this,arguments)}}();return(0,_.jsxs)(r.Fragment,{children:[a&&(0,_.jsx)(h.Z,{isLoading:a}),n&&(0,_.jsx)(v.Z,{onClose:f,errorText:n}),(0,_.jsxs)("div",{className:x["new-animal"],children:[(0,_.jsx)("h2",{children:"ADD NEW TODO"}),(0,_.jsxs)("form",{onSubmit:A,children:[(0,_.jsxs)("div",{className:x["new-animal__detail"],children:[(0,_.jsxs)("div",{children:[(0,_.jsx)("label",{htmlFor:"animalName",children:"\uc774\ub984 : "}),(0,_.jsx)(m.Z,{id:"animalName",type:"text",placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",element:"input",validators:[(0,u.hg)()],onInput:y,errorText:"\uc62c\ubc14\ub978 \uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."})]}),(0,_.jsxs)("div",{children:[(0,_.jsx)("label",{htmlFor:"species",children:"\uc885\ub958 : "}),(0,_.jsx)(m.Z,{id:"species",type:"text",placeholder:"\uc885\ub958\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",element:"input",validators:[(0,u.hg)()],onInput:y,errorText:"\uc62c\ubc14\ub978 \uc885\ub958\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."})]}),(0,_.jsxs)("div",{children:[(0,_.jsx)("label",{htmlFor:"age",children:"\ub098\uc774 : "}),(0,_.jsx)(m.Z,{id:"age",type:"number",placeholder:"\ub098\uc774\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",element:"input",validators:[(0,u.hg)()],onInput:y,errorText:"\uc62c\ubc14\ub978 \ub098\uc774\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."})]})]}),(0,_.jsx)("div",{className:x["image-input"],children:(0,_.jsx)(p.Z,{onInput:y,id:"imageUrl",errorText:"\uc62c\ubc14\ub978 \uc0ac\uc9c4\uc744 \ub123\uc5b4\uc8fc\uc138\uc694."})}),(0,_.jsxs)("div",{className:x["new-animal__desc"],children:[(0,_.jsx)("label",{htmlFor:"description",children:"\ud2b9\uc9d5 : "}),(0,_.jsx)(m.Z,{id:"description",placeholder:"\ud2b9\uc9d5\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",element:"textarea",validators:[(0,u.CP)(5)],rows:5,onInput:y,errorText:"\ud2b9\uc9d5\uc744 5\uae00\uc790 \uc774\uc0c1 \uc785\ub825\ud574\uc8fc\uc138\uc694."})]}),(0,_.jsx)("div",{className:x["new-animal__btn"],children:(0,_.jsx)("button",{type:"submit",disabled:!N.isValid,children:"\ucd94\uac00\ud558\uae30"})})]})]})]})}}}]);
//# sourceMappingURL=13.6c7d5861.chunk.js.map