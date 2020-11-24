<template>
  <div class="container">
<!--    <Title :title="title"/>-->
    <div style="height: 2px;background-color: #eee"/>
    <div style="padding-left: 20px;padding-right: 20px">
      <p style="margin-top: 30px; font-size: 16px;color: #333;">
        睡眠雷达图可以综合分析您的睡眠状态
      </p>
      <p style="color:#666; line-height: 20px; font-size: 14px; margin-top: 10px; padding-right: 10px;">
        根据您完整的睡眠时间段，记录下不同周期里不同的睡眠状态，经过科学分析计算，将您的睡眠数据由五个维度的雷达图展示出来，可以清晰地对五个维度进行对比。
      </p>
      <div ref="chart" class="chart-wrap" :style="{width,height: 283+'px'}"></div>
      <p class="assess">睡眠五维雷达图可以清晰看出5项睡眠数据的各项评分，让您的睡眠数据更加具像化，了解您的睡眠优势。</p>
    </div>
  </div>
</template>

<script>
import Title from "./Title";
// Vue.prototype.$echarts = echarts
export default {
  name: "Radar",
  components: {Title},
  data() {
    return {
      title: '睡眠雷达',
      width: document.body.clientWidth,
      // 雷达图的数据
    }
  },
  created() {
    this.$nextTick(() => {
      this.initRadar();
    })
  },
  mounted() {
  },
  methods: {
    initRadar() {
      const {totalSleepDurationScore, sleepTimeIndexScore,deepSleepIndexScore,sleepEfficiencyScore,wakesScore} =this .$route.params;
      let charts = this.$echarts.init(document.querySelector('.chart-wrap'));
      let radarOption = {
        splitNumber: 4,
        radar: {
          // shape: 'circle',
          center: ['50%', '50%'],
          name: {
            textStyle: {
              // 文字样式
              color: '#333',
              fontSize: 12,
            },
          },
          startAngle: 270,
          indicator: [
            // 雷达图的指示器，用来指定雷达图中的多个变量（维度）
            {
              name: '睡眠总时长',
              max: 1
            },
            {
              name: '入睡用时',
              max: 1
            },
            {
              name: '高效睡眠',
              max: 1
            },
            {
              name: '睡眠效率',
              max: 1
            },
            {
              name: '清醒次数',
              max: 1
            },

          ],
          splitArea: {
            show: true,
            areaStyle: {
              color: ['#ccd4dc', '#dce0e6', '#e5e8ed', '#eef0f3', '#f6f7f9',]
            },
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },

          splitLine: {
            show: true,
            lineStyle: {
              width: 0,
              // color: 'transparent',
            },
          },
        },
        // 雷达图背景的颜色，在这儿随便设置了一个颜色，完全不透明度为0，就实现了透明背景
        series: [
          {
            name: '雷达图', // tooltip中的标题
            type: 'radar', // 表示是雷达图
            symbol: 'circle', // 拐点的样式，还可以取值'rect','angle'等
            symbolSize: 8, // 拐点的大小
            areaStyle: {
              normal: {
                width: 1,
              }
            },
            data: [
              {
                // 设置各个指标原始值
                value: [totalSleepDurationScore, sleepTimeIndexScore, deepSleepIndexScore, sleepEfficiencyScore, wakesScore],
                // 设置区域边框和区域的颜色
                itemStyle: {
                  normal: {
                    color: `rgba(0, 191, 142, 0.24)`,
                    lineStyle: {
                      color: '#00bf8e'
                    }
                  }
                }
              }
            ]
          }
        ]
      }
      charts.setOption(radarOption);
    },
  }
}
</script>

<style scoped>
.container {
  background-color: #fff;
}

.assess {
  margin-top: 38px;
  line-height: 18px;
  color: #666;
  font-size: 12px;
}

</style>
