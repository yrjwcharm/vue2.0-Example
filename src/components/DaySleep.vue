<template>
  <div class="container">
<!--    <Title :title="title"/>-->
    <div style="  background-color: #fff; margin-top: 2px; padding-bottom: 21px">
      <p style="text-align: center ;padding-top: 18px;">
        <span class="refer">参考值：0-45分钟</span>
      </p>
      <p style="text-align: center ; margin-top: 10px;">
        <span class="h">{{hour}}</span>
        <span class="time" style="margin-right: 5px">小时</span>
        <span class="h">{{minutes}}</span>
        <span class="time">分</span>
      </p>
      <p style="text-align: center; margin-top: 6px">
        <span class="regular">{{sleepStatus}}</span>
      </p>
      <p class="clearfix clear">
        <span style="color:#333; font-size: 16px; float:left">白天小睡</span>
        <span style="color:#333; font-size: 16px; float:right">{{startTime}}-{{endTime}}</span>
      </p>
    </div>
    <div class="desc">
      <div>
        <p style="color: #333;font-size: 14px;">1.{{listObj&&listObj.resHeadline}}</p>
        <p
          style=" margin-top: 12px; color:#999;text-align: justify;text-justify:inter-ideograph;font-size: 13px;line-height: 23px; ">
          {{listObj&&listObj.resContent}}</p>
      </div>
      <div style="margin-top: 40px;">
        <p style="color: #333;font-size: 14px;">2.{{structureObj&& structureObj.resHeadline}}</p>
        <p
          style="margin-top: 12px;color:#999 ;text-align: justify;text-justify:inter-ideograph; font-size: 13px;line-height: 23px;">
          {{structureObj&&structureObj.resContent}}
        </p>
      </div>
      <div style="margin-top: 50px;">
        <p style="color:#333; text-align: center;font-size: 14px;">{{referenceObj&& referenceObj.resHeadline}}</p>
        <p style="margin-top: 18px; color:#999;font-size: 14px; line-height: 23px;">
          {{referenceObj&&referenceObj.resContent}}
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
      listObj:{},
      structureObj:{},
      referenceObj:{},
      dateTime:'',
      hour:0,
      minutes:0,
      startTime:'',
      endTime:'',
      sleepStatus:'',

    }
  } ,
   created() {
    this.$nextTick( ()=>{
      const  {token,dateTime} = this.$route.params;
      setLocal('token',token?token:'');
        this.initData(dateTime);
    })
  },
  methods:{
    async initData(dateTime){
      const res = await getDaySleep({
        type:1,
        dateTime,
      });
      if(res.code === 200){
        const {fallSleepDuration,startTime,endTime} = res.data;
        fallSleepDuration>45?this.sleepStatus='不正常':this.sleepStatus='正常'
        let hour =fallSleepDuration&& Math.floor(fallSleepDuration/60) ||0;
        let minutes = fallSleepDuration&&fallSleepDuration%60 ||0;
        const data = res.data&&res.data.list||[];
        this.listObj = data[0];
        this.structureObj= data[1];
        this.referenceObj = data[2];
        this.hour = hour;
        this.minutes = minutes;
        this.startTime= startTime;
        this.endTime = endTime;
      }
    },
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
  padding-right: 40px;
  padding-left: 40px;
  background-color: #fff;
  padding-top: 20px;
}

</style>
