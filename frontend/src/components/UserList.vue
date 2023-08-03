<template>
<div class="sideBar" :class="{ 'sideBar-hidden': isHidden }">
    <button class="toggle-button" @click="toggleSidebar">{{ isHidden ? '<<' : '>>' }}</button>
    <CurrentUser />
    <div class="users-online">
        <h2>People online</h2>
        <div class="user" v-for="user in users" :key="user.id">
            <User :user="user" />
        </div>
    </div>
</div>
</template>

<script>
import { ref } from 'vue'
import CurrentUser from './CurrentUser.vue'
import User from './User.vue'

export default {
    props: ['users'],
    components: { CurrentUser, User },
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
    height: 60px;
    border-radius: 10px;
    transition: transform 0.1s ease;
}

.user:hover{
    background: #404040;
    color: #DDD0C8;
    transform: translate(-2px, -2px);
}
</style>