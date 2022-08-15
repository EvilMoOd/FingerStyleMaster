<script setup lang="ts">
  import 'animate.css';

  defineProps<{
    show: { correct: boolean; error: boolean };
  }>();
</script>

<template>
  <view v-show="show.correct" class="good">Good</view>
  <view v-show="show.error" class="error">error</view>
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
