import Vue from 'vue'
import Router from 'vue-router'
import DayNightSleepComponent from '@/components/DayNightSleep'
import DayComponent from '@/components/DaySleep'
import TotalSleepDetail from '@/components/TotalSleepDetail'
import RadarComponent from "@/components/Radar";

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
