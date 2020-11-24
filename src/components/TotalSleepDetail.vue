<template>
  <div class="container">
<!--    <Title :title="title"/>-->
    <div style="padding:20px" id="body">
      <p style="margin-bottom: 10px; font-size: 16px;color: #333">睡眠的关键是您的大脑休整</p>
      <p class="desc">在您从准备入睡到停止睡眠的整个过程中，大脑的神经信号数据能够精准地反应对应的睡眠状态，专业的睡眠机构和医学机构也在用脑电信号(脑电波)记录波的方式获取睡眠数据。</p>
      <div class="blockDiv" style="margin-top: 20px;">
        <div class="block">
          <span class="sleep_effect">睡眠效率</span>
          <p class="sleep_rate">
            <span  style="color: #333;font-size: 34px; ">{{ sleepEffect }}</span>
            <span style="font-size: 19px;color: #333;">%</span>
          </p>
          <ul  class="square" >
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="block">
          <span class="sleep_effect">深睡时长</span>
          <p class="sleep_rate">
            <span  style="color: #333;font-size: 34px; ">{{deepSleep}}</span>
            <span style="font-size: 19px;color: #333;">min</span>
          </p>
          <ul  class="square" >
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="block">
          <span class="sleep_effect">醒的次数</span>
          <p class="sleep_rate">
            <span  style="color: #333;font-size: 34px; ">{{wakeTimes}}</span>
<!--            <span style="font-size: 19px;color: #333;">%</span>-->
          </p>
          <ul  class="square" >
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="block">
          <span class="sleep_effect">入睡用时</span>
          <p class="sleep_rate">
            <span  style="color: #333;font-size: 34px; ">{{ fallSleep }}</span>
            <span style="font-size: 19px;color: #333;">min</span>
          </p>
          <ul  class="square" >
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="block">
          <span class="sleep_effect">睡眠感受</span>
          <p class="sleep_rate">
            <span  style="color: #333;font-size: 34px; ">{{ feel }}</span>
<!--            <span style="font-size: 19px;color: #333;">%</span>-->
          </p>
          <ul  class="_square"  >
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="block">
          <span class="sleep_effect">睡眠总时长</span>
          <p class="sleep_rate">
            <span  style="color: #333;font-size: 34px; ">5.6</span>
            <span style="font-size: 19px;color: #333;">hrs</span>
          </p>
          <ul  class="_square" >
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <p class="desc _sub">KANG2.0实时监测记录您的脑电信号，结合先进的人工智能算法进行睡眠分期计算，并且实现了睡眠数据的细粒度统计分析(统计 数据下方的能量点越多，对应指标数据越高)
      </p>
      <p class="desc" style="margin-top: 30px;">睡眠效率的百分比数值量化地展示了您的睡眠质量，数值越大，表示睡眠质量越高。
      </p>
      <p class="desc" style="margin-top: 30px;">
        深睡时长表示在整个睡眠过程中您的深睡眠总时长，良好的睡眠时长参考范围是您睡眠总时长的20%-60%，在参考范围内，深睡眠时间越长，睡眠质量就越好。
      </p>
      <p class="desc" style="margin-top: 30px;">
        睡眠过程中的清醒次数可以评估睡眠的连续性，一般来说夜间睡眠过程中清醒的成因复杂，会有短暂的微觉醒，也会有持续时间较长的觉醒。同时我们不一定能意识到所有的觉醒。正常情况下，夜间睡眠觉醒次数少于5次，觉醒总时长不超过总睡眠时长的10%。
      </p>
      <p class="desc" style="margin-top: 30px;">
        入睡用时入睡用时展示了从准备睡眠到进入睡眠状态的时间，医学上入睡的时间快慢没有统一的标准，有些人1-2分钟就可以入睡，有的人需要十几分钟才可以入睡;
      </p>
      <p class="desc" style="margin-top: 30px;">入睡用时只要不超过30分钟，都可视为正常范围。如果中途觉醒后能够在20分钟之内再次入睡(老年人可能需要30分钟)，则视为正常。
      </p>
      <p class="desc" style="margin-top: 30px;">睡眠感受是您当期主观的睡眠感受，用户可以根据个人真实的睡眠情况来选择对应的状态。共有5种睡眠感受:非常好、感觉不错、还行吧、糟糕、非常糟糕。
      </p>
      <p class="desc" style="margin-top: 30px;">
        睡眠总时长是您的整体眠用时。每天保证充足的睡眠对于维持身心健康非常重要，美国国家睡眠基金会建议成年人应该保持6-10小时的睡眠时间。我们给出了建议平均8小时的睡眠时长，希望可以给你带来有效的睡眠参考。
      </p>
      <p class="desc" style="margin-top: 30px;">
        参考信息来源:<br/>
        [1]哈佛大学医学院睡眠诊疗中心<br/>
        [2]斯坦福睡眠医学中心<br/>
        [3]美国睡眠学会</p>
    </div>
  </div>
</template>

<script>
import Title from "./Title";
import {Toast} from 'vant';
import {getSleepTotalDetail} from "../service/api";
import {setLocal} from "../common/js/utils";
export default {
  name: "Total",
  components: {Title},
  data() {
    return {
      title: '睡眠总时长',
      dateTime:'',
      sleepType:0,
      deepSleep:'',
      fallSleep:'',
      fallSleepTotalDuration:'',
      wakeTimes:'',
      feel:'非常好',
      sleepEffect:'',


    }
  },
  created() {
    this.$nextTick(()=>{
      const  {token,sleepType,dateTime} = this.$route.params;
      setLocal('token',token?token:'');
      this.initData({sleepType,dateTime});
    })
  },
  methods:{
    async initData(params){
      const res = await  getSleepTotalDetail(params)
      if(res.code===200){
        const {deepsleep,fallsleep,sleepefficiency,fallsleepduration,wakes,feel} = res. data;
        this.deepSleep = deepsleep;
        this.fallSleep = fallsleep;
        this.fallSleepTotalDuration = fallsleepduration;
        this.wakeTimes = wakes;
        this.feel = feel;
        this.sleepEffect = sleepefficiency;
      }
      console.log(333,res);
    }
  }
}
</script>

<style scoped>
.container {
  background-color: #F6F7FA;
}

._sub {
  margin-top: 19px;
}

.desc {
  font-size: 14px;
  color: #333;
  text-justify: inter-ideograph;
  text-align: justify;
  line-height: 20px;
}

.blockDiv {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.block {
  width: calc(calc(100% / 2) - 5.5px);
  margin-right: 11px;
  margin-bottom: 11px;
  height: 153px;
  background: #FFFFFF;
  box-shadow: 0 6px 10px 5px rgba(0, 0, 0, 0.02);
  border-radius: 10px;
}

.blockDiv > div:nth-child(2n) {
  margin-right: 0;
}

.square {
  display: table;
  clear: both;
  content: '';
  margin:  0 auto;
}
._square {
  display: table;
  clear: both;
  content: '';
  margin:  0 auto;
}
._square > li {
  float: left;
  border-radius: 100%;
  width: 5px;
  height: 5px;
  margin-right: 5px;
  background: #F09910;
}

.square > li {
  float: left;
  border-radius: 100%;
  width: 5px;
  height: 5px;
  margin-right: 5px;
}
._square>li:last-child{
  background-color: #000000;
  opacity: 0.2;
  margin-right: 0;
}
.square > li:not(:first-child) {
  background-color: #000000;
  opacity: 0.2;

}

.square > li:nth-child(1) {
  background: #FE017B;
}

.square > li:last-child {
  margin-right: 0;
}

/*@font-face {*/
/*  font-family: pingfang-regular;*/
/*  src: url("../assets/fonts/pingfang_regular.otf");*/
/*}*/

/*@font-face {*/
/*  font-family: pingfang-blod;*/
/*  src: url('../assets/fonts/PingFang-Bold.ttf');*/
/*}*/
/*@font-face {*/
/*  font-family:pingfang-medium ;*/
/*  src: url("../assets/fonts/PingFang-Medium.ttf");*/
/*}*/
.sleep_effect {
  color: #333;
  display: block;
  font-size: 19px;
  text-align: center;
  opacity: 0.54;
  margin-top: 37px;
}
.square{
  margin-top: 18px;
}
._square{
  margin-top: 18px;
}
.sleep_rate{
  text-align: center;
  margin-top: 20px;
}
</style>
