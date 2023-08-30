<template>
  <div class="currentUser">
    <img :src="require('../assets/images/profile' + currentUser.avatar + '.png')">
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

<style scoped>
img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid black;
}

.currentUser {
    background: #AFAFAF;
    border: 1px solid black;
    margin-top: -35px;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    border-radius: 10px;
    font-weight: 600;
    overflow-wrap: break-word;
}

p {
    margin: 8px;
}

.user {
    background: #AFAFAF;
}

button {
    background: crimson;
}

button:hover {
    background: #bb1133;
}

</style>