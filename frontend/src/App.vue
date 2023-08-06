<template>
<div v-if="!connected"> 
  Waiting for response from server ...
</div>
<div v-else>
  <div v-if="!isLoggedIn">
    <SignIn @success="loggedIn" />
  </div>
  <div v-else>
    <Chat :chatName="chat.name"
          :chatData="chat.data"
          :currentUser="currentUser"
          :usersTyping="usersTyping"
          @sendMessage="sendMessage"
          @typing="typing" />
    <RoomList :rooms="rooms"
              @roomChange="roomChange" 
              @createNewRoom="createNewRoomWindow"
              @getRooms="getRooms" />
    <UserList :users="users" 
              :currentUser="currentUser" 
              :chatName="chat.name" 
              @logOut="logOut"
              @roomChange="roomChange" />
  </div>
  <div v-if="showCreateWindow"><CreateRoom @done="createNewRoom" /></div>
</div>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'
axios.defaults.withCredentials = true;
import { io } from "socket.io-client";

import RoomList from './components/RoomList.vue'
import UserList from './components/UserList.vue'
import SignIn from './components/SignIn.vue'
import Chat from './components/Chat.vue'
import CreateRoom from './components/CreateRoom.vue'


export default {
  name: 'App',
  components: { RoomList, UserList, SignIn, Chat, CreateRoom },
  setup() {
    const isLoggedIn = ref(false);
    const currentUser = ref({
      name: null,
      avatar: 1,
    })

    const showCreateWindow = ref(false);

    const chat = ref({
      data: null,
      name: '',
    });

    const rooms = ref(null);

    // Check if server is up
    const connected = ref(false);
    const checkServer = async () => {
      try {
        const response = await axios.get(process.env.VUE_APP_API_URL);
        if (response.status === 200) {
          connected.value = true;
          if (localStorage.getItem('username') && localStorage.getItem('avatar')) {
            currentUser.value.name = localStorage.getItem('username');
            currentUser.value.avatar = localStorage.getItem('avatar');
            isLoggedIn.value = true;
            s.emit('login', currentUser.value.name, currentUser.value.avatar);
          } else {
            isLoggedIn.value = false;
          };
        };
      } catch (error) {
        if (error.response && error.response.status === 401) {
          logOut();
        } else {
          console.log(error);
          setTimeout(checkServer, 4000);
        };
      };
    };
    onMounted(checkServer);

    // Socket connection
    const s = io(process.env.VUE_APP_API_URL);

    // Log in
    const loggedIn = (data) => {
      localStorage.setItem('username', data.name);
      localStorage.setItem('avatar', data.avatar);
      currentUser.value.name = data.name;
      currentUser.value.avatar = data.avatar;
      isLoggedIn.value = true;
      s.emit('login', currentUser.value.name, currentUser.value.avatar);
    };

    // Log out
    const logOut = async () => {
      try {
          const response = await axios.post(process.env.VUE_APP_API_URL + 'logout');
          isLoggedIn.value = false;
          connected.value = true;
          s.emit('logout', currentUser.value.name);
          localStorage.removeItem('avatar');
          localStorage.removeItem('username');
      } catch (error) {
          console.log(error);
      };
    };

    // Change room (load chat log)
    const roomChange = async (data) => {
      try {
        const response = await axios.get(process.env.VUE_APP_API_URL + 'chat/' + data);
        chat.value.data = response.data;
        chat.value.name = data;
        s.emit('room-change', data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          logOut();
        } else {
          console.log(error);
        };
      };
    };

    // Send new message
    const sendMessage = async (data) => {
      try {
        const response = await axios.post(process.env.VUE_APP_API_URL + 'message/' + chat.value.name, { content: data });
        s.emit('new-message', chat.value.name);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          logOut();
        } else {
          console.log(error);
        };
      };
    };

    // Get all rooms
    const getRooms = async () => {
      try {
        const response = await axios.get(process.env.VUE_APP_API_URL + 'chat');
        rooms.value = response.data;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          logOut();
        } else {
          console.log(error);
        };
      };
    };

    // Show/hide create new room pop up window
    const createNewRoomWindow = () => {
      showCreateWindow.value = !showCreateWindow.value;
    };

    const createNewRoom = () => {
      showCreateWindow.value = !showCreateWindow.value;
      s.emit('room-update');
      getRooms();
    };
    

    // Handle socket io logic
    s.on('new-message', (room) => {
      if(room == chat.value.name) {
        roomChange(chat.value.name);
      };
    });

    s.on('room-update', () => {
        getRooms();
    });

    // Show who is typing in chat
    const usersTyping = ref([]);
    const typing = () => {
      s.emit('typing', chat.value.name);
    };
    s.on('typing', (room, user) => {
        if(room === chat.value.name && usersTyping.value.indexOf(user) === -1) {
          usersTyping.value.push(user);
          // Remove user after 3 seconds
          setTimeout(() => {
            const indexToRemove = usersTyping.value.indexOf(user);
            if (indexToRemove !== -1) {
              usersTyping.value.splice(indexToRemove, 1);
            }
          }, 3000);
        };
    });
    
    // Show who is active
    const users = ref([]);
    s.on('user-list-updated', (userlist) => {
      users.value = userlist;
    });

    return {
      users,
      isLoggedIn,
      currentUser,
      chat,
      showCreateWindow,
      rooms,
      usersTyping,
      connected,
      // functions
      loggedIn,
      logOut,
      roomChange,
      sendMessage,
      createNewRoom,
      getRooms,
      typing,
      checkServer,
      createNewRoomWindow
    }
  },
}
</script>

<style>
::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}

body {
  background: #DDD0C8;
  color: #242424;
  min-width: 750px;
  min-height: 400px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.sideBar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #323232;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 250px;
  padding: 20px;
  transition: transform 0.3s ease;
}

button {
  background: #AFAFAF;
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  min-height: 32px;
  cursor: pointer;
}

button:hover {
  background: #404040;
  color: #DDD0C8;
}

h2 {
  color: #DDD0C8;
  border-bottom: 1px solid #DDD0C8;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  text-align: center;
  text-transform: uppercase;
}
</style>
