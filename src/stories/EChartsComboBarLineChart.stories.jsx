import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default {
  title: 'Charts/ECharts Combo Bar & Line Chart',
  argTypes: {
    title: { control: 'object', defaultValue: { text: 'Combo Bar & Line Chart', top: 30 } },
    legend: { control: 'object', defaultValue: {
      show: true,
      type: 'plain',
      orient: 'horizontal',
      left: 'center',
      right: 'auto',
      top: 60,
      bottom: 'auto',
      align: 'auto',
      padding: 5,
      itemGap: 10,
      itemWidth: 25,
      itemHeight: 14,
      textStyle: {
        color: '#333',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: 'sans-serif',
        fontSize: 12
      },
      backgroundColor: 'transparent',
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 0,
      pageButtonItemGap: 5,
      pageButtonGap: 5,
      pageButtonPosition: 'end',
      pageFormatter: '{current}/{total}',
      selector: false,
      selectorLabel: {
        show: true,
        distance: 5,
        fontSize: 12
      },
      selectorPosition: 'auto',
      selectorItemGap: 7,
      selectorButtonGap: 10,
      z: 2,
      zlevel: 0
    } },
    xAxis: { control: 'object', defaultValue: [{
      show: true,
      type: 'category',
      name: 'Time',
      nameLocation: 'middle',
      nameTextStyle: { fontWeight: 'bold', fontSize: 14 },
      nameGap: 30,
      nameRotate: 0,
      axisLine: { show: true, lineStyle: { color: '#333' } },
      axisTick: { show: true },
      axisLabel: { show: true, fontSize: 12 },
      splitLine: { show: false },
      splitArea: { show: false },
      min: null,
      max: null,
      interval: 1,
      boundaryGap: true,
      inverse: false,
      position: 'bottom',
      offset: 0,
      alignTicks: false,
      scale: false,
      z: 0,
      zlevel: 0,
      gridIndex: 0,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }] },
    yAxis: { control: 'object', defaultValue: [{
      show: true,
      type: 'value',
      name: 'Value',
      nameLocation: 'middle',
      nameTextStyle: { fontWeight: 'bold', fontSize: 14 },
      nameGap: 40,
      nameRotate: 90,
      axisLine: { show: true, lineStyle: { color: '#333' } },
      axisTick: { show: true },
      axisLabel: { show: true, fontSize: 12 },
      splitLine: { show: true, lineStyle: { type: 'dashed' } },
      splitArea: { show: false },
      min: null,
      max: null,
      interval: null,
      boundaryGap: [0, 0],
      inverse: false,
      position: 'left',
      offset: 0,
      alignTicks: false,
      scale: false,
      z: 0,
      zlevel: 0,
      gridIndex: 0
    }] },
    grid: { control: 'object', defaultValue: [{ left: 60, right: 60, top: 100, bottom: 60 }] },
    color: { control: 'object', defaultValue: [
      '#5540e1',
      '#ce7afd',
      '#82ecff',
      '#ffbf51',
      '#14868f',
      '#cc224b',
      '#121224',
      '#ece3fd'
    ] },
    width: { control: 'number', defaultValue: 900 },
    height: { control: 'number', defaultValue: 600 },
    series: { control: 'object', defaultValue: [
      {
        name: 'Bar Series',
        type: 'bar',
        data: [120, 200, 150, 80, 70, 110, 130],
        barWidth: '60%',
        itemStyle: { borderRadius: [4, 4, 0, 0] }
      },
      {
        name: 'Line Series',
        type: 'line',
        data: [100, 180, 120, 60, 90, 140, 120],
        symbol: 'circle',
        symbolSize: 10,
        lineStyle: { width: 3 }
      }
    ] },
  },
};

const EChartsComboBarLineChart = ({ title, legend, xAxis, yAxis, grid, color, width = 900, height = 600, series }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const option = {
      title,
      legend,
      xAxis,
      yAxis,
      grid,
      color,
      series,
    };
    const chart = echarts.init(chartRef.current);
    chart.setOption(option);
    return () => chart.dispose();
  }, [title, legend, xAxis, yAxis, grid, color, series]);

  return <div ref={chartRef} style={{ width, height }} />;
};

export const Basic = EChartsComboBarLineChart.bind({});
Basic.args = {
  title: { text: 'Combo Bar & Line Chart', top: 30 },
  legend: {
    show: true,
    type: 'plain',
    orient: 'horizontal',
    left: 'center',
    right: 'auto',
    top: 60,
    bottom: 'auto',
    align: 'auto',
    padding: 5,
    itemGap: 10,
    itemWidth: 25,
    itemHeight: 14,
    textStyle: {
      color: '#333',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontFamily: 'sans-serif',
      fontSize: 12
    },
    backgroundColor: 'transparent',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 0,
    pageButtonItemGap: 5,
    pageButtonGap: 5,
    pageButtonPosition: 'end',
    pageFormatter: '{current}/{total}',
    selector: false,
    selectorLabel: {
      show: true,
      distance: 5,
      fontSize: 12
    },
    selectorPosition: 'auto',
    selectorItemGap: 7,
    selectorButtonGap: 10,
    z: 2,
    zlevel: 0
  },
  xAxis: [{
    show: true,
    type: 'category',
    name: 'Time',
    nameLocation: 'middle',
    nameTextStyle: { fontWeight: 'bold', fontSize: 14 },
    nameGap: 30,
    nameRotate: 0,
    axisLine: { show: true, lineStyle: { color: '#333' } },
    axisTick: { show: true },
    axisLabel: { show: true, fontSize: 12 },
    splitLine: { show: false },
    splitArea: { show: false },
    min: null,
    max: null,
    interval: 1,
    boundaryGap: true,
    inverse: false,
    position: 'bottom',
    offset: 0,
    alignTicks: false,
    scale: false,
    z: 0,
    zlevel: 0,
    gridIndex: 0,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  }],
  yAxis: [{
    show: true,
    type: 'value',
    name: 'Value',
    nameLocation: 'middle',
    nameTextStyle: { fontWeight: 'bold', fontSize: 14 },
    nameGap: 40,
    nameRotate: 90,
    axisLine: { show: true, lineStyle: { color: '#333' } },
    axisTick: { show: true },
    axisLabel: { show: true, fontSize: 12 },
    splitLine: { show: true, lineStyle: { type: 'dashed' } },
    splitArea: { show: false },
    min: null,
    max: null,
    interval: null,
    boundaryGap: [0, 0],
    inverse: false,
    position: 'left',
    offset: 0,
    alignTicks: false,
    scale: false,
    z: 0,
    zlevel: 0,
    gridIndex: 0
  }],
  grid: [{ left: 60, right: 60, top: 100, bottom: 60 }],
  color: [
    '#5540e1',
    '#ce7afd',
    '#82ecff',
    '#ffbf51',
    '#14868f',
    '#cc224b',
    '#121224',
    '#ece3fd'
  ],
  width: 900,
  height: 600,
  series: [
    {
      name: 'Bar Series',
      type: 'bar',
      data: [120, 200, 150, 80, 70, 110, 130],
      barWidth: '60%',
      itemStyle: { borderRadius: [4, 4, 0, 0] }
    },
    {
      name: 'Line Series',
      type: 'line',
      data: [100, 180, 120, 60, 90, 140, 120],
      symbol: 'circle',
      symbolSize: 10,
      lineStyle: { width: 3 }
    }
  ]
}; 