<template>
<div class="sideBar" :class="{ 'sideBar-hidden': isHidden }">
    <button class="toggle-button" @click="toggleSidebar">{{ isHidden ? '>>' : '<<' }}</button>
    <div class="rooms">
        <h2>Conversations</h2>
        <div class="room" v-for="room in rooms" :key="room.id" @click="roomChange(room.name)">
            <Room :room="room" />
        </div>
        <div class='room'>
          <Room :room="{ name: 'Create new room', icon: 'new' }" />
        </div>
    </div>
</div>
 
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
axios.defaults.withCredentials = true;

import Room from './Room.vue'

export default {
  components: { Room },
  setup(props, { emit }) {
    const isHidden = ref(false);
    const rooms = ref(null);

    const getRooms = async () => {
        try {
          const response = await axios.get(process.env.VUE_APP_API_URL + 'chat');
          rooms.value = response.data;
        } catch (error) {
          console.log(error.message);
        };
    };

    const toggleSidebar = () => {
      isHidden.value = !isHidden.value;
    };
    const roomChange = (name) => {
      emit('roomChange', name);
    };

    getRooms();
    return {
      isHidden,
      rooms,
      // functions
      toggleSidebar,
      getRooms,
      roomChange
    };
  },
}
</script>

<style scoped>
.sideBar {
    border-right: 1px solid black;
    left: 0;
}

.sideBar-hidden {
  transform: translateX(-260px);
}

.toggle-button {
    align-self: flex-end;
    margin-right: -35px;
}

.rooms {
    margin-top: -35px;
    width: 100%;
    overflow-y: auto;
}

.room {
    background: #AFAFAF;
    border: 1px solid black;
    margin-left: 2px;
    margin-top: 10px;
    width: 98%;
    height: 60px;
    border-radius: 10px;
    transition: transform 0.1s ease;
}

.room:hover{
    background: #404040;
    color: #DDD0C8;
    transform: translate(-2px, -2px);
    cursor: pointer;
}
</style>