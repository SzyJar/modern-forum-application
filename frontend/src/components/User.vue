<template>
   <div class="container">
    <div class="avatar">
        <img :src="require('../assets/images/profile' + user.avatar + '.jpg')" />
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

<style scoped src="@/styles/user.css">
</style>