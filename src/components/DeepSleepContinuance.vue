<template>
  <div class="container">
    <!--    <Title :title="title" />-->
    <div style="  background-color: #fff; margin-top: 2px; padding-bottom: 18px;">
      <p style="text-align: center ;padding-top: 18px;">
        <span class="refer">参考值: {{refValue}}分</span>
      </p>
      <p style="text-align: center ; margin-top: 10px;">
        <span class="h">{{deepSleepContinuance}}</span>
        <span class="time">分</span>
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
        <p style="color: #333;font-size: 14px;">1.什么是深睡连续性?</p>
        <p style=" margin-top: 12px; color:#999;text-align: justify;text-justify:inter-ideograph;font-size: 13px;line-height: 23px; ">
          在深睡眠阶段，脑电波频率明显变慢，呼吸频率和血压也明显降低，因此深睡眠也称为慢波睡眠。深睡连续性反映深睡眠碎片化程度，深睡连续性越好，深睡片段平均时长越大。研究发现，深睡眠阶段，大脑可以得到充分休息，消除疲劳的效果最好，连续的深睡眠可让大脑休息更加有效。
        </p>
      </div>
      <div style="margin-top: 40px;">
        <p style="color: #333;font-size: 14px;">2.如何加强深睡连续性?</p>
        <p style="margin-top: 12px;color:#999 ;text-align: justify;text-justify:inter-ideograph; font-size: 13px;line-height: 23px;">
          根据美国医师协会(ACP)发布的成人慢性失眠障碍管理指南，推荐认知和行为治疗作为失眠的初始治疗。临床实践表明，慢性失眠者通常有一些不良睡眠习惯。如果您想提升睡眠质量，加强深睡连续性，可参考如下睡眠改善建议:
          (1)心理因素:过度兴奋、焦虑、精神紧张、抑郁等情绪都可能导致深睡连续性不佳，一般随着这些情绪反应的缓解，睡眠质量可以得到改善。
          (2)生理因素:过度疲劳、各种疾病引起的身体不适(如疼痛、瘙痒、咳嗽等)均可能导致深睡连续性不佳。
          (3)环境因素:光线、噪音、温湿度等因素都会干扰睡眠，保持安静、舒适、黑暗的卧室环境，选择适合自己的床品、枕头和床垫，有助于提升深睡连续性。
          (4)生活节律:倒班、时差、作息不规律等因素都会使体内的生物钟紊乱，影响深睡连续性。定时休息，准时上床睡觉，准时起床迎接阳光，让体内的生物钟适应昼夜节律，正常运转，可提高深睡连续性。
          (5)饮食:咖啡因、尼古丁、酒精和刺激性食物,都对深睡眠有干扰作用，导致深睡连续性不佳。食用富含镁的食物(绿色蔬菜、鳄梨、香蕉和坚果等)，可提高睡眠质量，提升深睡连续性。
          (6)运动:适当运动，使躯体疲劳感增加时，人体就需要增加深睡时间消除疲劳，从而提升深睡比例、提升深睡连续性。不过，临睡前应避免剧烈运动，否则处于兴奋状态的肢体及高体温可能让您入睡困难。
        </p>
      </div>
      <div style="margin-top: 50px;">
        <p style="color:#333; text-align: center;font-size: 14px;">参考文献</p>
        <p style="margin-top: 18px; color:#999;font-size: 14px; line-height: 23px;">
          [1 ]Management of Chronic InsomniaDisorder in Adults: A Clinical PracticeGuideline From the American College ofPhysicians. www.annals.org, May 2016.[2]Sleep state instabilities in

          major depressive disorder:

          Detection and quantification

          with electrocardiogram-based

          cardiopulmonary coupling analysis.

          Psychophysiology, 2011,48(2): 285-291.[3]《睡眠障碍诊疗手册》，人民卫生出版社，2012年9月第1版。

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
      title: '深睡连续性',
      refValue:'',
      sleepStatus:0,
      deepSleepContinuance:'',

    }
  },
  created() {
    this.$nextTick( ()=>{
      const  {refValue,sleepStatus,deepSleepContinuance} = this.$route.params;
      this.refValue =refValue;
      this.sleepStatus = sleepStatus;
      this.deepSleepContinuance = deepSleepContinuance;
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
