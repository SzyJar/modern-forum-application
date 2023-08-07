<template>
    <form @submit.prevent="handleSubmit">
        <h2>Please register to access the forum</h2>

        <label>Name:</label>
        <input type="text" v-model="userData.name" maxlength="30" required>

        <label>Password:</label>
        <input type="password" v-model="userData.password" required>
        <div v-if="passwordError" class="error">{{ passwordError }}</div>

        <label v-if="registerScreen">Repeat password:</label>
        <input v-if="registerScreen" type="password" v-model="password2" required>
        <div v-if="passwordError && registerScreen" class="error">{{ passwordError }}</div>

        <label v-if="registerScreen">Choose your avatar:</label>
        <div v-if="registerScreen" class="avatar-options">
        <label v-for="image in imageOptions" :key="image.id">
            <input
                type="radio"
                :value="image.id"
                v-model="userData.avatar"
                required
            >
            <img :src="image.src" alt="Avatar" :class="{'avatar-image': true, 'selected-avatar': isSelectedAvatar(image.id)}" >
        </label>
        </div>

        <div class="submit">
            <button>{{ buttonText.submit }}</button>
        </div>
        <div v-if="loginError" class="error">{{ loginError }}</div>
        </form>
    <button @click='changeScreen'>{{ buttonText.change }}</button>
</template>

<script>
import { ref, computed } from 'vue'
import axios from 'axios'

export default {
    emits: ['success'],
    setup(props, { emit }){
        const userData = ref({
            name: '',
            avatar: 1,
            password: '',
            newuser: false
        });
        const imageOptions = [
            { id: 1, src: require('../assets/images/profile1.png') },
            { id: 2, src: require('../assets/images/profile2.png') },
            { id: 3, src: require('../assets/images/profile3.png') },
            { id: 4, src: require('../assets/images/profile4.png') },
            { id: 5, src: require('../assets/images/profile5.png') },
        ];
        const password2 = ref('');
        const passwordError = ref(null);
        const loginError = ref(null);
        const registerScreen = ref(false);
        const buttonText = ref({
            submit: 'Log in',
            change: 'Register new Account instead'
        });

        // Handle avatar choice
        const isSelectedAvatar = computed(() => (imageId) => {
            return userData.value.avatar === imageId;
        });
        
        // Switch between login and register screens
        const changeScreen = () => {
            userData.value = {
                name: '',
                password: '',
                avatar: 1,
            };
            password2.value = '';
            registerScreen.value = !registerScreen.value;
            passwordError.value = '';
            loginError.value = '';
            if (!registerScreen.value) {
                buttonText.value.change = 'Register new Account instead';
                buttonText.value.submit = 'Log in';
                userData.value.newuser= false;
            } else {
                buttonText.value.change = 'Use existing Account instead';
                buttonText.value.submit = 'Create an Account';
                userData.value.newuser= true;
            };

        };

        // Handle sign up logic
        const signupUser = async () => {
            try {
                const response = await axios.post(process.env.VUE_APP_API_URL + 'signup', userData.value);
                emit('success', response.data);
            } catch (error) {
                if (error.request) {
                    loginError.value = error.request.responseText;
                } else {
                    loginError.value = 'An error has occurred';
                };
            };
        };

        const handleSubmit = () => {
            if (registerScreen.value && userData.value.password.length <= 4) {
                passwordError.value = 'Passwords should be more than 4 characters long';
            } else if (registerScreen.value && userData.value.password !== password2.value) {
                passwordError.value = 'Password does not match';
            } else {
                passwordError.value = null;
                signupUser();
            };
        };

        return {
            // constants
            imageOptions,
            // variables
            userData,
            password2,
            passwordError,
            loginError,
            registerScreen,
            buttonText,
            // functions
            signupUser,
            handleSubmit,
            changeScreen,
            isSelectedAvatar
        };
    },
}
</script>

<style scoped>
form {
    max-width: 420px;
    margin: 30px auto;
    background: #323232;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
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
.error {
    color: #FFADAD;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}

.avatar-options {
    display: flex;
}

.avatar-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid transparent;
    margin-left: 24px;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.selected-avatar {
    transform: translate(0, -15px) scale(135%);
}

input[type='radio'] {
    display: none;
}
</style>