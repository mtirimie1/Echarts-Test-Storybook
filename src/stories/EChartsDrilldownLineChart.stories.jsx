import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';

const PROGRAMS = ['Program A', 'Program B', 'Program C', 'Program D'];
const ATTRIBUTES = ['Cleanliness', 'Staff Friendliness', 'Organization', 'Prices'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

// Example data
const aggregateData = [
  { name: 'Program A', data: [90, 92, 91, 93, 94, 95, 96] },
  { name: 'Program B', data: [85, 87, 86, 88, 89, 90, 91] },
  { name: 'Program C', data: [80, 82, 81, 83, 84, 85, 86] },
  { name: 'Program D', data: [75, 77, 76, 78, 79, 80, 81] },
];
const attributeData = {
  'Program A': [
    { name: 'Cleanliness', data: [92, 93, 92, 94, 95, 96, 97] },
    { name: 'Staff Friendliness', data: [88, 89, 88, 90, 91, 92, 93] },
    { name: 'Organization', data: [91, 92, 91, 93, 94, 95, 96] },
    { name: 'Prices', data: [87, 88, 87, 89, 90, 91, 92] },
  ],
  'Program B': [
    { name: 'Cleanliness', data: [86, 87, 86, 88, 89, 90, 91] },
    { name: 'Staff Friendliness', data: [84, 85, 84, 86, 87, 88, 89] },
    { name: 'Organization', data: [85, 86, 85, 87, 88, 89, 90] },
    { name: 'Prices', data: [83, 84, 83, 85, 86, 87, 88] },
  ],
  'Program C': [
    { name: 'Cleanliness', data: [81, 82, 81, 83, 84, 85, 86] },
    { name: 'Staff Friendliness', data: [79, 80, 79, 81, 82, 83, 84] },
    { name: 'Organization', data: [80, 81, 80, 82, 83, 84, 85] },
    { name: 'Prices', data: [78, 79, 78, 80, 81, 82, 83] },
  ],
  'Program D': [
    { name: 'Cleanliness', data: [76, 77, 76, 78, 79, 80, 81] },
    { name: 'Staff Friendliness', data: [74, 75, 74, 76, 77, 78, 79] },
    { name: 'Organization', data: [75, 76, 75, 77, 78, 79, 80] },
    { name: 'Prices', data: [73, 74, 73, 75, 76, 77, 78] },
  ],
};

export default {
  title: 'Charts/ECharts Drilldown Line Chart',
  argTypes: {
    title: { control: 'object', defaultValue: { text: 'Aggregate Scores Over Time', top: 30 } },
    legend: { control: 'object', defaultValue: {
      show: true,
      type: 'plain',
      orient: 'horizontal',
      left: 'center',
      top: 60,
      textStyle: { color: '#333', fontSize: 12 },
    } },
    xAxis: { control: 'object', defaultValue: [{
      show: true,
      type: 'category',
      name: 'Month',
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
      boundaryGap: false,
      inverse: false,
      position: 'bottom',
      offset: 0,
      alignTicks: false,
      scale: false,
      z: 0,
      zlevel: 0,
      gridIndex: 0,
      data: MONTHS
    }] },
    yAxis: { control: 'object', defaultValue: [{
      show: true,
      type: 'value',
      name: 'Score',
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
  },
};

const EChartsDrilldownLineChart = ({ title, legend, xAxis, yAxis, grid, color, width = 900, height = 600 }) => {
  const chartRef = useRef(null);
  const [drilldown, setDrilldown] = useState(null); // null = top level, otherwise program name

  useEffect(() => {
    const chart = echarts.init(chartRef.current);
    let option;
    if (!drilldown) {
      // Top level: aggregate by program
      option = {
        title,
        legend: { ...legend, data: PROGRAMS },
        xAxis,
        yAxis,
        grid,
        color,
        series: aggregateData.map((prog, i) => ({
          name: prog.name,
          type: 'line',
          symbol: 'circle',
          symbolSize: 10,
          lineStyle: { width: 3 },
          data: prog.data
        })),
      };
      chart.off('click');
      chart.on('click', params => {
        if (params.seriesName && PROGRAMS.includes(params.seriesName)) {
          setDrilldown(params.seriesName);
        }
      });
    } else {
      // Drilldown: attributes for selected program
      option = {
        title: { ...title, text: `${drilldown} Attribute Scores` },
        legend: { ...legend, data: ATTRIBUTES },
        xAxis,
        yAxis,
        grid,
        color,
        series: attributeData[drilldown].map(attr => ({
          name: attr.name,
          type: 'line',
          symbol: 'circle',
          symbolSize: 10,
          lineStyle: { width: 3 },
          data: attr.data
        })),
        graphic: [{
          type: 'text',
          left: 20,
          top: 20,
          style: {
            text: '← Back',
            font: 'bold 16px sans-serif',
            fill: '#5540e1',
            cursor: 'pointer'
          },
          onclick: () => setDrilldown(null)
        }]
      };
      chart.off('click');
      chart.on('click', params => {
        // No further drilldown, but could add more here
      });
    }
    chart.setOption(option);
    return () => chart.dispose();
  }, [title, legend, xAxis, yAxis, grid, color, drilldown]);

  return <div ref={chartRef} style={{ width, height }} />;
};

export const Basic = EChartsDrilldownLineChart.bind({});
Basic.args = {
  title: { text: 'Aggregate Scores Over Time', top: 30 },
  legend: {
    show: true,
    type: 'plain',
    orient: 'horizontal',
    left: 'center',
    top: 60,
    textStyle: { color: '#333', fontSize: 12 },
  },
  xAxis: [{
    show: true,
    type: 'category',
    name: 'Month',
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
    boundaryGap: false,
    inverse: false,
    position: 'bottom',
    offset: 0,
    alignTicks: false,
    scale: false,
    z: 0,
    zlevel: 0,
    gridIndex: 0,
    data: MONTHS
  }],
  yAxis: [{
    show: true,
    type: 'value',
    name: 'Score',
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
}; 