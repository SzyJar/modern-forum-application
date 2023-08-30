<template>
   <div class="container">
    <div class="avatar">
        <img :src="require('../assets/images/profile' + user.avatar + '.png')" />
    </div>
    <div class="user">
      <div class="user-content" v-if="user.room">
        <span class="name">{{ user.name }}</span>
        <div class="in-room">{{ user.room }}</div>
      </div>
      <div class="user-content" v-else>
        <span class="name">{{ user.name }}</span>
        <div class="not-room">Not in conversation</div>
      </div>
      <div v-if="user.notification" class="notification">
        <i class="fa-solid fa-envelope"></i> !
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['user'],
}
</script>

<style scoped>
.user {
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  align-content: space-between;
}

.notification {
  text-align: right;
  color: crimson;
}

.user-content {
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 80%;
}

.container{
  display: flex;
  margin: 4px;
  text-align: left;
  height: 60px;
  width: 100%;
  overflow: hidden;
}

img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid black;
}

.avatar {
  text-align: left;
}

.name {
  font-weight: 600;
  font-size: 110%;
  margin: -6px 0 0 0;
}

.in-room {
  font-weight: 600;
  margin: 10px 0 0 0;
  padding: 0;
  height: 25px;
  width: 150px;
  white-space: pre;
  overflow: hidden;
}

.not-room {
  font-weight: 200;
  margin: 10px 0 0 0;
  padding: 0;
  width: 50px;
  white-space: pre;
}

</style>