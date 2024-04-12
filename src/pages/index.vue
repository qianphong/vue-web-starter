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
    <div class="h-100 bg-blue-400 text-5xl font-bold flex-c space-x-2">
      <Motion
        v-for="(item, index) in 'Banner'.split('')"
        :key="index"
        :index="index"
      >
        {{ item }}
      </Motion>
    </div>
    <div class="wrapper">
      <div class="p-small sm:p-large">
        <div class="sm:flex gap-base space-y-base sm:space-y-0">
          <Motion>
            <el-button>Default</el-button>
          </Motion>
          <Motion :index="1">
            <el-button type="primary">Primary</el-button>
          </Motion>
          <Motion :index="2">
            <el-button type="success">Success</el-button>
          </Motion>
          <Motion :index="3">
            <el-button type="info">Info</el-button>
          </Motion>
          <Motion :index="4">
            <el-button type="warning">Warning</el-button>
          </Motion>
          <Motion :index="5">
            <el-button type="danger">Danger</el-button>
          </Motion>
        </div>
      </div>
      <div class="p-small lg:p-large text-3xl">
        <span class="i-mdi-android" />
        <span class="i-mdi-apple" />
        <span class="i-mdi-microsoft-windows" />
        <span class="i-mdi-language-typescript" />
      </div>
      <div class="h-100">
        <VChart :option="option" autoresize />
      </div>
      <div class="h-100 bg-indigo">
        <Motion tag="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          repudiandae temporibus eius, assumenda, adipisci sint eligendi
          obcaecati quidem numquam commodi debitis laboriosam, ipsam vero esse
          quod molestias possimus quasi ex quis mollitia! Deserunt illo
          laboriosam neque aliquam quod expedita dolorum commodi, eveniet quo
          explicabo veniam ipsam dignissimos quidem. Nihil, alias?
        </Motion>
      </div>
      <div class="bg-blue-100">
        <MotionGroup class="grid grid-cols-3 grid-rows-2 gap-base p-base">
          <div class="border h-50">1</div>
          <div class="border h-50">2</div>
          <div class="border h-50">3</div>
          <div class="border h-50">4</div>
          <div class="border h-50">5</div>
          <div class="border h-50">6</div>
        </MotionGroup>
      </div>

      <div class="p-base bg-orange-100">
        <MotionGroup
          tag="ul"
          once
          :initial="{ opacity: 0, x: 100 }"
          :visible="{ opacity: 1, x: 0 }"
        >
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quis!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            saepe!
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            nulla?
          </li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae provident non animi!
          </li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
            iusto quam.
          </li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente,
            deleniti corrupti?
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
            magnam.
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
            magnam.
          </li>
        </MotionGroup>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
name: Home
meta:
  title: 首页
</route>
