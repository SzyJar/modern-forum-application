<template>
<div>
    <div class="chat-name">{{ chatName.replace(/@/g, ' - ') || "Not in conversation" }}</div>
    <div class="chat-container">
        <div class="message" v-for="message in localChatData" :key="message.id">
            <div class="header">
                <div class="sender">{{ message.sender }}</div>
                <img :src="require('../assets/images/profile' + message.avatar + '.png')">
                <div class="sender">{{ new Date(message.timestamp).toLocaleString() }}</div>
            </div>
            <div class="content">{{ message.content }}</div>
        </div>
        <div class="users-typing">
            <div class="user-typing" v-for="(user, index) in usersTyping" :key="index">
                {{ user }} ... 
            </div>
        </div>
    </div>
    <div class="send-container">
        <form @submit.prevent="handleSubmit">
            <textarea type="text" v-model="message" required />
                <div class="submit">
                <button><i class="fa-solid fa-paper-plane send"></i></button>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import { ref, watch, onMounted, onUpdated } from 'vue';

export default {
    props: ['chatData', 'chatName', 'currentUser', 'usersTyping'],
    setup(props, { emit }) {
        const message = ref('');
        const localChatData = ref([]);
        const messagePrev = ref(null);

        watch(() => props.chatData, (newVal) => {
            localChatData.value = newVal;
        });

        // watch changes in text ands end emit
        watch(message, (newValue) => {
            if (newValue.trim() !== '') {
                emit('typing')
            };
        });

        const scrollToBottom = () => {
            if (messagePrev.value === message.value) {
                window.scrollTo(0, document.body.scrollHeight);      
            };
            messagePrev.value = message.value;
        };

        const handleSubmit = () => {
            if (!props.chatName || message.value.trim() === '') {
                message.value = '';
                return false;
            };
            emit("sendMessage", message.value)
            localChatData.value.push({
                id: 'placeholder',
                sender: props.currentUser.name,
                avatar: props.currentUser.avatar,
                content: message.value,
                timestamp: new Date(),
            });
            message.value = '';
            scrollToBottom();
        };

        onMounted(scrollToBottom);
        onUpdated(scrollToBottom);

        return {
            message,
            localChatData,
            handleSubmit,
        }
    }
}
</script>

<style scoped>
button {
    height: 100%;
    border-radius: 0;
}

.send{
    font-size: 190%;
    padding-left: 20px;
    padding-right: 20px;
}

img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid black;
    margin-top: -30px;
}

.chat-name {
    color: white;
    background: #323232;
    border: 1px solid black;
    margin-top: -1px;
    padding: 10px;
    font-weight: 600;
    text-transform: uppercase;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    font-size: 120%;
}

.send-container {
    color: #DDD0C8;
    background: transparent;
    position: fixed;
    bottom: 0;
    width: 50%;
    left: 50%;
    transform: translate(-50%);
    margin: 10px auto;
    width: calc(100% - 600px);
    max-width: 1000px;
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
    width: 100%;
    color: white;
    overflow-wrap: break-word;
    overflow-y: auto;
}

.message {
    background: #404040;
    padding: 10px;
    margin-top: 30px;
    width: calc(100% - 40px);
    border-radius: 20px;
    text-align: left;
    white-space: pre-wrap;
    text-align: center;
}

.header {
    display: flex;
    justify-content: center;
    color: #DDD0C8;
    width: 100%;
}

.sender {
    font-weight: 600;
    text-transform: uppercase;
    width: calc(100% - 130px);
}

.content {
    margin-top: 20px;
    margin-bottom: 5px;
    text-align: left;
}

.users-typing {
    display: flex;
    flex-direction: row;
    justify-content: left;
    flex-wrap: wrap;
    align-items: left;
    text-align: left;
    margin-top: 10px;
    width: calc(100% - 40px);
}

.user-typing {
    text-align: left;
    color: #323232;
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
};

</style>