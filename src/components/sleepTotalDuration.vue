<template>
  <div class="container">
<!--    <Title :title="title"/>-->
    <div style="  background-color: #fff; margin-top: 2px; padding-bottom: 21px">
      <p style="text-align: center ;padding-top: 18px;">
        <span class="refer">参考值:{{refValue}}分钟</span>
      </p>
      <p style="text-align: center ; margin-top: 10px;">
        <span class="h">{{hour}}</span>
        <span class="time" style="margin-right: 5px">小时</span>
        <span class="h">{{minutes}}</span>
        <span class="time" style="margin-right: 5px">分钟</span>
      </p>
      <p style="text-align: center; margin-top: 6px">
        <span class="regular">{{sleepStatus==1?'正常':'偏高'}}</span>
      </p>
    </div>
    <div class="desc">
      <div>
        <p style="color: #333;font-size: 14px;">1.零星小睡时长标准</p>
        <p
          style=" margin-top: 12px; color:#999;text-align: justify;text-justify:inter-ideograph;font-size: 13px;line-height: 23px; ">
          夜间睡眠时间不足或睡眠质量不高，可以在日间通过适当的小睡来补充精力。一般来说，在中午1点之前小座15-30分钟，可以让您重新精力充沛，提升下午的清醒程度和工作效率。
          但是，日间小睡时间不宜超过45分钟，否则可能让您进入深睡阶段，体温下降，醒来后感觉非常困倦、或出现头晕。恶心等不良症状。同时，如果白天进入了深睡，会降低夜晚的睡意，导致夜间难以入所。

        </p>
      </div>
      <div style="margin-top: 40px;">
        <p style="color: #333;font-size: 14px;">2.什么时段适合日间小睡?</p>
        <p
          style="margin-top: 12px;color:#999 ;text-align: justify;text-justify:inter-ideograph; font-size: 13px;line-height: 23px;">
          生物钟里最重要的部分就是体温节律，当体温升高时，人会感觉更清醒;当体温下降时，人会感觉到身体疲乏，睡意来袭。体温在-天之中星现周期性的波动，在早晨开始上升，午间有时会进行下调，然后继续上升，直到夜晚来临。因此，在中午体温回落时(一般在中午1点之前)小睡，效果是最好的。日间小睡时间过晚，会对体温节律产生干扰，影响夜间睡眠质量。
          *未超过3小时的单次睡眠均统计在零星小睡中。
        </p>
      </div>
      <div style="margin-top: 50px;">
        <p style="color:#333; text-align: center;font-size: 14px;">参考文献</p>
        <p style="margin-top: 18px; color:#999;font-size: 14px; line-height: 23px;">
          [1]The circadian rhythm of body
          temperature. Frontiers in Bioscience,2010(15):564-594.
          [2]《睡眠障碍诊疗手册》，人民卫生出版社，2012年9月第1版。
          </p>
      </div>
    </div>
  </div>
</template>

<script>
import Title from './Title'
import {getDaySleep} from "../service/api";
import {setLocal} from "../common/js/utils";
import {Toast} from 'vant'
export default {
  name: 'Sleep',
  components: {
    Title
  },
  data() {
    return {
      title: '白天小睡',
      sleepStatus:0,
      refValue:'',
      hour:0,
      minutes:0,

    }
  } ,
   created() {
    this.$nextTick( ()=>{
      const  {refValue,hour,minutes,sleepStatus} = this.$route.params;
      this.refValue = refValue;
      this.hour= hour;
      this.minutes = minutes;
      this.sleepStatus = sleepStatus;
    })
  },
  methods:{
  },
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
  letter-spacing: .18px;
}

.regular {
  font-size: 12px;
  color: #00B88B;
  letter-spacing: .12px;
}

.clear {
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 21px;
  /*background-color: red;*/
}

.desc {
  margin-top: 10px;
  padding-right: 20px;
  padding-left: 20px;
  background-color: #fff;
  padding-top: 20px;
}

</style>
