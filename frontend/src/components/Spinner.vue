<template>
<div class="container">
  <div class="loading">
    <p>Connecting to the server</p>
      <div class="loading-circle">
        <div class="spinner"></div>
      </div>
    <p>Please wait</p>
  </div>
</div>
</template>

<style>
.container {
  display: grid;
  align-items: center;
  gap: 10px;
  height: 100vh;
}
.loading-circle {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.spinner {
  width: 70px;
  height: 70px;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top: 5px solid black;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>