<template>
  <div class="container">
<!--    <Title :title="title" />-->
    <div style="  background-color: #fff; margin-top: 2px; padding-bottom: 18px;">
      <p style="text-align: center ;padding-top: 18px;">
        <span class="refer">参考值：{{refValue}}小时</span>
      </p>
      <p style="text-align: center ; margin-top: 10px;">
        <span class="h">{{hour}}</span>
        <span class="time" style="margin-right: 5px">小时</span>
        <span class="h">{{minute}}</span>
        <span class="time" style="margin-right: 5px">分钟</span>
      </p>
      <p style="text-align: center; margin-top: 6px">
        <span class="regular">{{sleepStatus==0?'偏低':sleepStatus==1?'正常':'偏高' }}</span>
      </p>
      <!--      <p class="header_bottom">-->
      <!--        <span style="color:#333; font-size: 16px; float:left">白天小睡</span>-->
      <!--        <span style="color:#333; font-size: 16px; float:right">12:00-13:00</span>-->
      <!--      </p>-->
    </div>
    <div style="margin-top: 2px;padding-right: 20px;padding-left: 20px; background-color: #fff ;padding-top: 20px;">
      <div>
        <p style="color: #333;font-size: 14px;">1.夜间睡眠时长标准</p>
        <p style=" margin-top: 12px; color:#999;text-align: justify;text-justify:inter-ideograph;font-size: 13px;line-height: 23px; ">
          每天保证充足的睡眠对于维持身心健康非常有益，美国国家睡眠基金会建议成年人可能合适的睡眠时长为6-10小时。研究证实，人群中存在“习惯性长睡者”(z 10小时/天)和“习惯性短睡者”(s6小时/天) ,因此睡眠时间不是评价睡眠质量的唯-标准 。如果睡眠时间低于推荐标准，也不必过分担忧，只要睡醒后觉得神清气爽，就不算失眠。另外，延长睡眠时间并不-定能弥补睡眠不足，长时间赖在床上，反而不利于得到高质量的睡眠。
        </p>
      </div>
      <div style="margin-top: 40px;">
        <p style="color: #333;font-size: 14px;">2.睡眠结构</p>
        <p style="margin-top: 12px;color:#999 ;text-align: justify;text-justify:inter-ideograph; font-size: 13px;line-height: 23px;">
          睡眠划分为快速眼动(Rapid Eye Movement,REM)睡眠和非快速眼动(Non-REM, NREM) 睡眠，其中NREM睡眠又包括了浅睡眠和深睡眠。在睡眠过程中，REM睡眠与NREM睡眠交替出现，交替一次称为一个睡眠周期。正常人整晚的睡眠一般包含4-6个睡眠周期，一个周期约为90-100分钟，每一个周期都不是前-一个周期的简单重复。一般在靠后的睡眠周期中，REM睡眠时间增加，NREM睡眠时间减少。典型的睡眠节律是按照以下顺序进行状态转换:觉醒→浅睡→深睡→浅睡- +快速眼动。但是在实际睡眠过程中，不一定会经历所有的睡眠状态，睡眠状态之间的转换也不一定是完全规律的。 例如，人可以直接从浅睡。深睡和REM中的任何一个状态转为觉醒状态。
        </p>
      </div>
      <div style="margin-top: 50px;">
        <p style="color:#333; text-align: center;font-size: 14px;">参考文献</p>
        <p style="margin-top: 18px; color:#999;font-size: 14px; line-height: 23px;">
          [1]Prevalent Hypertension and Stroke in theSleep Heart Health Study: Associationwith an ECG-derived SpectrographicMarker of Cardiopulmonary Coupling.Sleep,2009, 32(7): 897-904.[2)Principles and Practice of SleepMedicine, 6th Edition, Elsevier, Feb 2016.
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
      title: '夜间睡眠',
       refValue:'',
       sleepStatus:0,
       sleepDuration:'',
       hour :0,
       minute:0,
    }
  },
  created() {
      const  {refValue,hour,minute,sleepStatus} = this.$route.params;
            this.refValue = refValue;
            this.sleepStatus = sleepStatus;
            this.hour = hour;
            this.minute = minute;

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
