<script lang="ts" setup>
import type { EChartsOption } from 'echarts'
import VChart from 'vue-echarts'
const option: EChartsOption = {
  grid: {
    left: '5%',
    right: '5%',
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true,
    },
  ],
}
</script>

<template>
  <div>
    <div class="p-10">
      <h3 class="mb-5">按钮</h3>
      <div class="flex space-x-5">
        <Motion :delay="50">
          <el-button>Default</el-button>
        </Motion>
        <Motion :delay="100">
          <el-button type="primary">Primary</el-button>
        </Motion>
        <Motion :delay="150">
          <el-button type="success">Success</el-button>
        </Motion>
        <Motion :delay="200">
          <el-button type="info">Info</el-button>
        </Motion>
        <Motion :delay="250">
          <el-button type="warning">Warning</el-button>
        </Motion>
        <Motion :delay="300">
          <el-button type="danger">Danger</el-button>
        </Motion>
      </div>
    </div>
    <div class="p-10">
      <h3 class="mb-5">使用图标</h3>
      <div class="text-3xl">
        <span class="i-mdi-android" />
        <span class="i-mdi-apple" />
        <span class="i-mdi-microsoft-windows" />
        <span class="i-mdi-language-typescript" />
      </div>
    </div>
    <div class="h-80 px-10">
      <VChart :option="option" autoresize />
    </div>
  </div>
</template>

<route lang="yaml">
name: Home
meta:
  title: 首页
</route>
