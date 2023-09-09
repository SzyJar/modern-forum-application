<template>
<div>
    <div class="chat-name">{{ chatName.replace(/@/g, ' - ') || "Not in conversation" }}</div>
    <div class="chat-container">
        <div class="message" v-for="message in localChatData" :key="message._id">
            <div class="header">
                <div class="sender">{{ message.sender }}</div>
                <img :src="require('../assets/images/profile' + message.avatar + '.jpg')">
                <div class="sender">{{ new Date(message.timestamp).toLocaleString() }}</div>
            </div>
            <div v-if="!editing.state || message._id !== editing.id" class="content" v-html="formatMessage(message.content)"></div>
            <div v-else class="content">
                <form @submit.prevent="handleEdit">
                    <textarea type="text" v-model="editing.data" :disabled="editing.isLocked" required />
                        <div class="submit">
                        <button><i class="fa-solid fa-paper-plane send"></i></button>
                    </div>
                </form>
            </div>
            <div v-if="message.sender === currentUser.name && message.content !== '[DELETED]' && editing.state === false" class="options">
                <button @click="editMessage(message._id, message.content.replace(/(\s*)\[EDITED\]/g, ''))"><i class="fa-solid fa-pen"></i></button>
                <button @click="editMessage(message._id, 'MESSAGE WILL BE DELETED!', locked=true)"><i class="fa-solid fa-trash"></i></button>
            </div>
            <div v-if="message.sender === currentUser.name && message.content !== '[DELETED]' && editing.state === true && message._id === editing.id" class="options">
                <button @click="editMessage(message._id)"><i class="fa-solid fa-xmark"></i></button>
            </div>
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
        const editing = ref({
            id: '',
            state: false,
            data: '',
            isLocked: false
        });

        const formatMessage = (message) => {
            const words = message.split(' ');

            if (words.length > 0 && words[words.length - 1] === '[EDITED]') {
                const status = words.pop();
                const uneditedText = words.join(' ');
                return `${uneditedText} <p style="color: #DDD0C8; font-weight: 600;">${status}</p>`;
            } else if ((words.length > 0 && words[words.length - 1] === '[DELETED]')) {
                const status = words.pop();
                const uneditedText = words.join(' ');
                return `${uneditedText} <span style="color: #DDD0C8; font-weight: 600;">${status}</span>`;
            }

            return message;
        };

        watch(() => props.chatData, (newValue) => {
            localChatData.value = newValue;
        });

        // watch changes in text ands end emit
        watch(message, (newValue) => {
            if (newValue.trim() !== '') {
                emit('typing')
            };
        });

        watch(() => props.chatName, () => {
            editing.value.state = false
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

        const editMessage = (id, data, locked=false) => {
            editing.value = {
                id: id,
                state: !editing.value.state,
                data: data,
                isLocked: locked
            }
        };

        const handleEdit = () => {
            emit("handleEdit", editing.value)
            editing.value = {
                state: false,
            }
        }

        onMounted(scrollToBottom);
        onUpdated(scrollToBottom,);

        return {
            editing,
            message,
            localChatData,
            handleSubmit,
            editMessage,
            handleEdit,
            formatMessage
        }
    }
}
</script>

<style scoped src="@/styles/chat.css">
</style>