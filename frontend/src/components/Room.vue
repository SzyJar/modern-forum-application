<template>
    <div>
        <div class="icon">
            <div v-html="icon"></div>
        </div>
        <div class="name">{{ room.name }}</div>
    </div>
</template>

<script>
export default {
    props: ['room', 'icon'],
}
</script>

<style scoped>
img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 1px solid black;
}
.icon {
    font-size: 190%;
    margin-top: 20px, auto;
}

div {
    display: flex;
    margin: 5px;
    text-align: left;
}

.name {
    margin-left: 5px;
    margin-top: 5px;
    font-weight: 600;
}
</style>