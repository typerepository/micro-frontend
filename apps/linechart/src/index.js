import * as echarts from "echarts";

// Initialize the echarts instance based on the prepared dom
let myChart = echarts.init(document.getElementById('line-chart-dev'));

myChart.setOption({
  xAxis: {
    type: 'category',
    data: ['A', 'B', 'C']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150],
      type: 'line'
    }
  ]
});