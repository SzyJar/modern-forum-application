<template>
  <div class="currentUser">
    <img :src="require('../assets/images/profile' + currentUser.avatar + '.jpg')">
    <p>Logged in as: {{ currentUser.name }}</p>
    <p v-if="chatName">{{ chatName.replace(/@/g, ' - ') }}</p>
    <p v-else>Not in conversation</p>
    <button @click="logOut" class="logout">LOG OUT</button>
  </div>
</template>

<script>
export default {
    props: ['currentUser', 'chatName'],
    emits: ['logOut'],
    setup(props, { emit }) {
        const logOut = () => {
            emit('logOut');
        };
        return {
            logOut,
        };
    }
};
</script>

<style scoped src="@/styles/currentuser.css">
</style>