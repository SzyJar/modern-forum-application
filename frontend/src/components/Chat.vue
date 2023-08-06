<template>
<div>
    <div class="chat-name">{{ chatName || "Not in conversation" }}</div>
    <div class="chat-container">
        <div class="message" v-for="message in localChatData" :key="message.id">
            <img :src="require('../assets/images/profile' + message.avatar + '.png')">
            <div class="header">
                <div class="sender">{{ message.sender }}</div>
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
                <button>{{ "Send message" }}</button>
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

img {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 1px solid black;
    margin-top: -24px;
    margin-left: -24px;
}

.chat-name {
    color: white;
    background: #323232;
    border: 1px solid black;
    margin-top: -1px;
    padding: 10px;
    border-radius: 10px;
    font-weight: 600;
    text-transform: uppercase;
    position: fixed;
    top: 0;
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
    padding: 10px;
    width: calc(100% - 700px);
    min-width: 400px;
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
    height: 100%;
    color: white;
    overflow-wrap: break-word;
    overflow-y: auto;
}

.message {
    background: #404040;
    padding: 10px;
    margin-top: 30px;
    width: calc(100% - 700px);
    min-width: 300px;
    border-radius: 20px;
    text-align: left;
}

.header {
    display: flex;
    justify-content: space-between;
    color: #DDD0C8;
    margin-top: -10px;
}

.sender {
    font-weight: 600;
    text-transform: uppercase;
    margin-left: 20px;
}

.content {
    margin-top: 20px;
}

.users-typing {
    display: flex;
    flex-direction: row;
    justify-content: left;
    flex-wrap: wrap;
    align-items: left;
    text-align: left;
    margin-top: 10px;
    width: calc(100% - 700px);
}

.user-typing {
    text-align: left;
    color: #323232;
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
};

</style>