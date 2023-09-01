(function(){var e={9837:function(e,a,t){"use strict";var n=t(9242),r=t(3396),o=t(7139);const s={key:0},l={key:1},i={key:0},u={key:1},c={key:2};function d(e,a,t,n,d,m){const g=(0,r.up)("Spinner"),p=(0,r.up)("SignIn"),v=(0,r.up)("Chat"),h=(0,r.up)("RoomList"),f=(0,r.up)("UserList"),w=(0,r.up)("CreateRoom");return n.connected?((0,r.wg)(),(0,r.iD)("div",l,[n.isLoggedIn?((0,r.wg)(),(0,r.iD)("div",u,[(0,r._)("div",{class:"chat-component",style:(0,o.j5)({marginLeft:n.middleMarginLeft,marginRight:n.middleMarginRight})},[(0,r.Wm)(v,{chatName:n.chat.name,chatData:n.chat.data,currentUser:n.currentUser,usersTyping:n.usersTyping,onSendMessage:n.sendMessage,onTyping:n.typing},null,8,["chatName","chatData","currentUser","usersTyping","onSendMessage","onTyping"])],4),(0,r.Wm)(h,{rooms:n.rooms,onRoomChange:n.roomChange,onCreateNewRoom:n.createNewRoomWindow,onGetRooms:n.getRooms,onToggleSidebar:n.toggleLeft},null,8,["rooms","onRoomChange","onCreateNewRoom","onGetRooms","onToggleSidebar"]),(0,r.Wm)(f,{users:n.users,currentUser:n.currentUser,chatName:n.chat.name,onLogOut:n.logOut,onRoomChange:n.roomChange,onToggleSidebar:n.toggleRight},null,8,["users","currentUser","chatName","onLogOut","onRoomChange","onToggleSidebar"])])):((0,r.wg)(),(0,r.iD)("div",i,[(0,r.Wm)(p,{onSuccess:n.loggedIn},null,8,["onSuccess"])])),n.showCreateWindow?((0,r.wg)(),(0,r.iD)("div",c,[(0,r.Wm)(w,{onDone:n.createNewRoom},null,8,["onDone"])])):(0,r.kq)("",!0)])):((0,r.wg)(),(0,r.iD)("div",s,[(0,r.Wm)(g)]))}t(7658);var m=t(4870),g=t(4161),p=t(7851);const v=e=>((0,r.dD)("data-v-671d3b27"),e=e(),(0,r.Cn)(),e),h={class:"rooms"},f=v((()=>(0,r._)("h2",null,"Conversations",-1))),w=["onClick"];function _(e,a,t,n,s,l){const i=(0,r.up)("Room");return(0,r.wg)(),(0,r.iD)("div",{class:(0,o.C_)(["sideBar",{"sideBar-hidden":n.isHidden}])},[(0,r._)("button",{class:"toggle-button",onClick:a[0]||(a[0]=(...e)=>n.toggleSidebar&&n.toggleSidebar(...e))},[(0,r._)("i",{class:(0,o.C_)(["fa-solid",{"fa-arrow-right":n.isHidden,"fa-arrow-left":!n.isHidden}])},null,2)]),(0,r._)("div",h,[(0,r._)("div",{class:"room",onClick:a[1]||(a[1]=(...e)=>n.CreateRoom&&n.CreateRoom(...e))},[(0,r.Wm)(i,{room:{name:"Create public chat"},icon:'<i class="fa-solid fa-comment-medical"></i>'})]),f,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.rooms,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"room",key:e.id,onClick:a=>n.roomChange(e.name)},[(0,r.Wm)(i,{room:e,icon:"<i class='fa-solid fa-comment-dots'></i>"},null,8,["room"])],8,w)))),128))])],2)}const b={class:"icon"},y=["innerHTML"],C={class:"name"};function D(e,a,t,n,s,l){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",b,[(0,r._)("div",{innerHTML:t.icon},null,8,y)]),(0,r._)("div",C,(0,o.zw)(t.room.name),1)])}var S={props:["room","icon"]},k=t(89);const H=(0,k.Z)(S,[["render",D],["__scopeId","data-v-10e7b8fd"]]);var U=H,O={components:{Room:U},props:["rooms"],setup(e,{emit:a}){const t=(0,m.iH)(!1),n=()=>{a("getRooms")},o=()=>{t.value=!t.value,a("toggleSidebar")},s=e=>{a("roomChange",e)},l=()=>{a("createNewRoom")};return(0,r.bv)(n),{isHidden:t,toggleSidebar:o,getRooms:n,roomChange:s,CreateRoom:l}}};const R=(0,k.Z)(O,[["render",_],["__scopeId","data-v-671d3b27"]]);var x=R;const N=e=>((0,r.dD)("data-v-3a8f5880"),e=e(),(0,r.Cn)(),e),T={class:"users-online"},L=N((()=>(0,r._)("h2",null,"Active users",-1))),I=["onClick"];function Z(e,a,t,n,s,l){const i=(0,r.up)("CurrentUser"),u=(0,r.up)("User");return(0,r.wg)(),(0,r.iD)("div",{class:(0,o.C_)(["sideBar",{"sideBar-hidden":n.isHidden}])},[(0,r._)("button",{class:"toggle-button",onClick:a[0]||(a[0]=(...e)=>n.toggleSidebar&&n.toggleSidebar(...e))},[(0,r._)("i",{class:(0,o.C_)(["fa-solid",{"fa-arrow-left":n.isHidden,"fa-arrow-right":!n.isHidden}])},null,2)]),(0,r.Wm)(i,{currentUser:t.currentUser,chatName:t.chatName,onLogOut:n.logOut},null,8,["currentUser","chatName","onLogOut"]),(0,r._)("div",T,[L,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.users,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.id},[e.name!==t.currentUser.name?((0,r.wg)(),(0,r.iD)("div",{key:0,class:"user",onClick:a=>n.roomChange(e.name)},[(0,r.Wm)(u,{user:e},null,8,["user"])],8,I)):(0,r.kq)("",!0)])))),128))])],2)}const M={class:"currentUser"},q=["src"],z={key:0},W={key:1};function E(e,a,n,s,l,i){return(0,r.wg)(),(0,r.iD)("div",M,[(0,r._)("img",{src:t(5555)("./profile"+n.currentUser.avatar+".png")},null,8,q),(0,r._)("p",null,"Logged in as: "+(0,o.zw)(n.currentUser.name),1),n.chatName?((0,r.wg)(),(0,r.iD)("p",z,(0,o.zw)(n.chatName.replace(/@/g," - ")),1)):((0,r.wg)(),(0,r.iD)("p",W,"Not in conversation")),(0,r._)("button",{onClick:a[0]||(a[0]=(...e)=>s.logOut&&s.logOut(...e)),class:"logout"},"LOG OUT")])}var j={props:["currentUser","chatName"],emits:["logOut"],setup(e,{emit:a}){const t=()=>{a("logOut")};return{logOut:t}}};const P=(0,k.Z)(j,[["render",E],["__scopeId","data-v-78a5a1ad"]]);var Y=P;const A=e=>((0,r.dD)("data-v-7496ee96"),e=e(),(0,r.Cn)(),e),G={class:"avatar"},V=["src"],F={key:0},K={class:"name"},B=A((()=>(0,r._)("br",null,null,-1))),J={class:"in-room"},Q={key:1},X={class:"name"},$=A((()=>(0,r._)("br",null,null,-1))),ee=A((()=>(0,r._)("div",{clas:"not-room"},"Not in conversation",-1)));function ae(e,a,n,s,l,i){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",G,[(0,r._)("img",{src:t(5555)("./profile"+n.user.avatar+".png")},null,8,V)]),n.user.room?((0,r.wg)(),(0,r.iD)("p",F,[(0,r._)("span",K,(0,o.zw)(n.user.name),1),(0,r.Uk)(),B,(0,r._)("div",J,(0,o.zw)(n.user.room),1)])):((0,r.wg)(),(0,r.iD)("p",Q,[(0,r._)("span",X,(0,o.zw)(n.user.name),1),(0,r.Uk)(),$,ee]))])}var te={props:["user"]};const ne=(0,k.Z)(te,[["render",ae],["__scopeId","data-v-7496ee96"]]);var re=ne,oe={props:["users","currentUser","chatName"],components:{CurrentUser:Y,User:re},setup(e,{emit:a}){const t=(0,m.iH)(!1),n=()=>{t.value=!t.value,a("toggleSidebar")},r=()=>{a("logOut")},o=e=>{e&&a("roomChange",e,!0)};return{isHidden:t,toggleSidebar:n,logOut:r,roomChange:o}}};const se=(0,k.Z)(oe,[["render",Z],["__scopeId","data-v-3a8f5880"]]);var le=se;const ie=e=>((0,r.dD)("data-v-738cde40"),e=e(),(0,r.Cn)(),e),ue={class:"container"},ce={class:"content"},de=ie((()=>(0,r._)("label",null,"Name:",-1))),me=ie((()=>(0,r._)("label",null,"Password:",-1))),ge={key:0,class:"error"},pe={key:1},ve={key:3,class:"error"},he={key:4},fe={key:5,class:"avatar-options"},we=["value"],_e=["src"],be={key:6,class:"error"};function ye(e,a,t,s,l,i){return(0,r.wg)(),(0,r.iD)("div",ue,[(0,r._)("div",ce,[(0,r._)("form",{onSubmit:a[4]||(a[4]=(0,n.iM)(((...e)=>s.handleSubmit&&s.handleSubmit(...e)),["prevent"]))},[(0,r._)("h2",null,(0,o.zw)(s.header),1),de,(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>s.userData.name=e),maxlength:"30",required:""},null,512),[[n.nr,s.userData.name]]),me,(0,r.wy)((0,r._)("input",{type:"password","onUpdate:modelValue":a[1]||(a[1]=e=>s.userData.password=e),required:""},null,512),[[n.nr,s.userData.password]]),s.passwordError?((0,r.wg)(),(0,r.iD)("div",ge,(0,o.zw)(s.passwordError),1)):(0,r.kq)("",!0),s.registerScreen?((0,r.wg)(),(0,r.iD)("label",pe,"Repeat password:")):(0,r.kq)("",!0),s.registerScreen?(0,r.wy)(((0,r.wg)(),(0,r.iD)("input",{key:2,type:"password","onUpdate:modelValue":a[2]||(a[2]=e=>s.password2=e),required:""},null,512)),[[n.nr,s.password2]]):(0,r.kq)("",!0),s.passwordError&&s.registerScreen?((0,r.wg)(),(0,r.iD)("div",ve,(0,o.zw)(s.passwordError),1)):(0,r.kq)("",!0),s.registerScreen?((0,r.wg)(),(0,r.iD)("label",he,"Choose your avatar:")):(0,r.kq)("",!0),s.registerScreen?((0,r.wg)(),(0,r.iD)("div",fe,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.imageOptions,(e=>((0,r.wg)(),(0,r.iD)("label",{key:e.id},[(0,r.wy)((0,r._)("input",{type:"radio",value:e.id,"onUpdate:modelValue":a[3]||(a[3]=e=>s.userData.avatar=e),required:""},null,8,we),[[n.G2,s.userData.avatar]]),(0,r._)("img",{src:e.src,alt:"Avatar",class:(0,o.C_)({"avatar-image":!0,"selected-avatar":s.isSelectedAvatar(e.id)})},null,10,_e)])))),128))])):(0,r.kq)("",!0),(0,r._)("div",null,[(0,r._)("button",null,(0,o.zw)(s.buttonText.submit),1)]),s.loginError?((0,r.wg)(),(0,r.iD)("div",be,(0,o.zw)(s.loginError),1)):(0,r.kq)("",!0)],32),(0,r._)("div",{class:"outside",onClick:a[5]||(a[5]=(...e)=>s.changeScreen&&s.changeScreen(...e))},[(0,r._)("button",null,(0,o.zw)(s.buttonText.change),1)])])])}var Ce={emits:["success"],setup(e,{emit:a}){const n=(0,m.iH)({name:"Guest",avatar:1,password:"Guest",newuser:!1}),o=[{id:1,src:t(7433)},{id:2,src:t(4744)},{id:3,src:t(8572)},{id:4,src:t(5758)},{id:5,src:t(8284)}],s=(0,m.iH)(""),l=(0,m.iH)(null),i=(0,m.iH)(null),u=(0,m.iH)(!1),c=(0,m.iH)({submit:"Log in",change:"Register new user instead"}),d=(0,m.iH)("Log in to Forum app"),p=(0,r.Fl)((()=>e=>n.value.avatar===e)),v=()=>{n.value={name:"",password:"",avatar:1},s.value="",u.value=!u.value,l.value="",i.value="",u.value?(c.value.change="Use existing user account instead",c.value.submit="Register new user",d.value="Register new user",n.value.newuser=!0):(c.value.change="Register new user instead",c.value.submit="Log in",d.value="Log in to Forum app",n.value.newuser=!1)},h=async(e=n.value)=>{try{const t=await g.Z.post("https://modern-forum-app.redglimmer.repl.co/signup",e);a("success",t.data)}catch(t){t.request?i.value=t.request.responseText:i.value="An error has occurred"}},f=()=>{u.value&&n.value.password.length<=4?l.value="Passwords should be more than 4 characters long":u.value&&n.value.password!==s.value?l.value="Password does not match":(l.value=null,h())};return{imageOptions:o,userData:n,password2:s,passwordError:l,loginError:i,registerScreen:u,buttonText:c,header:d,signupUser:h,handleSubmit:f,changeScreen:v,isSelectedAvatar:p}}};const De=(0,k.Z)(Ce,[["render",ye],["__scopeId","data-v-738cde40"]]);var Se=De;const ke=e=>((0,r.dD)("data-v-21af2cfd"),e=e(),(0,r.Cn)(),e),He={class:"chat-name"},Ue={class:"chat-container"},Oe={class:"header"},Re={class:"sender"},xe=["src"],Ne={class:"sender"},Te={class:"content"},Le={class:"users-typing"},Ie={class:"send-container"},Ze=ke((()=>(0,r._)("div",{class:"submit"},[(0,r._)("button",null,[(0,r._)("i",{class:"fa-solid fa-paper-plane send"})])],-1)));function Me(e,a,s,l,i,u){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",He,(0,o.zw)(s.chatName.replace(/@/g," - ")||"Not in conversation"),1),(0,r._)("div",Ue,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(l.localChatData,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"message",key:e.id},[(0,r._)("div",Oe,[(0,r._)("div",Re,(0,o.zw)(e.sender),1),(0,r._)("img",{src:t(5555)("./profile"+e.avatar+".png")},null,8,xe),(0,r._)("div",Ne,(0,o.zw)(new Date(e.timestamp).toLocaleString()),1)]),(0,r._)("div",Te,(0,o.zw)(e.content),1)])))),128)),(0,r._)("div",Le,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.usersTyping,((e,a)=>((0,r.wg)(),(0,r.iD)("div",{class:"user-typing",key:a},(0,o.zw)(e)+" ... ",1)))),128))])]),(0,r._)("div",Ie,[(0,r._)("form",{onSubmit:a[1]||(a[1]=(0,n.iM)(((...e)=>l.handleSubmit&&l.handleSubmit(...e)),["prevent"]))},[(0,r.wy)((0,r._)("textarea",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>l.message=e),required:""},null,512),[[n.nr,l.message]]),Ze],32)])])}var qe={props:["chatData","chatName","currentUser","usersTyping"],setup(e,{emit:a}){const t=(0,m.iH)(""),n=(0,m.iH)([]),o=(0,m.iH)(null);(0,r.YP)((()=>e.chatData),(e=>{n.value=e})),(0,r.YP)(t,(e=>{""!==e.trim()&&a("typing")}));const s=()=>{o.value===t.value&&window.scrollTo(0,document.body.scrollHeight),o.value=t.value},l=()=>{if(!e.chatName||""===t.value.trim())return t.value="",!1;a("sendMessage",t.value),n.value.push({id:"placeholder",sender:e.currentUser.name,avatar:e.currentUser.avatar,content:t.value,timestamp:new Date}),t.value="",s()};return(0,r.bv)(s),(0,r.ic)(s),{message:t,localChatData:n,handleSubmit:l}}};const ze=(0,k.Z)(qe,[["render",Me],["__scopeId","data-v-21af2cfd"]]);var We=ze;const Ee=e=>((0,r.dD)("data-v-f6fba130"),e=e(),(0,r.Cn)(),e),je=Ee((()=>(0,r._)("h2",null,"Create new conversation",-1))),Pe=Ee((()=>(0,r._)("label",null,"Conversation name:",-1))),Ye=Ee((()=>(0,r._)("div",{class:"submit"},[(0,r._)("button",null,"Create conversation")],-1)));function Ae(e,a,t,o,s,l){return(0,r.wg)(),(0,r.iD)("div",{class:"backdrop",onClick:a[3]||(a[3]=(...e)=>o.close&&o.close(...e))},[(0,r._)("div",{class:"pop-up-window",onClick:a[2]||(a[2]=(0,n.iM)((()=>{}),["stop"]))},[je,(0,r._)("form",{onSubmit:a[1]||(a[1]=(0,n.iM)(((...e)=>o.handleSubmit&&o.handleSubmit(...e)),["prevent"]))},[Pe,(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>o.chatName=e),maxlength:"44",required:""},null,512),[[n.nr,o.chatName]]),Ye],32)])])}g.Z.defaults.withCredentials=!0;var Ge={setup(e,{emit:a}){const t=(0,m.iH)(null),n=async()=>{try{await g.Z.post("https://modern-forum-app.redglimmer.repl.co/chat/"+t.value)}catch(e){console.log(e)}a("done")},r=()=>{a("done")};return{chatName:t,handleSubmit:n,close:r}}};const Ve=(0,k.Z)(Ge,[["render",Ae],["__scopeId","data-v-f6fba130"]]);var Fe=Ve;const Ke={class:"container"},Be=(0,r._)("div",{class:"loading"},[(0,r._)("p",null,"Connecting to the server"),(0,r._)("div",{class:"loading-circle"},[(0,r._)("div",{class:"spinner"})]),(0,r._)("p",null,"Please wait")],-1),Je=[Be];function Qe(e,a){return(0,r.wg)(),(0,r.iD)("div",Ke,Je)}const Xe={},$e=(0,k.Z)(Xe,[["render",Qe]]);var ea=$e;g.Z.defaults.withCredentials=!0;var aa={name:"App",components:{RoomList:x,UserList:le,SignIn:Se,Chat:We,CreateRoom:Fe,Spinner:ea},setup(){const e=(0,m.iH)(!1),a=(0,m.iH)({name:null,avatar:1}),t=(0,m.iH)(!1),n=(0,m.iH)(!1),o=(0,m.iH)({data:null,name:""}),s=(0,m.iH)(null),l=(0,m.iH)("280px"),i=(0,m.iH)("280px"),u=()=>{"280px"===i.value?i.value="30px":i.value="280px"},c=()=>{"280px"===l.value?l.value="30px":l.value="280px"},d=(0,m.iH)(!1),v=async()=>{try{const t=await g.Z.get("https://modern-forum-app.redglimmer.repl.co/");200===t.status&&(d.value=!0,localStorage.getItem("username")&&localStorage.getItem("avatar")?(a.value.name=localStorage.getItem("username"),a.value.avatar=localStorage.getItem("avatar"),e.value=!0,h.emit("login",a.value.name,a.value.avatar)):e.value=!1)}catch(t){t.response&&401===t.response.status?w():(console.log(t),setTimeout(v,4e3))}};(0,r.bv)(v);const h=(0,p.io)("https://modern-forum-app.redglimmer.repl.co/"),f=t=>{localStorage.setItem("username",t.name),localStorage.setItem("avatar",t.avatar),a.value.name=t.name,a.value.avatar=t.avatar,e.value=!0,h.emit("login",a.value.name,a.value.avatar)},w=async()=>{try{await g.Z.post("https://modern-forum-app.redglimmer.repl.co/logout");e.value=!1,d.value=!0,h.emit("logout",a.value.name),localStorage.removeItem("avatar"),localStorage.removeItem("username")}catch(t){console.log(t)}},_=async(e,t=!1)=>{if(t){const t=[a.value.name,e].sort(),s=t[0]+"@"+t[1]+"@private";try{const e=await g.Z.get("https://modern-forum-app.redglimmer.repl.co/chat/"+s);o.value.data=e.data,o.value.name=s,h.emit("room-change",null),n.value=!0}catch(r){if(r.response&&401===r.response.status)w();else if(r.response&&404===r.response.status)try{await g.Z.post("https://modern-forum-app.redglimmer.repl.co/chat/"+e,{users:t});const a=await g.Z.get("https://modern-forum-app.redglimmer.repl.co/chat/"+s);o.value.data=a.data,o.value.name=s,h.emit("room-change",null),n.value=!0}catch(r){console.log(r)}else console.log(r)}}else try{const a=await g.Z.get("https://modern-forum-app.redglimmer.repl.co/chat/"+e);o.value.data=a.data,o.value.name=e,h.emit("room-change",e),n.value=!1}catch(r){console.log(r)}},b=async e=>{try{await g.Z.post("https://modern-forum-app.redglimmer.repl.co/message/"+o.value.name,{content:e});h.emit("new-message",o.value.data[o.value.data.length-1],o.value.name)}catch(a){a.response&&401===a.response.status?w():console.log(a)}},y=async()=>{try{const e=await g.Z.get("https://modern-forum-app.redglimmer.repl.co/chat");s.value=e.data}catch(e){e.response&&401===e.response.status?w():console.log(e)}},C=()=>{t.value=!t.value},D=()=>{t.value=!t.value,h.emit("room-update"),y()};h.on("new-message",((e=null,a)=>{a===o.value.name&&(null===e||o.value.data.push(e))})),h.on("room-update",(()=>{y()}));const S=(0,m.iH)([]),k=()=>{h.emit("typing",o.value.name)};h.on("typing",((e,a)=>{e===o.value.name&&-1===S.value.indexOf(a)&&(S.value.push(a),setTimeout((()=>{const e=S.value.indexOf(a);-1!==e&&S.value.splice(e,1)}),3e3))}));const H=(0,m.iH)([]);return h.on("user-list-updated",(e=>{H.value=e})),{users:H,isLoggedIn:e,currentUser:a,chat:o,showCreateWindow:t,rooms:s,usersTyping:S,connected:d,middleMarginLeft:l,middleMarginRight:i,loggedIn:f,logOut:w,roomChange:_,sendMessage:b,createNewRoom:D,getRooms:y,typing:k,checkServer:v,createNewRoomWindow:C,toggleRight:u,toggleLeft:c}}};const ta=(0,k.Z)(aa,[["render",d]]);var na=ta;(0,n.ri)(na).mount("#app")},5555:function(e,a,t){var n={"./profile1.png":7433,"./profile2.png":4744,"./profile3.png":8572,"./profile4.png":5758,"./profile5.png":8284};function r(e){var a=o(e);return t(a)}function o(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=5555},7433:function(e,a,t){"use strict";e.exports=t.p+"img/profile1.ff2fe07a.png"},4744:function(e,a,t){"use strict";e.exports=t.p+"img/profile2.5a42a4b1.png"},8572:function(e,a,t){"use strict";e.exports=t.p+"img/profile3.fbd4b113.png"},5758:function(e,a,t){"use strict";e.exports=t.p+"img/profile4.858b82cd.png"},8284:function(e,a,t){"use strict";e.exports=t.p+"img/profile5.d375fa8d.png"}},a={};function t(n){var r=a[n];if(void 0!==r)return r.exports;var o=a[n]={exports:{}};return e[n].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(a,n,r,o){if(!n){var s=1/0;for(c=0;c<e.length;c++){n=e[c][0],r=e[c][1],o=e[c][2];for(var l=!0,i=0;i<n.length;i++)(!1&o||s>=o)&&Object.keys(t.O).every((function(e){return t.O[e](n[i])}))?n.splice(i--,1):(l=!1,o<s&&(s=o));if(l){e.splice(c--,1);var u=r();void 0!==u&&(a=u)}}return a}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,r,o]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/modern-forum-application/"}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,n){var r,o,s=n[0],l=n[1],i=n[2],u=0;if(s.some((function(a){return 0!==e[a]}))){for(r in l)t.o(l,r)&&(t.m[r]=l[r]);if(i)var c=i(t)}for(a&&a(n);u<s.length;u++)o=s[u],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(c)},n=self["webpackChunkforum_app"]=self["webpackChunkforum_app"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(9837)}));n=t.O(n)})();
//# sourceMappingURL=app.c3437577.js.map