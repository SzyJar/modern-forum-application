<template>
<div>
    <div class="chat-name">{{ chatName || "Not in chat" }}</div>
    <div class="chat-container">
        <div class="message" v-for="message in chatData" :key="message.id">
            <div class="sender">{{ message.sender }}</div>
            <div class="content">{{ message.content }}</div>
        </div>
    </div>
    <div class="send-container">
        <form @submit.prevent="handleSubmit">
            <textarea type="text" v-model="message" required />
                <div class="submit">
                <button>{{ "Send message" }}</button>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import { ref } from 'vue'
export default {
    props: ['chatData', 'chatName'],
    setup(props, { emit }) {
        const message = ref('');

        const handleSubmit = () => {
            emit("sendMessage", message.value)
            message.value = ''
        }

        return {
            message,
            handleSubmit ,
        }
    }
}
</script>

<style scoped>
button {
    height: 100%;
    border-radius: 0;
}

.chat-name {
    color: #DDD0C8;
    background: #323232;
    border: 1px solid black;
    margin-top: -1px;
    padding: 10px;
    border-radius: 10px;
    font-weight: 600;
    text-transform: uppercase;
    position: fixed;
    top: 0;
    width: 100%
}

.send-container {
    color: #DDD0C8;
    background: transparent;
    position: fixed;
    bottom: 0;
    width: 50%;
    left: 50%;
    transform: translate(-50%);
    padding: 10px;
}

form {
    display: flex;
}

textarea {
    display: block;
    padding: 10px;
    width: 100%;
    margin: 1px;
    box-sizing: border-box;
    resize: none;
    outline: none;
}

.chat-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 45px;
    margin-bottom: 80px;
    height: 100%;
    color: #DDD0C8;
}

.message {
    background: #404040;
    padding: 10px;
    margin-top: 15px;
    width: calc(100% - 700px);
    border-radius: 20px;
    text-align: left;
}

.sender {
    font-weight: 600;
    text-transform: uppercase;
}

.content {
    margin-top: 10px;
}

</style>