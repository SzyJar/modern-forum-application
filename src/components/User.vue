<template>
   <div>
    <div class="avatar">
        <img :src="require('../assets/images/profile' + user.avatar + '.png')" />
    </div>
    
    <p v-if="user.room">
      <span class="name">{{ user.name }}</span> <br>
      <div class="in-room">{{ user.room }}</div>
    </p>
    <p v-else>
      <span class="name">{{ user.name }}</span> <br>
      <div clas="not-room">Not in conversation</div>
    </p>

  </div>
</template>

<script>
export default {
    props: ['user'],
}
</script>

<style scoped>
img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 1px solid black;
}

div {
    display: flex;
    margin: 4px;
    margin-bottom: -4px;
    text-align: left;
}

p {
    margin-left: 5px;
    margin-top: 0px;
}

.name {
    font-weight: 600;
    font-size: 110%;
}

.in-room {
  font-weight: 600;
}

.not-room {
  font-weight: 200;
}

</style>