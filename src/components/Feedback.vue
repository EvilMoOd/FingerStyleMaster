<script setup lang="ts">
import "animate.css";

defineProps<{
  show: { correct: boolean; error: boolean };
}>();
</script>

<template>
  <div v-show="show.correct" class="good">Good</div>
  <div v-show="show.error" class="error">error</div>
</template>

<style lang="scss" scoped>
.good {
  position: fixed;
  top: 40vh;
  left: 40vw;
  font-size: 30px;
  color: rgb(53, 197, 53);
  animation: bounce;
  animation-duration: 1s;
}
.error {
  position: fixed;
  top: 40vh;
  left: 40vw;
  font-size: 30px;
  color: rgb(197, 82, 53);
  animation: headShake;
  animation-duration: 1s;
}
</style>
