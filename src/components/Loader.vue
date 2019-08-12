<template>
  <div class="loader"></div>
</template>


<style scoped lang="scss">
.loader {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 100%;
  animation: pulsate 1s infinite ease-in-out;
}

@keyframes pulsate {
  0% {
    transform: scale(0);
  } 100% {
    transform: scale(1.0);
    opacity: 0;
  }
}
</style>
