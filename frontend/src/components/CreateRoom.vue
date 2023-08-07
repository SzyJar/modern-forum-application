<template>
<div class="backdrop" @click="close">
    <div class="window" @click.stop>
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
                const responsePostRoom = await axios.post(process.env.VUE_APP_API_URL + 'chat/' + chatName.value, { icon: 1 });
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

<style scoped>
.window {
    width: 400px;
    padding: 20px;
    margin: 200px auto;
    background: #323232;
    border-radius: 10px;
    text-align: left;
    z-index: 9999;
}
.backdrop {
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.8);
    width: 100%;
    height: 100%;
}
label {
    color: #DDD0C8;
    display: inline-block;
    margin: 25px 0 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
}
input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
}
button {
    padding: 10px 20px;
    margin-top: 20px;
    border-radius: 20px;
}
</style>