<template>
<div class="backdrop" @click="close">
    <div class="pop-up-window" @click.stop>
        <h2>Create new conversation</h2>
        <form @submit.prevent="handleSubmit">
            <label>Conversation name:</label>
            <input type="text" v-model="chatName" maxlength="44" required>
            <div class="submit">
                <button>Create conversation</button>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
axios.defaults.withCredentials = true;

export default {
    setup(props, { emit }) {
        const chatName = ref(null);

        const handleSubmit = async () => {
            try {
                const responsePostRoom = await axios.post(process.env.VUE_APP_API_URL + 'chat/' + chatName.value);
            } catch (error) {
                console.log(error);
            };
            emit('done');
        };

        const close = () => {
            emit('done');
        };

        return{
            chatName,
            handleSubmit,
            close,
        }
    }
}
</script>

<style scoped src="@/styles/createroom.css">
</style>