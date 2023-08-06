<template>
<div class="sideBar" :class="{ 'sideBar-hidden': isHidden }">
    <button class="toggle-button" @click="toggleSidebar">{{ isHidden ? '<<' : '>>' }}</button>
    <CurrentUser :currentUser="currentUser" :chatName="chatName" @logOut="logOut" />
    <div class="users-online">
        <h2>Active users</h2>
        <div v-for="user in users" :key="user.id">
            <div class="user" v-if="user.name !== currentUser.name" @click="roomChange(user.room)">
                <User :user="user" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { ref } from 'vue'
import CurrentUser from './CurrentUser.vue'
import User from './User.vue'

export default {
    props: ['users','currentUser', 'chatName'],
    emits: ['logOut', 'roomChange'],
    components: { CurrentUser, User },
    setup(props, { emit }) {
        const isHidden = ref(false);

        const toggleSidebar = () => {
            isHidden.value = !isHidden.value;
        };

        const logOut = () => {
            emit('logOut');
        };

        const roomChange = (name) => {
            if (name){
                emit('roomChange', name);
            };
        };

        return {
            isHidden,
            toggleSidebar,
            logOut,
            roomChange
        };
    },
}
</script>

<style scoped>
.sideBar {
    border-left: 1px solid black;
    right: 0;
}

.sideBar-hidden {
  transform: translateX(260px);
}

.toggle-button {
    align-self: flex-start;
    margin-left: -35px;
}

.users-online {
    margin-top: 5px;
    width: 100%;
    overflow-y: auto;
}

.user{
    background: #AFAFAF;
    border: 1px solid black;
    margin-left: 2px;
    margin-top: 10px;
    width: 98%;

    border-radius: 10px;
    transition: transform 0.1s ease;
}

.user:hover{
    background: #404040;
    color: #DDD0C8;
    transform: translate(-2px, -2px);
    cursor: pointer;
}
</style>