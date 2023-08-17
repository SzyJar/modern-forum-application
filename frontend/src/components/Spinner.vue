<template>
<div class="container">
<p> Waiting for response from replit server ...</p>
  <div class="loading-circle">
    <div class="spinner"></div>
  </div>
<p>Please Wait</p>
</div>
</template>

<style>
.container {
  margin: 30px auto;
}
.loading-circle {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid black;
  border-radius: 50%;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>