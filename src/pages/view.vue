<script lang="ts" setup>
import type { EChartsOption } from 'echarts'
import VChart from 'vue-echarts'

const option: EChartsOption = {
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
const option2: EChartsOption = {
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      areaStyle: {},
    },
  ],
}
</script>

<template>
  <div class="data-view">
    <div class="absolute left-5 top-5 z-10">
      <SettingsColorMode class="text-white" />
    </div>
    <div
      class="data-view-header flex items-center justify-center animate__animated animate__slideInDown animate__fast"
    >
      <div class="text-3xl font-bold text-white">数据可视化</div>
    </div>
    <div class="data-view-content grid grid-rows-2 grid-cols-3 gap-5 p-5">
      <div>
        <VChart :option="option" autoresize />
      </div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>
        <VChart :option="option2" autoresize />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$name: data-view;
.#{$name} {
  position: relative;
  height: 100%;
  width: 100%;
  --header-h: 80px;
  background: url(@/assets/images/view-bg.png) center center no-repeat;
  background-size: 100% 100%;
  .#{$name}-header {
    height: var(--header-h);
    background: url(@/assets/images/view-header.png) no-repeat;
  }
  .#{$name}-content {
    height: calc(100% - var(--header-h));
  }
}
</style>

<route lang="yaml">
name: View
meta:
  layout: screen
  title: 大屏
</route>
