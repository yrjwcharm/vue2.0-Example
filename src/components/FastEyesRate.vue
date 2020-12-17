<template>
  <div class="container">
    <!--    <Title :title="title" />-->
    <div style="  background-color: #fff; margin-top: 2px; padding-bottom: 18px;">
      <p style="text-align: center ;padding-top: 18px;">
        <span class="refer">参考值: {{refValue}}%</span>
      </p>
      <p style="text-align: center ; margin-top: 10px;">
        <span class="h">{{fastEyesRate}}</span>
      </p>
      <p style="text-align: center; margin-top: 6px">
        <span class="regular">{{ sleepStatus==0?'偏低':sleepStatus==1?'正常':'偏高' }}</span>
      </p>
      <!--      <p class="header_bottom">-->
      <!--        <span style="color:#333; font-size: 16px; float:left">白天小睡</span>-->
      <!--        <span style="color:#333; font-size: 16px; float:right">12:00-13:00</span>-->
      <!--      </p>-->
    </div>
    <div style="margin-top: 2px;padding-right: 20px;padding-left: 20px; background-color: #fff ;padding-top: 20px;">
      <div>
        <p style="color: #333;font-size: 14px;">1.什么是快速眼动睡眠?</p>
        <p style=" margin-top: 12px; color:#999;text-align: justify;text-justify:inter-ideograph;font-size: 13px;line-height: 23px; ">
          在快速眼动( Rapid Eye Movement, REM)睡眠阶段，人的眼球在眼皮下快速地来回移动，在该阶段被唤醒者绝大多数报告正在做梦。快速眼动睡眠的唤醒阈高于浅睡眠，低于深睡眠，在这个阶段肌肉一般处于瘫痪状态。这是-种安全保护机制，避免我们在梦中做出动作，这也解释了为什么经常梦到跑不起来或叫不出来。
        </p>
      </div>
      <div style="margin-top: 40px;">
        <p style="color: #333;font-size: 14px;">2.如何拥有正常的快速眼动睡眠?</p>
        <p style="margin-top: 12px;color:#999 ;text-align: justify;text-justify:inter-ideograph; font-size: 13px;line-height: 23px;">
          维持正常的快速眼动睡眠时间对于精神健康非常重要，有助于提升创造力、舒缓压力。研究表明，剥夺了受试者的快速眼动睡眠后，受试者会烦躁、紧张和容易疲惫。睡梦主要发生在快速眼动睡眠阶段，快速眼动睡眠比例偏高可能表现为多梦。许多人把多梦误认为是睡眠质量不好的原因，实际上是因为睡的不深，导致醒来容易记住梦境。
          当快速眼动睡眠不足时，我们的身体会自动通过延长之后几个晚上的快速眼动睡眠时间来弥补，无需过度担心。如果长期快速眼动比例过高或过低，并伴有易怒、焦虑等症状，建议寻求专业医生的指当快速眼动睡眠个足时，找们的身体会曰动通过延长之后几个晚上的快速眼动睡眠时间来弥补，无需过度担心。如果长期快速眼动比例过高或过低，并伴有易怒、焦虑等症状，建议寻求专业医生的指导。
          如果您想拥有正常的快速眼动睡眠，可参考如下睡眠改善建议:
          (1)生活规律: -般来说，越到后半夜的睡眠周期中，快速眼动睡眠时间越长，如果您觉得自己多梦，建议您调整作息时间，早睡早起。
          (2)心理因素:避免过度焦虑和疲劳，及时舒缓工作生活中的压力，有助于维持正常的快速眼动睡眠时间比例。
          (3)饮食:咖啡因、酒精、尼古丁或药物可能对快速眼动睡眠产生影响，导致快速眼动睡眠比例偏低。
        </p>
      </div>
      <div style="margin-top: 50px;">
        <p style="color:#333; text-align: center;font-size: 14px;">参考文献</p>
        <p style="margin-top: 18px; color:#999;font-size: 14px; line-height: 23px;">
          [1]Management of Chronic InsomniaDisorder in Adults: A Clinical PracticeGuideline From the American College ofPhysicians. www.annals.org, May 2016.[2]Sleep state instabilities in

          major depressive disorder:

          Detection and quantification

          with electrocardiogram-based

          cardiopulmonary coupling analysis.

          Psychophysiology, 2011,48(2): 285-291.社，2012年9月第1版。

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
      title: '快速眼动比例',
      refValue:'',
      sleepStatus:0,
      fastEyesRate:'',

    }
  },
  created() {
    this.$nextTick( ()=>{
      const  {refValue,sleepStatus,fastEyesRate} = this.$route.params;
      this.refValue = decodeURI(refValue);
      this.sleepStatus = sleepStatus;
      this.fastEyesRate = fastEyesRate;
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
