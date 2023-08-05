<template>
  <div v-if="!isLoggedIn">
    <SignIn @success="loggedIn" />
  </div>
  <div v-else>
    <RoomList :rooms="rooms" />
    <UserList :users="users" :currentUser="currentUser" @logOut="logOut" />
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import RoomList from './components/RoomList.vue'
import UserList from './components/UserList.vue'
import SignIn from './components/SignIn.vue'

export default {
  name: 'App',
  components: { RoomList, UserList, SignIn },
  setup() {
    const isLoggedIn = ref(false);
    const currentUser = ref({
      name: null,
      avatar: 1,
    })

    const loggedIn = (data) => {
      currentUser.value.name = data.name;
      currentUser.value.avatar = data.avatar;
      isLoggedIn.value = true;
    };

    const logOut = async () => {
      try {
          const response = await axios.post(process.env.VUE_APP_API_URL + 'logout');
          isLoggedIn.value = false;
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
      { name: "third", id: 9 }
    ]);
    const rooms = ref([
      { name: "first", id: 1 },
      { name: "second", id: 2 },
      { name: "third", id: 3 },
      { name: "first", id: 4 },
      { name: "second", id: 5 },
      { name: "third", id: 6 },
      { name: "first", id: 7 },
      { name: "second", id: 8 },
      { name: "third", id: 9 }
    ]);
    return {
      users,
      rooms,
      isLoggedIn,
      currentUser,
      // functions
      loggedIn,
      logOut
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
