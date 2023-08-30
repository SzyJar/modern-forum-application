<template>
<div v-if="!connected"> 
  <Spinner />
</div>
<div v-else>
  <div v-if="!isLoggedIn">
    <SignIn @success="loggedIn" />
  </div>
  <div v-else>
    <div class="chat-component" :style="{ marginLeft: middleMarginLeft, marginRight: middleMarginRight }">
    <Chat :chatName="chat.name"
          :chatData="chat.data"
          :currentUser="currentUser"
          :usersTyping="usersTyping"
          @sendMessage="sendMessage"
          @typing="typing" />
    </div>
    <RoomList :rooms="rooms"
              @roomChange="roomChange" 
              @createNewRoom="createNewRoomWindow"
              @getRooms="getRooms"
              @toggleSidebar="toggleLeft" />
    <UserList :users="users" 
              :currentUser="currentUser" 
              :chatName="chat.name" 
              @logOut="logOut"
              @roomChange="roomChange"
              @toggleSidebar="toggleRight" />
  </div>
  <div v-if="showCreateWindow">
    <CreateRoom @done="createNewRoom" />
  </div>
</div>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'
axios.defaults.withCredentials = true;
import { io } from "socket.io-client";
import '@fortawesome/fontawesome-free/css/all.css';

import RoomList from './components/RoomList.vue'
import UserList from './components/UserList.vue'
import SignIn from './components/SignIn.vue'
import Chat from './components/Chat.vue'
import CreateRoom from './components/CreateRoom.vue'
import Spinner from './components/Spinner.vue'


export default {
  name: 'App',
  components: { RoomList, UserList, SignIn, Chat, CreateRoom, Spinner },
  setup() {
    const isLoggedIn = ref(false);
    const currentUser = ref({
      name: null,
      avatar: 1,
    })

    const showCreateWindow = ref(false);
    const inPrivateChat = ref(false);

    const chat = ref({
      data: null,
      name: '',
    });

    const rooms = ref(null);

    const middleMarginLeft = ref('280px');
    const middleMarginRight = ref('280px');
    const toggleRight = () => {
      if (middleMarginRight.value === '280px') {
        middleMarginRight.value = '30px';
      } else {
        middleMarginRight.value = '280px';
      }
    }

    const toggleLeft = () => {
      if (middleMarginLeft.value === '280px') {
        middleMarginLeft.value = '30px';
      } else {
        middleMarginLeft.value = '280px';
      }
    }

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
    const roomChange = async (data, isPrivate=false) => {
      if (!isPrivate) {
        try {
          const response = await axios.get(process.env.VUE_APP_API_URL + 'chat/' + data);
          chat.value.data = response.data;
          chat.value.name = data;
          s.emit('room-change', data);
          inPrivateChat.value = (false);
        } catch (error) {
          console.log(error);
        };
      } else {
        // private chat
        const users = [currentUser.value.name, data].sort();
        const chatName = users[0] + '@' + users[1] + '@private';
        try {
          const response = await axios.get(process.env.VUE_APP_API_URL
                                          + 'chat/' + chatName )
          chat.value.data = response.data;
          chat.value.name = chatName;
          s.emit('room-change', null);
          inPrivateChat.value = (true);
        } catch(error) {
        if (error.response && error.response.status === 401) {
          logOut();
        } else if (error.response && error.response.status === 404) {
          // Create new chat room
          try {
            const responsePostRoom = await axios.post(process.env.VUE_APP_API_URL + 'chat/'
                                                      + data, { users: users });
            const response = await axios.get(process.env.VUE_APP_API_URL
                                            + 'chat/' + chatName )
            chat.value.data = response.data;
            chat.value.name = chatName;
            s.emit('room-change', null);
            inPrivateChat.value = (true);
          } catch (error) {
            console.log(error);
          };
        } else {
          console.log(error);
        };
        }
      }
      // hide notifications
      const foundUser = users.value.find(obj => obj.name === data);
      if (foundUser) {
        foundUser.notification = false;
      }
    };

    // Send new message
    const sendMessage = async (data) => {
      try {
        const response = await axios.post(process.env.VUE_APP_API_URL + 'message/' + chat.value.name, { content: data });
        s.emit('new-message', chat.value.data[chat.value.data.length - 1], chat.value.name);
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
    s.on('new-message', (message=null, room, sender=null) => {
      if(room === chat.value.name) {
        if(message === null) {
          // If no message reload chat
          // roomChange(chat.value.name);
        } else {
          chat.value.data.push(message)
        }
      } else {
        // inform user about new private message
        const foundUser = users.value.find(obj => obj.name === sender);
        if (foundUser) {
          foundUser.notification = true;
        }
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
      middleMarginLeft,
      middleMarginRight,
      // functions
      loggedIn,
      logOut,
      roomChange,
      sendMessage,
      createNewRoom,
      getRooms,
      typing,
      checkServer,
      createNewRoomWindow,
      toggleRight,
      toggleLeft
    }
  },
}
</script>

<style>
@media (max-width: 800px) {
  body {
    zoom: 0.7;
  }
}

::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}

body {
  background: #e6e6e6;
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

.chat-component {
  transition: margin 0.3s ease;
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
  color: white;
  border-bottom: 1px solid #DDD0C8;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  text-align: center;
  text-transform: uppercase;
}
</style>
