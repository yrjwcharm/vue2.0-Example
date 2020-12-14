<template>
  <div class="container">
    <!--    <Title :title="title" />-->
    <div style="  background-color: #fff; margin-top: 2px; padding-bottom: 18px;">
      <p style="text-align: center ;padding-top: 18px;">
        <span class="refer">参考值: {{refValue}}次</span>
      </p>
      <p style="text-align: center ; margin-top: 10px;">
        <span class="h">{{wakeTimes}}</span>
        <span class="time">次</span>
      </p>
      <p style="text-align: center; margin-top: 6px">
        <span class="regular">{{ sleepStatus==0?'偏低':sleepStatus==1?'正常':'偏高' }}</span>
      </p>
      <!--      <p class="header_bottom">-->
      <!--        <span style="color:#333; font-size: 16px; float:left">白天小睡</span>-->
      <!--        <span style="color:#333; font-size: 16px; float:right">12:00-13:00</span>-->
      <!--      </p>-->
    </div>
    <div style="margin-top: 2px;padding-right: 40px;padding-left: 40px; background-color: #fff ;padding-top: 20px;">
      <div>
        <p style="color: #333;font-size: 14px;">1.夜间觉醒</p>
        <p style=" margin-top: 12px; color:#999;text-align: justify;text-justify:inter-ideograph;font-size: 13px;line-height: 23px; ">
          夜间睡眠过程中觉醒的成因复杂，有很短暂的微觉醒，也有持续时间较长的觉醒。人并不一-定能意识到所有的觉醒，“似醒非醒”的状态可能与睡眠障碍、睡得太少或过多等多种因素有关。在正常情况下，夜间睡眠时觉醒次数少于2次，觉醒总时间不超过总睡眠时间的10%。如果夜间频繁觉醒，可能属于保持睡眠困难型的失眠者，这类人群的深睡眠比例通常明显低于正常人群，即使总睡眠时间不减少，睡醒后也会出现体力恢复不佳的情况。
        </p>
      </div>
      <div style="margin-top: 40px;">
        <p style="color: #333;font-size: 14px;">2.睡觉容易醒如何改善?</p>
        <p style="margin-top: 12px;color:#999 ;text-align: justify;text-justify:inter-ideograph; font-size: 13px;line-height: 23px;">
          如果夜间睡眠时经常觉醒，或者醒后难以入睡，并伴有疲乏、焦虑、易怒等症状，可参考如下睡眠改善建议，分析与寻找容易醒来的原因，及时做出针对性的调整。
          (1)养成规律的生活作息习惯，强化身体的昼夜节律。准时.上床睡觉，无论晚上有没有睡好，第二天都要按时起床。白天要接受充足的阳光照射，避免过长的日间小睡，切不可一疲倦就打盹。
          (2)睡前避免高强度脑力活动，不要在床.上看电视、玩手机，观看紧张的电视节目，不要把问题带上床思考。睡前精神要放松，情绪要安宁，不要思绪过多。
          (3)正确认知睡眠，不要过度放大或错误估计睡眠不佳的后果。如果夜间醒来，不要过度焦虑，不要频繁看时间，放松并相信自己- -定能再次睡着。(4)卧室内环境要舒适，温度适宜，避免噪音、亮光。
          (5)保持规律的中等强度运动(如快走、慢跑)，运动时体温.上升可促进夜晚的睡眠。不过,临睡前应避免剧烈运动，否则处于兴奋状态的肢体及高体温可能让您入睡困难。
        </p>
      </div>
      <div style="margin-top: 50px;">
        <p style="color:#333; text-align: center;font-size: 14px;">参考文献</p>
        <p style="margin-top: 18px; color:#999;font-size: 14px; line-height: 23px;">
          [1]EEG arousal norms by age. J Clin SleepMed, 2007,3:271-274.

          [2]Principles and Practice of Sleep

          Medicine, 6th Edition, Elsevier, Feb 2016.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Title from './Title'
import {getDayNightSleep} from "../service/api";
import {setLocal} from "../common/js/utils";
import {Toast} from 'vant';
export default {
  name: 'Sleep',
  components: {
    Title
  },
  data () {
    return {
      title: '清醒次数',
      refValue:'',
      sleepStatus:0,
      wakeTimes:'',

    }
  },
  created() {
    this.$nextTick( ()=>{
      const  {refValue,sleepStatus,wakeTimes} = this.$route.params;
      this.refValue =refValue;
      this.sleepStatus = sleepStatus;
      this.wakeTimes = wakeTimes;
    })
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  background-color: #f3f7f7;
}

.refer {
  font-size: 12px;
  color: #999999;
  letter-spacing: 0.12px;
}

.h {
  font-size: 35px;
  color: #333333;
  letter-spacing: 0.18px;
}

.time {
  font-size: 14px;
  color: #333333;
  margin-left: 2px;
  letter-spacing: 0.18px;
}

.regular {
  font-size: 12px;
  color: #00B88B;
  letter-spacing: 0.12px;
}

</style>
