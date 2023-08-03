<template>
   <div>
    <div class="avatar">
        <img src='../assets/images/profile1.png'/>
    </div>
    
    <p v-if="user.room">
      <span class="name">{{ user.name }}</span> <br>
      Current conversation: {{ user.room }}
    </p>
    <p v-else>
      <span class="name">{{ user.name }}</span> <br>
      Not in conversation
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
    margin: 5px;
    text-align: left;
}

p {
    margin-left: 5px;
    margin-top: 5px;
}

.name {
    font-weight: 600;
}
</style>