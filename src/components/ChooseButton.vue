<script setup lang="ts">
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

  const props = defineProps<{
    question: string[];
    currentTab: number;
    correct: () => void;
  }>();

  function isC() {
    if (CQuestion.includes(props.question[props.currentTab])) {
      props.correct();
    }
  }
  function isDb() {
    if (DbQuestion.includes(props.question[props.currentTab])) {
      props.correct();
    }
  }
  function isD() {
    if (DQuestion.includes(props.question[props.currentTab])) {
      props.correct();
    }
  }
  function isEb() {
    if (EbQuestion.includes(props.question[props.currentTab])) {
      props.correct();
    }
  }
  function isE() {
    if (EQuestion.includes(props.question[props.currentTab])) {
      props.correct();
    }
  }
  function isF() {
    if (FQuestion.includes(props.question[props.currentTab])) {
      props.correct();
    }
  }
  function isGb() {
    if (GbQuestion.includes(props.question[props.currentTab])) {
      props.correct();
    }
  }
  function isG() {
    if (GQuestion.includes(props.question[props.currentTab])) {
      props.correct();
    }
  }
  function isAb() {
    if (AbQuestion.includes(props.question[props.currentTab])) {
      props.correct();
    }
  }
  function isA() {
    if (AQuestion.includes(props.question[props.currentTab])) {
      props.correct();
    }
  }
  function isBb() {
    if (BbQuestion.includes(props.question[props.currentTab])) {
      props.correct();
    }
  }
  function isB() {
    if (BQuestion.includes(props.question[props.currentTab])) {
      props.correct();
    }
  }
</script>

<template>
  <view class="BigFooter">
    <view class="button" @tap="isC">C</view>
    <view class="button" @tap="isD">D</view>
    <view class="button" @tap="isE">E</view>
    <view class="button" @tap="isF">F</view>
    <view class="button" @tap="isG">G</view>
    <view class="button" @tap="isA">A</view>
    <view class="button" @tap="isB">B</view>
  </view>
  <view class="SmallFooter">
    <view class="button" @tap="isDb">Db</view>
    <view class="button" @tap="isEb">Eb</view>
    <view class="button" style="background-color: transparent"></view>
    <view class="button" @tap="isGb">Gb</view>
    <view class="button" @tap="isAb">Ab</view>
    <view class="button" @tap="isBb">Bb</view>
  </view>
</template>

<style lang="scss" scoped>
  .BigFooter {
    display: flex;
    position: fixed;
    bottom: 0;
    .button {
      text-align: center;
      line-height: 30vh;
      color: aqua;
      font-size: 30px;
      height: 20vh;
      width: 13.7vw;
      border-left: 1px #000 solid;
      border-right: 1px #000 solid;
      border-radius: 0 0 5px 5px;

      &:active {
        background-color: #777;
      }
    }
  }
  .SmallFooter {
    display: flex;
    position: fixed;
    bottom: 10vh;
    margin-left: 7vw;
    .button {
      text-align: center;
      line-height: 10vh;
      color: aqua;
      font-size: 30px;
      height: 10vh;
      width: 14vw;
      background-color: #000;
      border-radius: 0 0 5px 5px;

      &:active {
        background-color: #777;
      }
    }
  }
</style>
