<template>
  <div class="currentUser">
    <img src='../assets/images/profile1.png'/><br>
    Loged in as: NAME <br>
    Curent room: room name
    <button class="logout">LOG OUT</button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 1px solid black;
}

.currentUser {
    background: #AFAFAF;
    border: 1px solid black;
    margin-top: -35px;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    height: 130px;
    border-radius: 10px;
}

.user {
    background: #AFAFAF;
}

button {
    background: crimson;
}

button:hover {
    background: #bb1133;
}

</style>