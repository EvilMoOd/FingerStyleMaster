<script setup lang="ts">
  import { computed, onMounted, reactive, ref } from 'vue';
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
  import Feedback from '../components/Feedback.vue';
  import throttle from '../utils/throttle';

  // 选择库
  const libraryIndex = ref(0);
  // 总库
  const totalLibrary = reactive([
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
  ]);
  // 6弦库
  const sixLibrary = reactive([
    CQuestion[0],
    DbQuestion[0],
    DQuestion[0],
    EbQuestion[0],
    EQuestion[0],
    EQuestion[1],
    FQuestion[0],
    GbQuestion[0],
    GQuestion[0],
    AbQuestion[0],
    AQuestion[0],
    BbQuestion[0],
    BQuestion[0],
  ]);
  // 5弦库
  const fiveLibrary = reactive([
    CQuestion[1],
    DbQuestion[1],
    DQuestion[1],
    EbQuestion[1],
    EQuestion[2],
    FQuestion[1],
    GbQuestion[1],
    GQuestion[1],
    AbQuestion[1],
    AQuestion[1],
    AQuestion[2],
    BbQuestion[1],
    BQuestion[1],
  ]);
  // 4弦库
  const fourLibrary = reactive([
    CQuestion[2],
    DbQuestion[2],
    DQuestion[2],
    EbQuestion[2],
    EQuestion[3],
    FQuestion[2],
    GbQuestion[2],
    GQuestion[2],
    AbQuestion[2],
    AQuestion[3],
    BbQuestion[2],
    BQuestion[2],
  ]);
  // 3弦库
  const threeLibrary = reactive([
    CQuestion[3],
    DbQuestion[3],
    DQuestion[3],
    EbQuestion[3],
    EQuestion[4],
    FQuestion[3],
    GbQuestion[3],
    GQuestion[3],
    GQuestion[4],
    AbQuestion[3],
    AQuestion[4],
    BbQuestion[3],
    BQuestion[3],
  ]);
  // 2弦库
  const twoLibrary = reactive([
    CQuestion[4],
    DbQuestion[4],
    DQuestion[4],
    EbQuestion[4],
    EQuestion[5],
    FQuestion[4],
    GbQuestion[4],
    GQuestion[5],
    AbQuestion[4],
    AQuestion[5],
    BbQuestion[4],
    BQuestion[4],
    BQuestion[5],
  ]);
  // 1弦库
  const oneLibrary = reactive([
    CQuestion[5],
    DbQuestion[5],
    DQuestion[5],
    EbQuestion[5],
    EQuestion[6],
    EQuestion[7],
    FQuestion[5],
    GbQuestion[5],
    GQuestion[6],
    AbQuestion[5],
    AQuestion[6],
    BbQuestion[5],
    BQuestion[6],
  ]);

  const Library = reactive([
    totalLibrary,
    sixLibrary,
    fiveLibrary,
    fourLibrary,
    threeLibrary,
    twoLibrary,
    oneLibrary,
  ]);
  const currentTab = ref(0);
  function reset() {
    if (currentTab.value === Library[libraryIndex.value].length - 1) {
      Library[libraryIndex.value].pop();
      currentTab.value = 0;
      Library[libraryIndex.value].sort(() => Math.random() - 0.5);
      Library[libraryIndex.value].push('你已完成所有训练，点击可再次训练');
    }
  }
  onMounted(() => {
    Library[libraryIndex.value].sort(() => Math.random() - 0.5);
    Library[libraryIndex.value].push('你已完成所有训练，点击可再次训练');
  });

  const progress = computed(() => {
    return `${(currentTab.value / (Library[libraryIndex.value].length - 1)) * 100}%`;
  });

  const show = reactive({
    correct: false,
    error: false,
    menu: false,
  });

  const correct = throttle(() => {
    show.correct = true;
    setTimeout(() => {
      show.correct = false;
      currentTab.value += 1;
    }, 500);
  }, 2000);
  const error = throttle(() => {
    show.error = true;
    setTimeout(() => {
      show.error = false;
    }, 1000);
  });

  const menu = ref<any>(null);
  function showChooseLibrary() {
    menu.value.open('left');
  }
  function changeLibrary(index: number) {
    Library[libraryIndex.value].pop();
    libraryIndex.value = index;
    currentTab.value = 0;
    Library[libraryIndex.value].sort(() => Math.random() - 0.5);
    Library[libraryIndex.value].push('你已完成所有训练，点击可再次训练');
  }
</script>

<template>
  <view class="header">
    <view class="choose">
      <uni-icons
        type="bars"
        color="#eee"
        size="30"
        style="margin: 10px 10px"
        @tap="showChooseLibrary"
      />
    </view>
  </view>
  <uni-popup ref="menu" class="menu" background-color="rgba(255,255,255,0.6)">
    <view class="string" :class="{ active: libraryIndex === 0 }" @tap="changeLibrary(0)">all</view>
    <view class="string" :class="{ active: libraryIndex === 1 }" @tap="changeLibrary(1)">6弦</view>
    <view class="string" :class="{ active: libraryIndex === 2 }" @tap="changeLibrary(2)">5弦</view>
    <view class="string" :class="{ active: libraryIndex === 3 }" @tap="changeLibrary(3)">4弦</view>
    <view class="string" :class="{ active: libraryIndex === 4 }" @tap="changeLibrary(4)">3弦</view>
    <view class="string" :class="{ active: libraryIndex === 5 }" @tap="changeLibrary(5)">2弦</view>
    <view class="string" :class="{ active: libraryIndex === 6 }" @tap="changeLibrary(6)">1弦</view>
  </uni-popup>
  <view class="main">
    <view class="box" @tap="reset()">
      <swiper class="card" disable-touch :current="currentTab">
        <swiper-item v-for="(item, index) in Library[libraryIndex]" :key="index">
          {{ item }}
        </swiper-item>
      </swiper>
    </view>
    <Feedback :show="show" />
    <div class="g-container">
      <div class="g-progress"></div>
    </div>
  </view>
  <ChooseButton
    :question="Library[libraryIndex]"
    :current-tab="currentTab"
    :correct="correct"
    :error="error"
  />
</template>

<style lang="css" scoped>
  @font-face {
    font-family: yinpinxuanyihei;
    src: url('https://cdn.jsdelivr.net/gh/DreamStar1996/ImageHub-CDN@1.1.3/font/inpinxuanyihei/inpinxuanyihei.woff2');
  }
  .header {
    position: fixed;
    width: 100vw;
    top: 4vh;
    left: 3vw;
  }
  .choose {
    display: flex;
  }
  .string {
    font-family: yinpinxuanyihei;
    padding: 20px 80px;
  }
  .active {
    background-color: #eee;
  }
  .main {
    height: 100vh;
    background: #212534;
    overflow: hidden;
    font-family: yinpinxuanyihei;
  }
  .g-container {
    width: 240px;
    height: 25px;
    border-radius: 25px;
    background: #eee;
    margin: 0 auto;
  }
  .g-progress {
    width: v-bind('progress');
    height: inherit;
    border-radius: 25px;
    background: linear-gradient(90deg, #5ddcff, #4e00c2);
    transition: 0.5s;
  }
  .box {
    height: 60vh;
    width: 80vw;
    background-image: linear-gradient(136deg, #5ddcff, #3c67e3 43%, #4e00c2);
    margin: 90px auto 20px;
    /* padding: 1px; */
    border-radius: 10px;
    padding: 5px;
  }
  .card {
    font-size: 18px;
    height: 60vh;
    border-radius: 10px;
    /* box-shadow: 0 3px 8px 6px rgb(7 17 27 / 15%); */
    background-color: #191c29;
    text-align: center;
    line-height: 40vh;
    color: #fff;
  }
</style>
