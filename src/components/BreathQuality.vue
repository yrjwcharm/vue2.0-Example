<template>
  <div class="container">
    <!--    <Title :title="title" />-->
    <div style="  background-color: #fff; margin-top: 2px; padding-bottom: 18px;">
      <p style="text-align: center ;padding-top: 18px;">
        <span class="refer">参考值: {{refValue}}分</span>
      </p>
      <p style="text-align: center ; margin-top: 10px;">
        <span class="h">{{breathQuality}}</span>
        <span class="time">分</span>
      </p>
      <p style="text-align: center; margin-top: 6px">
        <span class="regular">{{ sleepStatus?'正常':'不正常' }}</span>
      </p>
      <!--      <p class="header_bottom">-->
      <!--        <span style="color:#333; font-size: 16px; float:left">白天小睡</span>-->
      <!--        <span style="color:#333; font-size: 16px; float:right">12:00-13:00</span>-->
      <!--      </p>-->
    </div>
    <div style="margin-top: 2px;padding-right: 40px;padding-left: 40px; background-color: #fff ;padding-top: 20px;">
      <div>
        <p style="color: #333;font-size: 14px;">1.睡眠与呼吸</p>
        <p style=" margin-top: 12px; color:#999;text-align: justify;text-justify:inter-ideograph;font-size: 13px;line-height: 23px; ">
          当人体过度疲劳或出现某些上气道病理情况( 如鼻塞、扁桃体肥大等)时，容易导致上气道狭窄，产生打呼、低通气、呼吸暂停等症状，影响睡眠呼吸质量。肥胖也会影响睡眠呼吸质量，颈部和腹部肥胖的影响程度通常更高。
          健康人在睡眠期间- -般都可以保持平稳的呼吸。每小时不平稳呼吸的次数小于10次，睡眠呼吸质量-般高于80分;每小时不平稳呼吸的次数大于30次，睡眠呼吸质量一般低于60分。
        </p>
      </div>
      <div style="margin-top: 40px;">
        <p style="color: #333;font-size: 14px;">2.如何改善睡眠呼吸质量?</p>
        <p style="margin-top: 12px;color:#999 ;text-align: justify;text-justify:inter-ideograph; font-size: 13px;line-height: 23px;">
          如果睡眠呼吸质量不佳的现象仅在疲劳或饮酒后出现，且打呼声较轻、较均匀，- -般无需特殊处理。如果睡眠呼吸质量不佳的现象频发，侧卧睡眠、禁烟限酒、增加运动可以帮助您改善睡眠呼吸质量,肥胖者同时还需要减轻体重。如果长期睡眠呼吸质量不佳，而且同时出现以下症状，建议到耳鼻喉科或呼吸科寻求专业人士的指导和建议。
          (1)夜间反复醒来，或夜尿增多;
          (2)睡眠不解乏，醒来时精神不振;
          (3)晨起口干，或者有泛酸、烧心等症状;
          (4)打呼声音响亮、不均匀，同床者发现呼吸暂停;
          (5)白天嗜睡，注意力下降。
        </p>
      </div>
      <div style="margin-top: 50px;">
        <p style="color:#333; text-align: center;font-size: 14px;">参考文献</p>
        <p style="margin-top: 18px; color:#999;font-size: 14px; line-height: 23px;">
          [1]Physical examination: Mallampatiscore as an independent predictor ofobstructive sleep apnea. Sleep, 2006,29:903-908.

          [2]An electrocardiogram-based analysisevaluating sleep quality in patients withobstructive sleep apnea.Sleep Breath,2013, 17(3): 1071-1078.        </p>
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
      title: '呼吸质量',
      refValue:'',
      sleepStatus:'',
      breathQuality:'',

    }
  },
  created() {
    this.$nextTick( ()=>{
      const  {refValue,sleepStatus,breathQuality} = this.$route.params;
      this.refValue =refValue;
      this.sleepStatus = sleepStatus;
      this.breathQuality = breathQuality;
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
