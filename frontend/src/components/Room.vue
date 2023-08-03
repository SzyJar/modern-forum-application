<template>
    <div>
        <div class="avatar">
            <img src='../assets/images/profile1.png'/>
        </div>
        <div class="name">{{ room.name }}</div>
    </div>
</template>

<script>
export default {
    props: ['room'],
}
</script>

<style scoped>
img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 1px solid black;
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