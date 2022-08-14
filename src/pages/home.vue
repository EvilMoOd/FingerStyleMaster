<script setup lang="ts">
  import { ref } from 'vue';
  import { AQuestion } from '../Chord/A';
  import { AbQuestion } from '../Chord/Ab';
  import { BQuestion } from '../Chord/B';
  import { BbQuestion } from '../Chord/Bb';
  import { CQuestion } from '../Chord/C';
  import { DQuestion } from '../Chord/D';
  import { DbQuestion } from '../Chord/Db';
  import { EQuestion } from '../Chord/E';
  import { EbQuestion } from '../Chord/Eb';
  import { FQuestion } from '../Chord/F';
  import { GQuestion } from '../Chord/G';
  import { GbQuestion } from '../Chord/Gb';
  import ChooseButton from '../components/ChooseButton.vue';

  const Library = [
    ...CQuestion,
    ...DbQuestion,
    ...DQuestion,
    ...EbQuestion,
    ...EQuestion,
    ...FQuestion,
    ...GbQuestion,
    ...GQuestion,
    ...AbQuestion,
    ...AQuestion,
    ...BbQuestion,
    ...BQuestion,
    '你已完成所有练习',
  ];

  Library.sort(() => Math.random() - 0.5);

  const currentTab = ref(0);

  function correct() {
    currentTab.value += 1;
  }
</script>

<template>
  <view class="header"></view>
  <view class="main">
    <swiper class="card" disable-touch :current="currentTab">
      <swiper-item v-for="(item, index) in Library" :key="index">
        {{ item }}
      </swiper-item>
    </swiper>
  </view>
  <ChooseButton :question="Library" :current-tab="currentTab" :correct="correct" />
</template>

<style lang="scss" scoped>
  .main {
    height: 80vh;
    background: url(../assets/bac.png) 100%;
    overflow: hidden;
  }
  .card {
    width: 80vw;
    height: 60vh;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 3px 8px 6px rgb(7 17 27 / 15%);
    background-color: rgba(255, 255, 255, 0.7);
    text-align: center;
    margin: 20px auto;
    line-height: 40vh;
    font-size: 16px;
  }
</style>
