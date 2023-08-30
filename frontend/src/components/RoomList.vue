<template>
<div class="sideBar" :class="{ 'sideBar-hidden': isHidden }">
    <button class="toggle-button" @click="toggleSidebar">
      <i class="fa-solid" :class="{ 'fa-arrow-right': isHidden, 'fa-arrow-left': !isHidden }"></i>
    </button>
    <div class="rooms">
        <div class='room' @click="CreateRoom">
          <Room :room="{ name: 'Create public chat' }" icon='<i class="fa-solid fa-comment-medical"></i>' />
        </div>
        <h2>Conversations</h2>
        <div class="room" v-for="room in rooms" :key="room.id" @click="roomChange(room.name)">
            <Room :room="room" icon="<i class='fa-solid fa-comment-dots'></i>" />
        </div>
    </div>
</div>
</template>

<script>
import { ref, onMounted } from 'vue'

import Room from './Room.vue'

export default {
  components: { Room },
  props: ['rooms'],
  setup(props, { emit }) {
    const isHidden = ref(false);

    const getRooms = () => {
      emit('getRooms');
    };

    const toggleSidebar = () => {
      isHidden.value = !isHidden.value;
      emit('toggleSidebar');
    };

    const roomChange = (name) => {
      emit('roomChange', name);
    };

    const CreateRoom = () => {
      emit('createNewRoom');
    }

    onMounted(getRooms);

    return {
      isHidden,
      //rooms,
      // functions
      toggleSidebar,
      getRooms,
      roomChange,
      CreateRoom
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
    margin-right: -30px;
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