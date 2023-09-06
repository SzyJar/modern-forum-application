<template>
    <div>
        <div class="icon">
            <div v-html="icon"></div>
        </div>
        <div class="content">
          <div class="name">{{ room.name }}</div>
          <div class="message">{{ room.message }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['room', 'icon'],
}
</script>

<style scoped src="@/styles/room.css">
</style>