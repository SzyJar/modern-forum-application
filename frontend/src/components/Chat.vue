<template>
<div class="chat-container">
  <div class="chatName">{{ chatName }}</div>
  <div class="message" v-for="message in chatData" :key="message.timestamp">
    {{ message.content }}
  </div>
</div>
</template>

<script>
export default {
    props: ['chatData', 'chatName'],
}
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #DDD0C8;
}

.chatName {
    background: #404040;
    border: 1px solid black;
    margin-top: 1px;
    padding: 10px;
    border-radius: 10px;
    font-weight: 600;
    text-transform: uppercase;
}

.message {
  
}
</style>