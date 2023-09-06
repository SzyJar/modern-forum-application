<template>
<div class="container">
  <div class="content">
    <form @submit.prevent="handleSubmit">
      <h2>{{ header }}</h2>

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
      <div>
          <button>{{ buttonText.submit }}</button>
      </div>
      <div v-if="loginError" class="error">{{ loginError }}</div>
    </form>
    <div class="outside" @click="changeScreen">
      <button>{{ buttonText.change }}</button>
    </div>
  </div>

</div>
</template>

<script>
import { ref, computed } from 'vue'
import axios from 'axios'

export default {
    emits: ['success'],
    setup(props, { emit }){
        const userData = ref({
            name: 'Guest',
            avatar: 1,
            password: 'Guest',
            newuser: false
        });
        const imageOptions = [
            { id: 1, src: require('../assets/images/profile1.jpg') },
            { id: 2, src: require('../assets/images/profile2.jpg') },
            { id: 3, src: require('../assets/images/profile3.jpg') },
            { id: 4, src: require('../assets/images/profile4.jpg') },
            { id: 5, src: require('../assets/images/profile5.jpg') },
        ];
        const password2 = ref('');
        const passwordError = ref(null);
        const loginError = ref(null);
        const registerScreen = ref(false);
        const buttonText = ref({
            submit: 'Log in',
            change: 'Register new user instead'
        });
        const header = ref('Log in to Forum app')
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
                buttonText.value.change = 'Register new user instead';
                buttonText.value.submit = 'Log in';
                header.value = 'Log in to Forum app';
                userData.value.newuser= false;
            } else {
                buttonText.value.change = 'Use existing user account instead';
                buttonText.value.submit = 'Register new user';
                header.value = 'Register new user';
                userData.value.newuser= true;    
            };

        };

        // Handle sign up logic
        const signupUser = async (data = userData.value) => {
            try {
                const response = await axios.post(process.env.VUE_APP_API_URL + 'signup', data);
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
            header,
            // functions
            signupUser,
            handleSubmit,
            changeScreen,
            isSelectedAvatar,
        };
    },
}
</script>

<style scoped src="@/styles/signin.css">
</style>