<template>
<div class="sideBar" :class="{ 'sideBar-hidden': isHidden }">
    <button class="toggle-button" @click="toggleSidebar">{{ isHidden ? '>>' : '<<' }}</button>
    <div class="rooms">
        <h2>Conversations</h2>
        <div class="room" v-for="room in rooms" :key="room.id">
            <Room :room="room" />
        </div>
    </div>
</div>
 
</template>

<script>
import { ref } from 'vue'
import Room from './Room.vue'

export default {
  props: ['rooms'],
  components: { Room },
  setup() {
    const isHidden = ref(false);

    const toggleSidebar = () => {
      isHidden.value = !isHidden.value;
    };

    return { isHidden, toggleSidebar };
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