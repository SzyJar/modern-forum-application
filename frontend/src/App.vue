<template>
<div>
  <div v-if="!isLoggedIn">
    <SignIn @success="loggedIn" />
  </div>
  <div v-else>
    <Chat :chatName="chat.name" :chatData="chat.data" :currentUser="currentUser" @sendMessage="sendMessage"/>
    <RoomList :rooms="rooms" @roomChange="roomChange" @createNewRoom="createNewRoom" @getRooms="getRooms" />
    <UserList :users="users" :currentUser="currentUser" :chatName="chat.name" @logOut="logOut" />
  </div>
  <div v-if="showCreateWindow"><CreateRoom @done="createNewRoom" /></div>
</div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
axios.defaults.withCredentials = true;
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

    // Log in
    const loggedIn = (data) => {
      currentUser.value.name = data.name;
      currentUser.value.avatar = data.avatar;
      isLoggedIn.value = true;
    };

    // Log out
    const logOut = async () => {
      try {
          const response = await axios.post(process.env.VUE_APP_API_URL + 'logout');
          isLoggedIn.value = false;
      } catch (error) {
          console.log(error);
      };
    };

    // Change room
    const roomChange = async (data) => {
      try {
        const response = await axios.get(process.env.VUE_APP_API_URL + 'chat/' + data);
        chat.value.data = response.data;
        chat.value.name = data;
      } catch (error) {
          console.log(error);
      };
    };

    // Send new message
    const sendMessage = async (data) => {
      try {
        const response = await axios.post(process.env.VUE_APP_API_URL + 'message/' + chat.value.name, { content: data });
      } catch (error) {
          console.log(error);
      };
    };

    // Get all rooms
    const getRooms = async () => {
      try {
        const response = await axios.get(process.env.VUE_APP_API_URL + 'chat');
        rooms.value = response.data;
      } catch (error) {
        console.log(error.message);
      };
    };

    // Show/hide create new room pop up window
    const createNewRoom = () => {
      showCreateWindow.value = !showCreateWindow.value;
      getRooms();
    };

    const users = ref([
      { name: "first", id: 1 },
      { name: "second", id: 2 },
      { name: "third", id: 3 },
      { name: "first", id: 4 },
      { name: "second", id: 5 },
      { name: "third", id: 6 },
      { name: "first", id: 7 },
      { name: "second", id: 8 },
      { name: "third", id: 9 },
      { name: "first", id: 10 },
      { name: "second", id: 12 },
      { name: "third", id: 13 },
      { name: "first", id: 14 },
      { name: "second", id: 15 },
      { name: "third", id: 16 },
      { name: "first", id: 17 },
      { name: "second", id: 18 },
      { name: "third", id: 19 }
    ]);
    
    return {
      users,
      isLoggedIn,
      currentUser,
      chat,
      showCreateWindow,
      rooms,
      // functions
      loggedIn,
      logOut,
      roomChange,
      sendMessage,
      createNewRoom,
      getRooms
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
