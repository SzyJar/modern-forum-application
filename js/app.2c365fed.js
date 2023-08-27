(function(){var e={7559:function(e,a,n){"use strict";var t=n(9242),r=n(3396),o=n(7139);const s={key:0},i={key:1},l={key:0},u={key:1},c={key:2};function d(e,a,n,t,d,m){const g=(0,r.up)("Spinner"),p=(0,r.up)("SignIn"),v=(0,r.up)("Chat"),h=(0,r.up)("RoomList"),f=(0,r.up)("UserList"),w=(0,r.up)("CreateRoom");return t.connected?((0,r.wg)(),(0,r.iD)("div",i,[t.isLoggedIn?((0,r.wg)(),(0,r.iD)("div",u,[(0,r._)("div",{class:"chat-component",style:(0,o.j5)({marginLeft:t.middleMarginLeft,marginRight:t.middleMarginRight})},[(0,r.Wm)(v,{chatName:t.chat.name,chatData:t.chat.data,currentUser:t.currentUser,usersTyping:t.usersTyping,onSendMessage:t.sendMessage,onTyping:t.typing},null,8,["chatName","chatData","currentUser","usersTyping","onSendMessage","onTyping"])],4),(0,r.Wm)(h,{rooms:t.rooms,onRoomChange:t.roomChange,onCreateNewRoom:t.createNewRoomWindow,onGetRooms:t.getRooms,onToggleSidebar:t.toggleLeft},null,8,["rooms","onRoomChange","onCreateNewRoom","onGetRooms","onToggleSidebar"]),(0,r.Wm)(f,{users:t.users,currentUser:t.currentUser,chatName:t.chat.name,onLogOut:t.logOut,onRoomChange:t.roomChange,onToggleSidebar:t.toggleRight},null,8,["users","currentUser","chatName","onLogOut","onRoomChange","onToggleSidebar"])])):((0,r.wg)(),(0,r.iD)("div",l,[(0,r.Wm)(p,{onSuccess:t.loggedIn},null,8,["onSuccess"])])),t.showCreateWindow?((0,r.wg)(),(0,r.iD)("div",c,[(0,r.Wm)(w,{onDone:t.createNewRoom},null,8,["onDone"])])):(0,r.kq)("",!0)])):((0,r.wg)(),(0,r.iD)("div",s,[(0,r.Wm)(g)]))}n(7658);var m=n(4870),g=n(4161),p=n(7851);const v=e=>((0,r.dD)("data-v-671d3b27"),e=e(),(0,r.Cn)(),e),h={class:"rooms"},f=v((()=>(0,r._)("h2",null,"Conversations",-1))),w=["onClick"];function _(e,a,n,t,s,i){const l=(0,r.up)("Room");return(0,r.wg)(),(0,r.iD)("div",{class:(0,o.C_)(["sideBar",{"sideBar-hidden":t.isHidden}])},[(0,r._)("button",{class:"toggle-button",onClick:a[0]||(a[0]=(...e)=>t.toggleSidebar&&t.toggleSidebar(...e))},[(0,r._)("i",{class:(0,o.C_)(["fa-solid",{"fa-arrow-right":t.isHidden,"fa-arrow-left":!t.isHidden}])},null,2)]),(0,r._)("div",h,[(0,r._)("div",{class:"room",onClick:a[1]||(a[1]=(...e)=>t.CreateRoom&&t.CreateRoom(...e))},[(0,r.Wm)(l,{room:{name:"Create public chat"},icon:'<i class="fa-solid fa-comment-medical"></i>'})]),f,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.rooms,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"room",key:e.id,onClick:a=>t.roomChange(e.name)},[(0,r.Wm)(l,{room:e,icon:"<i class='fa-solid fa-comment-dots'></i>"},null,8,["room"])],8,w)))),128))])],2)}const b={class:"icon"},y=["innerHTML"],C={class:"name"};function D(e,a,n,t,s,i){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",b,[(0,r._)("div",{innerHTML:n.icon},null,8,y)]),(0,r._)("div",C,(0,o.zw)(n.room.name),1)])}var S={props:["room","icon"]},k=n(89);const H=(0,k.Z)(S,[["render",D],["__scopeId","data-v-10e7b8fd"]]);var U=H,O={components:{Room:U},props:["rooms"],setup(e,{emit:a}){const n=(0,m.iH)(!1),t=()=>{a("getRooms")},o=()=>{n.value=!n.value,a("toggleSidebar")},s=e=>{a("roomChange",e)},i=()=>{a("createNewRoom")};return(0,r.bv)(t),{isHidden:n,toggleSidebar:o,getRooms:t,roomChange:s,CreateRoom:i}}};const R=(0,k.Z)(O,[["render",_],["__scopeId","data-v-671d3b27"]]);var x=R;const N=e=>((0,r.dD)("data-v-3a8f5880"),e=e(),(0,r.Cn)(),e),L={class:"users-online"},T=N((()=>(0,r._)("h2",null,"Active users",-1))),I=["onClick"];function Z(e,a,n,t,s,i){const l=(0,r.up)("CurrentUser"),u=(0,r.up)("User");return(0,r.wg)(),(0,r.iD)("div",{class:(0,o.C_)(["sideBar",{"sideBar-hidden":t.isHidden}])},[(0,r._)("button",{class:"toggle-button",onClick:a[0]||(a[0]=(...e)=>t.toggleSidebar&&t.toggleSidebar(...e))},[(0,r._)("i",{class:(0,o.C_)(["fa-solid",{"fa-arrow-left":t.isHidden,"fa-arrow-right":!t.isHidden}])},null,2)]),(0,r.Wm)(l,{currentUser:n.currentUser,chatName:n.chatName,onLogOut:t.logOut},null,8,["currentUser","chatName","onLogOut"]),(0,r._)("div",L,[T,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.users,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.id},[e.name!==n.currentUser.name?((0,r.wg)(),(0,r.iD)("div",{key:0,class:"user",onClick:a=>t.roomChange(e.name)},[(0,r.Wm)(u,{user:e},null,8,["user"])],8,I)):(0,r.kq)("",!0)])))),128))])],2)}const M={class:"currentUser"},q=["src"],z={key:0},W={key:1};function E(e,a,t,s,i,l){return(0,r.wg)(),(0,r.iD)("div",M,[(0,r._)("img",{src:n(5555)("./profile"+t.currentUser.avatar+".png")},null,8,q),(0,r._)("p",null,"Loged in as: "+(0,o.zw)(t.currentUser.name),1),t.chatName?((0,r.wg)(),(0,r.iD)("p",z,(0,o.zw)(t.chatName.replace(/@/g," - ")),1)):((0,r.wg)(),(0,r.iD)("p",W,"Not in conversation")),(0,r._)("button",{onClick:a[0]||(a[0]=(...e)=>s.logOut&&s.logOut(...e)),class:"logout"},"LOG OUT")])}var j={props:["currentUser","chatName"],emits:["logOut"],setup(e,{emit:a}){const n=()=>{a("logOut")};return{logOut:n}}};const P=(0,k.Z)(j,[["render",E],["__scopeId","data-v-1cd02f4a"]]);var G=P;const Y=e=>((0,r.dD)("data-v-7496ee96"),e=e(),(0,r.Cn)(),e),A={class:"avatar"},V=["src"],F={key:0},K={class:"name"},B=Y((()=>(0,r._)("br",null,null,-1))),J={class:"in-room"},Q={key:1},X={class:"name"},$=Y((()=>(0,r._)("br",null,null,-1))),ee=Y((()=>(0,r._)("div",{clas:"not-room"},"Not in conversation",-1)));function ae(e,a,t,s,i,l){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",A,[(0,r._)("img",{src:n(5555)("./profile"+t.user.avatar+".png")},null,8,V)]),t.user.room?((0,r.wg)(),(0,r.iD)("p",F,[(0,r._)("span",K,(0,o.zw)(t.user.name),1),(0,r.Uk)(),B,(0,r._)("div",J,(0,o.zw)(t.user.room),1)])):((0,r.wg)(),(0,r.iD)("p",Q,[(0,r._)("span",X,(0,o.zw)(t.user.name),1),(0,r.Uk)(),$,ee]))])}var ne={props:["user"]};const te=(0,k.Z)(ne,[["render",ae],["__scopeId","data-v-7496ee96"]]);var re=te,oe={props:["users","currentUser","chatName"],components:{CurrentUser:G,User:re},setup(e,{emit:a}){const n=(0,m.iH)(!1),t=()=>{n.value=!n.value,a("toggleSidebar")},r=()=>{a("logOut")},o=e=>{e&&a("roomChange",e,!0)};return{isHidden:n,toggleSidebar:t,logOut:r,roomChange:o}}};const se=(0,k.Z)(oe,[["render",Z],["__scopeId","data-v-3a8f5880"]]);var ie=se;const le=e=>((0,r.dD)("data-v-151e43be"),e=e(),(0,r.Cn)(),e),ue={class:"container"},ce={class:"content"},de=le((()=>(0,r._)("label",null,"Name:",-1))),me=le((()=>(0,r._)("label",null,"Password:",-1))),ge={key:0,class:"error"},pe={key:1},ve={key:3,class:"error"},he={key:4},fe={key:5,class:"avatar-options"},we=["value"],_e=["src"],be={key:6,class:"error"},ye=le((()=>(0,r._)("button",null,"Log in as a Guest",-1))),Ce=[ye];function De(e,a,n,s,i,l){return(0,r.wg)(),(0,r.iD)("div",ue,[(0,r._)("div",ce,[(0,r._)("form",{onSubmit:a[4]||(a[4]=(0,t.iM)(((...e)=>s.handleSubmit&&s.handleSubmit(...e)),["prevent"]))},[(0,r._)("h2",null,(0,o.zw)(s.header),1),de,(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>s.userData.name=e),maxlength:"30",required:""},null,512),[[t.nr,s.userData.name]]),me,(0,r.wy)((0,r._)("input",{type:"password","onUpdate:modelValue":a[1]||(a[1]=e=>s.userData.password=e),required:""},null,512),[[t.nr,s.userData.password]]),s.passwordError?((0,r.wg)(),(0,r.iD)("div",ge,(0,o.zw)(s.passwordError),1)):(0,r.kq)("",!0),s.registerScreen?((0,r.wg)(),(0,r.iD)("label",pe,"Repeat password:")):(0,r.kq)("",!0),s.registerScreen?(0,r.wy)(((0,r.wg)(),(0,r.iD)("input",{key:2,type:"password","onUpdate:modelValue":a[2]||(a[2]=e=>s.password2=e),required:""},null,512)),[[t.nr,s.password2]]):(0,r.kq)("",!0),s.passwordError&&s.registerScreen?((0,r.wg)(),(0,r.iD)("div",ve,(0,o.zw)(s.passwordError),1)):(0,r.kq)("",!0),s.registerScreen?((0,r.wg)(),(0,r.iD)("label",he,"Choose your avatar:")):(0,r.kq)("",!0),s.registerScreen?((0,r.wg)(),(0,r.iD)("div",fe,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.imageOptions,(e=>((0,r.wg)(),(0,r.iD)("label",{key:e.id},[(0,r.wy)((0,r._)("input",{type:"radio",value:e.id,"onUpdate:modelValue":a[3]||(a[3]=e=>s.userData.avatar=e),required:""},null,8,we),[[t.G2,s.userData.avatar]]),(0,r._)("img",{src:e.src,alt:"Avatar",class:(0,o.C_)({"avatar-image":!0,"selected-avatar":s.isSelectedAvatar(e.id)})},null,10,_e)])))),128))])):(0,r.kq)("",!0),(0,r._)("div",null,[(0,r._)("button",null,(0,o.zw)(s.buttonText.submit),1)]),s.loginError?((0,r.wg)(),(0,r.iD)("div",be,(0,o.zw)(s.loginError),1)):(0,r.kq)("",!0)],32),s.registerScreen?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",{key:0,class:"outside",onClick:a[5]||(a[5]=(...e)=>s.guestLogin&&s.guestLogin(...e))},Ce)),(0,r._)("div",{class:"outside",onClick:a[6]||(a[6]=(...e)=>s.changeScreen&&s.changeScreen(...e))},[(0,r._)("button",null,(0,o.zw)(s.buttonText.change),1)])])])}var Se={emits:["success"],setup(e,{emit:a}){const t=(0,m.iH)({name:"",avatar:1,password:"",newuser:!1}),o=[{id:1,src:n(7433)},{id:2,src:n(4744)},{id:3,src:n(8572)},{id:4,src:n(5758)},{id:5,src:n(8284)}],s=(0,m.iH)(""),i=(0,m.iH)(null),l=(0,m.iH)(null),u=(0,m.iH)(!1),c=(0,m.iH)({submit:"Log in",change:"Register new user instead"}),d=(0,m.iH)("Log in to Forum app"),p=(0,r.Fl)((()=>e=>t.value.avatar===e)),v=()=>{t.value={name:"",password:"",avatar:1},s.value="",u.value=!u.value,i.value="",l.value="",u.value?(c.value.change="Use existing user account instead",c.value.submit="Register new user",d.value="Register new user",t.value.newuser=!0):(c.value.change="Register new user instead",c.value.submit="Log in",d.value="Log in to Forum app",t.value.newuser=!1)},h=async(e=t.value)=>{try{const n=await g.Z.post("https://modern-forum-app.redglimmer.repl.co/signup",e);a("success",n.data)}catch(n){n.request?l.value=n.request.responseText:l.value="An error has occurred"}},f=()=>{const e={name:"Guest",password:"Guest",avatar:1,newuser:!1};h(e)},w=()=>{u.value&&t.value.password.length<=4?i.value="Passwords should be more than 4 characters long":u.value&&t.value.password!==s.value?i.value="Password does not match":(i.value=null,h())};return{imageOptions:o,userData:t,password2:s,passwordError:i,loginError:l,registerScreen:u,buttonText:c,header:d,signupUser:h,handleSubmit:w,changeScreen:v,isSelectedAvatar:p,guestLogin:f}}};const ke=(0,k.Z)(Se,[["render",De],["__scopeId","data-v-151e43be"]]);var He=ke;const Ue=e=>((0,r.dD)("data-v-2004bdf4"),e=e(),(0,r.Cn)(),e),Oe={class:"chat-name"},Re={class:"chat-container"},xe={class:"header"},Ne={class:"sender"},Le=["src"],Te={class:"sender"},Ie={class:"content"},Ze={class:"users-typing"},Me={class:"send-container"},qe=Ue((()=>(0,r._)("div",{class:"submit"},[(0,r._)("button",null,[(0,r._)("i",{class:"fa-solid fa-paper-plane send"})])],-1)));function ze(e,a,s,i,l,u){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",Oe,(0,o.zw)(s.chatName.replace(/@/g," - ")||"Not in conversation"),1),(0,r._)("div",Re,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.localChatData,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"message",key:e.id},[(0,r._)("div",xe,[(0,r._)("div",Ne,(0,o.zw)(e.sender),1),(0,r._)("img",{src:n(5555)("./profile"+e.avatar+".png")},null,8,Le),(0,r._)("div",Te,(0,o.zw)(new Date(e.timestamp).toLocaleString()),1)]),(0,r._)("div",Ie,(0,o.zw)(e.content),1)])))),128)),(0,r._)("div",Ze,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.usersTyping,((e,a)=>((0,r.wg)(),(0,r.iD)("div",{class:"user-typing",key:a},(0,o.zw)(e)+" ... ",1)))),128))])]),(0,r._)("div",Me,[(0,r._)("form",{onSubmit:a[1]||(a[1]=(0,t.iM)(((...e)=>i.handleSubmit&&i.handleSubmit(...e)),["prevent"]))},[(0,r.wy)((0,r._)("textarea",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>i.message=e),required:""},null,512),[[t.nr,i.message]]),qe],32)])])}var We={props:["chatData","chatName","currentUser","usersTyping"],setup(e,{emit:a}){const n=(0,m.iH)(""),t=(0,m.iH)([]),o=(0,m.iH)(null);(0,r.YP)((()=>e.chatData),(e=>{t.value=e})),(0,r.YP)(n,(e=>{""!==e.trim()&&a("typing")}));const s=()=>{o.value===n.value&&window.scrollTo(0,document.body.scrollHeight),o.value=n.value},i=()=>{if(!e.chatName||""===n.value.trim())return n.value="",!1;a("sendMessage",n.value),t.value.push({id:"placeholder",sender:e.currentUser.name,avatar:e.currentUser.avatar,content:n.value,timestamp:new Date}),n.value="",s()};return(0,r.bv)(s),(0,r.ic)(s),{message:n,localChatData:t,handleSubmit:i}}};const Ee=(0,k.Z)(We,[["render",ze],["__scopeId","data-v-2004bdf4"]]);var je=Ee;const Pe=e=>((0,r.dD)("data-v-f6fba130"),e=e(),(0,r.Cn)(),e),Ge=Pe((()=>(0,r._)("h2",null,"Create new conversation",-1))),Ye=Pe((()=>(0,r._)("label",null,"Conversation name:",-1))),Ae=Pe((()=>(0,r._)("div",{class:"submit"},[(0,r._)("button",null,"Create conversation")],-1)));function Ve(e,a,n,o,s,i){return(0,r.wg)(),(0,r.iD)("div",{class:"backdrop",onClick:a[3]||(a[3]=(...e)=>o.close&&o.close(...e))},[(0,r._)("div",{class:"pop-up-window",onClick:a[2]||(a[2]=(0,t.iM)((()=>{}),["stop"]))},[Ge,(0,r._)("form",{onSubmit:a[1]||(a[1]=(0,t.iM)(((...e)=>o.handleSubmit&&o.handleSubmit(...e)),["prevent"]))},[Ye,(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>o.chatName=e),maxlength:"44",required:""},null,512),[[t.nr,o.chatName]]),Ae],32)])])}g.Z.defaults.withCredentials=!0;var Fe={setup(e,{emit:a}){const n=(0,m.iH)(null),t=async()=>{try{await g.Z.post("https://modern-forum-app.redglimmer.repl.co/chat/"+n.value)}catch(e){console.log(e)}a("done")},r=()=>{a("done")};return{chatName:n,handleSubmit:t,close:r}}};const Ke=(0,k.Z)(Fe,[["render",Ve],["__scopeId","data-v-f6fba130"]]);var Be=Ke;const Je={class:"container"},Qe=(0,r._)("div",{class:"loading"},[(0,r._)("p",null,"Connecting to the server"),(0,r._)("div",{class:"loading-circle"},[(0,r._)("div",{class:"spinner"})]),(0,r._)("p",null,"Please wait")],-1),Xe=[Qe];function $e(e,a){return(0,r.wg)(),(0,r.iD)("div",Je,Xe)}const ea={},aa=(0,k.Z)(ea,[["render",$e]]);var na=aa;g.Z.defaults.withCredentials=!0;var ta={name:"App",components:{RoomList:x,UserList:ie,SignIn:He,Chat:je,CreateRoom:Be,Spinner:na},setup(){const e=(0,m.iH)(!1),a=(0,m.iH)({name:null,avatar:1}),n=(0,m.iH)(!1),t=(0,m.iH)(!1),o=(0,m.iH)({data:null,name:""}),s=(0,m.iH)(null),i=(0,m.iH)("280px"),l=(0,m.iH)("280px"),u=()=>{"280px"===l.value?l.value="30px":l.value="280px"},c=()=>{"280px"===i.value?i.value="30px":i.value="280px"},d=(0,m.iH)(!1),v=async()=>{try{const n=await g.Z.get("https://modern-forum-app.redglimmer.repl.co/");200===n.status&&(d.value=!0,localStorage.getItem("username")&&localStorage.getItem("avatar")?(a.value.name=localStorage.getItem("username"),a.value.avatar=localStorage.getItem("avatar"),e.value=!0,h.emit("login",a.value.name,a.value.avatar)):e.value=!1)}catch(n){n.response&&401===n.response.status?w():(console.log(n),setTimeout(v,4e3))}};(0,r.bv)(v);const h=(0,p.io)("https://modern-forum-app.redglimmer.repl.co/"),f=n=>{localStorage.setItem("username",n.name),localStorage.setItem("avatar",n.avatar),a.value.name=n.name,a.value.avatar=n.avatar,e.value=!0,h.emit("login",a.value.name,a.value.avatar)},w=async()=>{try{await g.Z.post("https://modern-forum-app.redglimmer.repl.co/logout");e.value=!1,d.value=!0,h.emit("logout",a.value.name),localStorage.removeItem("avatar"),localStorage.removeItem("username")}catch(n){console.log(n)}},_=async(e,n=!1)=>{if(n){const n=[a.value.name,e].sort(),s=n[0]+"@"+n[1]+"@private";try{const e=await g.Z.get("https://modern-forum-app.redglimmer.repl.co/chat/"+s);o.value.data=e.data,o.value.name=s,h.emit("room-change",null),t.value=!0}catch(r){if(r.response&&401===r.response.status)w();else if(r.response&&404===r.response.status)try{await g.Z.post("https://modern-forum-app.redglimmer.repl.co/chat/"+e,{users:n});const a=await g.Z.get("https://modern-forum-app.redglimmer.repl.co/chat/"+s);o.value.data=a.data,o.value.name=s,h.emit("room-change",null),t.value=!0}catch(r){console.log(r)}else console.log(r)}}else try{const a=await g.Z.get("https://modern-forum-app.redglimmer.repl.co/chat/"+e);o.value.data=a.data,o.value.name=e,h.emit("room-change",e),t.value=!1}catch(r){console.log(r)}},b=async e=>{try{await g.Z.post("https://modern-forum-app.redglimmer.repl.co/message/"+o.value.name,{content:e});h.emit("new-message",o.value.data[o.value.data.length-1],o.value.name)}catch(a){a.response&&401===a.response.status?w():console.log(a)}},y=async()=>{try{const e=await g.Z.get("https://modern-forum-app.redglimmer.repl.co/chat");s.value=e.data}catch(e){e.response&&401===e.response.status?w():console.log(e)}},C=()=>{n.value=!n.value},D=()=>{n.value=!n.value,h.emit("room-update"),y()};h.on("new-message",((e=null,a)=>{a===o.value.name&&(null===e||o.value.data.push(e))})),h.on("room-update",(()=>{y()}));const S=(0,m.iH)([]),k=()=>{h.emit("typing",o.value.name)};h.on("typing",((e,a)=>{e===o.value.name&&-1===S.value.indexOf(a)&&(S.value.push(a),setTimeout((()=>{const e=S.value.indexOf(a);-1!==e&&S.value.splice(e,1)}),3e3))}));const H=(0,m.iH)([]);return h.on("user-list-updated",(e=>{H.value=e})),{users:H,isLoggedIn:e,currentUser:a,chat:o,showCreateWindow:n,rooms:s,usersTyping:S,connected:d,middleMarginLeft:i,middleMarginRight:l,loggedIn:f,logOut:w,roomChange:_,sendMessage:b,createNewRoom:D,getRooms:y,typing:k,checkServer:v,createNewRoomWindow:C,toggleRight:u,toggleLeft:c}}};const ra=(0,k.Z)(ta,[["render",d]]);var oa=ra;(0,t.ri)(oa).mount("#app")},5555:function(e,a,n){var t={"./profile1.png":7433,"./profile2.png":4744,"./profile3.png":8572,"./profile4.png":5758,"./profile5.png":8284};function r(e){var a=o(e);return n(a)}function o(e){if(!n.o(t,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t[e]}r.keys=function(){return Object.keys(t)},r.resolve=o,e.exports=r,r.id=5555},7433:function(e,a,n){"use strict";e.exports=n.p+"img/profile1.ff2fe07a.png"},4744:function(e,a,n){"use strict";e.exports=n.p+"img/profile2.5a42a4b1.png"},8572:function(e,a,n){"use strict";e.exports=n.p+"img/profile3.fbd4b113.png"},5758:function(e,a,n){"use strict";e.exports=n.p+"img/profile4.858b82cd.png"},8284:function(e,a,n){"use strict";e.exports=n.p+"img/profile5.d375fa8d.png"}},a={};function n(t){var r=a[t];if(void 0!==r)return r.exports;var o=a[t]={exports:{}};return e[t].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(a,t,r,o){if(!t){var s=1/0;for(c=0;c<e.length;c++){t=e[c][0],r=e[c][1],o=e[c][2];for(var i=!0,l=0;l<t.length;l++)(!1&o||s>=o)&&Object.keys(n.O).every((function(e){return n.O[e](t[l])}))?t.splice(l--,1):(i=!1,o<s&&(s=o));if(i){e.splice(c--,1);var u=r();void 0!==u&&(a=u)}}return a}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[t,r,o]}}(),function(){n.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(a,{a:a}),a}}(),function(){n.d=function(e,a){for(var t in a)n.o(a,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/modern-forum-application/"}(),function(){var e={143:0};n.O.j=function(a){return 0===e[a]};var a=function(a,t){var r,o,s=t[0],i=t[1],l=t[2],u=0;if(s.some((function(a){return 0!==e[a]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(l)var c=l(n)}for(a&&a(t);u<s.length;u++)o=s[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},t=self["webpackChunkforum_app"]=self["webpackChunkforum_app"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(7559)}));t=n.O(t)})();
//# sourceMappingURL=app.2c365fed.js.map