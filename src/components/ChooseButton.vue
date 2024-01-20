<script setup lang="ts">
import { AQuestion } from "../Chord/A";
import { AbQuestion } from "../Chord/Ab";
import { BQuestion } from "../Chord/B";
import { BbQuestion } from "../Chord/Bb";
import { CQuestion } from "../Chord/C";
import { DQuestion } from "../Chord/D";
import { DbQuestion } from "../Chord/Db";
import { EQuestion } from "../Chord/E";
import { EbQuestion } from "../Chord/Eb";
import { FQuestion } from "../Chord/F";
import { GQuestion } from "../Chord/G";
import { GbQuestion } from "../Chord/Gb";

const props = defineProps<{
  question: string[];
  currentTab: number;
  correct: () => void;
  error: () => void;
}>();

function isC() {
  if (CQuestion.includes(props.question[props.currentTab])) {
    props.correct();
  } else {
    props.error();
  }
}
function isDb() {
  if (DbQuestion.includes(props.question[props.currentTab])) {
    props.correct();
  } else {
    props.error();
  }
}
function isD() {
  if (DQuestion.includes(props.question[props.currentTab])) {
    props.correct();
  } else {
    props.error();
  }
}
function isEb() {
  if (EbQuestion.includes(props.question[props.currentTab])) {
    props.correct();
  } else {
    props.error();
  }
}
function isE() {
  if (EQuestion.includes(props.question[props.currentTab])) {
    props.correct();
  } else {
    props.error();
  }
}
function isF() {
  if (FQuestion.includes(props.question[props.currentTab])) {
    props.correct();
  } else {
    props.error();
  }
}
function isGb() {
  if (GbQuestion.includes(props.question[props.currentTab])) {
    props.correct();
  } else {
    props.error();
  }
}
function isG() {
  if (GQuestion.includes(props.question[props.currentTab])) {
    props.correct();
  } else {
    props.error();
  }
}
function isAb() {
  if (AbQuestion.includes(props.question[props.currentTab])) {
    props.correct();
  } else {
    props.error();
  }
}
function isA() {
  if (AQuestion.includes(props.question[props.currentTab])) {
    props.correct();
  } else {
    props.error();
  }
}
function isBb() {
  if (BbQuestion.includes(props.question[props.currentTab])) {
    props.correct();
  } else {
    props.error();
  }
}
function isB() {
  if (BQuestion.includes(props.question[props.currentTab])) {
    props.correct();
  } else {
    props.error();
  }
}
</script>

<template>
  <div class="BigFooter">
    <div class="button" @click="isC">C</div>
    <div class="button" @click="isD">D</div>
    <div class="button" @click="isE">E</div>
    <div class="button" @click="isF">F</div>
    <div class="button" @click="isG">G</div>
    <div class="button" @click="isA">A</div>
    <div class="button" @click="isB">B</div>
  </div>
  <div class="SmallFooter">
    <div class="button" @click="isDb">C#</div>
    <div class="button" @click="isEb">Eb</div>
    <div class="button" style="background-color: transparent" />
    <div class="button" @click="isGb">F#</div>
    <div class="button" @click="isAb">Ab</div>
    <div class="button" @click="isBb">Bb</div>
  </div>
</template>

<style lang="scss" scoped>
.BigFooter {
  display: flex;
  position: fixed;
  bottom: 0;
  font-family: yinpinxuanyihei;
  .button {
    text-align: center;
    line-height: 30vh;
    color: aqua;
    font-size: 30px;
    height: 20vh;
    width: 14.28vw;
    border-left: 1px #000 solid;
    border-right: 1px #000 solid;
    border-radius: 0 0 5px 5px;
    background-color: #fff;
    opacity: 0.9;

    &:active {
      background-color: #777;
    }
  }
}
.SmallFooter {
  font-family: yinpinxuanyihei;
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
