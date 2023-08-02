<template>
<div class="sideBar" :class="{ 'sideBar-hidden': isHidden }">
    <button class="toggle-button" @click="toggleSidebar">{{ isHidden ? '<<' : '>>' }}</button>
</div>
 
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const isHidden = ref(false);

    const toggleSidebar = () => {
      isHidden.value = !isHidden.value;
    };

    return { isHidden, toggleSidebar };
  },
}
</script>

<style scoped>
.sideBar {
    border-left: 1px solid black;
    right: 0;
}

.sideBar-hidden {
  transform: translateX(250px);
}

.toggle-button {
    align-self: flex-start;
    margin-left: -35px;
}
</style>