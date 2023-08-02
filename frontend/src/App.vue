<template>
  some text
  <RoomList />
  <PeopleList />
</template>

<script>
import { ref } from 'vue'
import RoomList from './components/RoomList.vue'
import PeopleList from './components/PeopleList.vue'

export default {
  name: 'App',
  components: { RoomList, PeopleList },
  setup() {

    return {

    }
  },
}
</script>

<style>
body {
  background: #DDD0C8;
  color: #333333;
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

</style>
