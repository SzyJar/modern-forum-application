<template>
<div class="sideBar" :class="{ 'sideBar-hidden': isHidden }">
    <button class="toggle-button" @click="toggleSidebar">
      <i class="fa-solid" :class="{ 'fa-arrow-left': isHidden, 'fa-arrow-right': !isHidden }"></i>
    </button>
    <CurrentUser :currentUser="currentUser" :chatName="chatName" @logOut="logOut" />
    <div class="users-online">
        <h2>Active users</h2>
        <div v-for="user in users" :key="user.id">
            <div class="user" v-if="user.name !== currentUser.name" @click="roomChange(user.name)">
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
    components: { CurrentUser, User },
    setup(props, { emit }) {
        const isHidden = ref(false);

        const toggleSidebar = () => {
            isHidden.value = !isHidden.value;
            emit('toggleSidebar');
        };

        const logOut = () => {
            emit('logOut');
        };

        const roomChange = (name) => {
            if (name){
                emit('roomChange', name, true);
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

<style scoped src="@/styles/userlist.css">
</style>