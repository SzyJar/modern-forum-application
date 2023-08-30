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
  display: flex;
  flex-direction: row;
}

.content {
  margin: -5px 0 0 -5px;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 80%;
}

.name {
  font-weight: 600;
  height: 20px;
  overflow: hidden;
  overflow-wrap: pre;
  width: 95%;
}

.message {
  font-weight: 200;
  height: 20px;
  overflow: hidden;
  overflow-wrap: break-word;
  width: 95%;
}

</style>