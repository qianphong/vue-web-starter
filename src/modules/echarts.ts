import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { GridComponent } from 'echarts/components'
import { LineChart } from 'echarts/charts'

use([CanvasRenderer, GridComponent, LineChart])

export const install: AppModule = () => {}
