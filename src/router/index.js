import Vue from 'vue'
import Router from 'vue-router'
import DayNightSleepComponent from '@/components/DayNightSleep'
import DayComponent from '@/components/DaySleep'
import TotalSleepDetail from '@/components/TotalSleepDetail'
import RadarComponent from "@/components/Radar";
import DeepSleep from '@/components/DeepSleep'
import ShallowSleep from '@/components/ShallowSleep'
import FastEyesRate from '@/components/FastEyesRate'
import DeepSleepContinuance from '@/components/DeepSleepContinuance'
import WakeTimes from '@/components/WakeTimes'
import BreathQuality from '@/components/BreathQuality'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/daySleep/:token/:dateTime',
      name: 'DaySleep',
      component: DayComponent
    },
    {
      path: '/daySleep/:token/:dateTime',
      name: 'DaySleep',
      component: DayComponent
    },
    {
      path: '/deepSleep/:refValue/:deepSleepDuration/sleepStatus',
      name: 'DeepSleep',
      component: DeepSleep
    },
    {
      path: '/shallowSleep/:refValue/:shallowSleepDuration/sleepStatus',
      name: 'ShallowSleep',
      component: ShallowSleep
    },
    {
      path: '/fastEyesRate/:refValue/:fastEyesRate/sleepStatus',
      name: 'FastEyesRate',
      component: FastEyesRate
    },
    {
      path:'/deepSleepContinuance/:refValue/:deepSleepContinuance/sleepStatus',
      name: 'DeepSleepContinuance',
      component: DeepSleepContinuance
    },
    {
      path:'/WakeTimes/:refValue/:wakeTimes/sleepStatus',
      name: 'WakeTimes',
      component: WakeTimes
    },{
      path:'/breathQuality/:refValue/:breathQuality/sleepStatus',
      name: 'BreathQuality',
      component: BreathQuality
    },
    {
      path: '/dayNight/:token/:dateTime',
      name: 'DayNight',
      component: DayNightSleepComponent
    },
  // const {totalSleepDurationScore, sleepTimeIndexScore,deepSleepIndexScore,sleepEfficiencyScore,wakesScore} =this .$route.params;

{
      path: '/sleepTotalDetail/:token/:sleepType/:dateTime',
      name: 'Total',
      component: TotalSleepDetail
    },
    {
      path: '/radar/:totalSleepDurationScore/:sleepTimeIndexScore/:deepSleepIndexScore/:sleepEfficiencyScore/:wakesScore',
      name: 'Radar',
      component: RadarComponent
    }

  ],
  // mode:'history'
})
