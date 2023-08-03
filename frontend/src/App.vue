<template>
  some text
  <RoomList />
  <PeopleList :users='users' />
</template>

<script>
import { ref } from 'vue'
import RoomList from './components/RoomList.vue'
import PeopleList from './components/PeopleList.vue'


export default {
  name: 'App',
  components: { RoomList, PeopleList },
  setup() {
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
    ])
    return {
      users
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
