<template>
  <div v-if="!isLoggedIn">
    <SignIn @success="loggedIn" />
  </div>
  <div v-else>
    <Chat :chatName="chatName" :chatData="chatData" :currentUser="currentUser" @sendMessage="sendMessage"/>
    <RoomList @roomChange="roomChange" />
    <UserList :users="users" :currentUser="currentUser" :chatName="chatName" @logOut="logOut" />
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

export default {
  name: 'App',
  components: { RoomList, UserList, SignIn, Chat },
  setup() {
    const isLoggedIn = ref(false);
    const currentUser = ref({
      name: null,
      avatar: 1,
    })

    const chatData = ref(null);
    const chatName = ref('');

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
        chatData.value = response.data;
        chatName.value = data;
      } catch (error) {
          console.log(error);
      };
    };

    const sendMessage = async (data) => {
      try {
        const response = await axios.post(process.env.VUE_APP_API_URL + 'message/' + chatName.value, { content: data });
      } catch (error) {
          console.log(error);
      };
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
      chatData,
      chatName,
      // functions
      loggedIn,
      logOut,
      roomChange,
      sendMessage
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
}
</style>
