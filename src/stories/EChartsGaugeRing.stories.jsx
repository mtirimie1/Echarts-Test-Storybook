import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default {
  title: 'Charts/ECharts Gauge Ring',
  argTypes: {
    title: { control: 'text', defaultValue: 'Aggregate YTD Scores' },
    darkMode: { control: 'text', defaultValue: 'auto' },
    color: { control: 'object', defaultValue: ['#5540e1', '#ce7afd', '#82ecff', '#ffbf51', '#14868f', '#cc224b', '#121224', '#ece3fd'] },
    gradientColor: { control: 'object', defaultValue: ['#f6efa6', '#d88273', '#bf444c'] },
    aria: { control: 'object', defaultValue: {} },
    textStyle: { control: 'object', defaultValue: { fontFamily: 'sans-serif', fontSize: 12, fontStyle: 'normal', fontWeight: 'normal' } },
    animation: { control: 'text', defaultValue: 'auto' },
    animationDuration: { control: 'number', defaultValue: 1000 },
    animationDurationUpdate: { control: 'number', defaultValue: 500 },
    animationEasing: { control: 'text', defaultValue: 'cubicInOut' },
    animationEasingUpdate: { control: 'text', defaultValue: 'cubicInOut' },
    animationThreshold: { control: 'number', defaultValue: 2000 },
    progressiveThreshold: { control: 'number', defaultValue: 3000 },
    progressive: { control: 'number', defaultValue: 400 },
    hoverLayerThreshold: { control: 'number', defaultValue: 3000 },
    useUTC: { control: 'boolean', defaultValue: false },
    axisPointer: { control: 'object', defaultValue: {} },
    series: { control: 'object', defaultValue: [
      {
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        pointer: { show: false },
        progress: { show: true, overlap: false, roundCap: true, clip: false },
        axisLine: { lineStyle: { width: 40 } },
        splitLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
        data: [
          {
            value: 20,
            name: 'Overall Aggregate Score',
            title: { offsetCenter: ['0%', '-50%'] },
            detail: { valueAnimation: true, offsetCenter: ['0%', '-40%'] }
          },
          {
            value: 40,
            name: 'Staff Friendliness',
            title: { offsetCenter: ['0%', '-20%'] },
            detail: { valueAnimation: true, offsetCenter: ['0%', '-10%'] }
          },
          {
            value: 60,
            name: 'Store Cleanliness',
            title: { offsetCenter: ['0%', '10%'] },
            detail: { valueAnimation: true, offsetCenter: ['0%', '20%'] }
          },
          {
            value: 80,
            name: 'Product Variety',
            title: { offsetCenter: ['0%', '40%'] },
            detail: { valueAnimation: true, offsetCenter: ['0%', '50%'] }
          }
        ],
        title: { fontSize: 14 },
        detail: {
          width: 50,
          height: 14,
          fontSize: 14,
          color: 'inherit',
          borderColor: 'inherit',
          borderRadius: 20,
          borderWidth: 1,
          formatter: '{value}%'
        },
      }
    ] },
    width: { control: 'number', defaultValue: 600 },
    height: { control: 'number', defaultValue: 600 },
  },
};

const EChartsGaugeRing = ({ title, width = 600, height = 600, ...rest }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const option = {
      title: { text: title },
      series: rest.series,
      darkMode: rest.darkMode,
      color: rest.color,
      gradientColor: rest.gradientColor,
      aria: rest.aria,
      textStyle: rest.textStyle,
      animation: rest.animation,
      animationDuration: rest.animationDuration,
      animationDurationUpdate: rest.animationDurationUpdate,
      animationEasing: rest.animationEasing,
      animationEasingUpdate: rest.animationEasingUpdate,
      animationThreshold: rest.animationThreshold,
      progressiveThreshold: rest.progressiveThreshold,
      progressive: rest.progressive,
      hoverLayerThreshold: rest.hoverLayerThreshold,
      useUTC: rest.useUTC,
      axisPointer: rest.axisPointer,
    };
    const chart = echarts.init(chartRef.current);
    chart.setOption(option);
    return () => chart.dispose();
  }, [title, rest]);

  return <div ref={chartRef} style={{ width, height }} />;
};

export const Basic = EChartsGaugeRing.bind({});
Basic.args = {
  title: 'Aggregate YTD Scores',
  darkMode: 'auto',
  color: ['#5540e1', '#ce7afd', '#82ecff', '#ffbf51', '#14868f', '#cc224b', '#121224', '#ece3fd'],
  gradientColor: ['#f6efa6', '#d88273', '#bf444c'],
  aria: {},
  textStyle: { fontFamily: 'sans-serif', fontSize: 12, fontStyle: 'normal', fontWeight: 'normal' },
  animation: 'auto',
  animationDuration: 1000,
  animationDurationUpdate: 500,
  animationEasing: 'cubicInOut',
  animationEasingUpdate: 'cubicInOut',
  animationThreshold: 2000,
  progressiveThreshold: 3000,
  progressive: 400,
  hoverLayerThreshold: 3000,
  useUTC: false,
  axisPointer: {},
  series: [
    {
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      pointer: { show: false },
      progress: { show: true, overlap: false, roundCap: true, clip: false },
      axisLine: { lineStyle: { width: 40 } },
      splitLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
      data: [
        {
          value: 20,
          name: 'Overall Aggregate Score',
          title: { offsetCenter: ['0%', '-50%'] },
          detail: { valueAnimation: true, offsetCenter: ['0%', '-40%'] }
        },
        {
          value: 40,
          name: 'Staff Friendliness',
          title: { offsetCenter: ['0%', '-20%'] },
          detail: { valueAnimation: true, offsetCenter: ['0%', '-10%'] }
        },
        {
          value: 60,
          name: 'Store Cleanliness',
          title: { offsetCenter: ['0%', '10%'] },
          detail: { valueAnimation: true, offsetCenter: ['0%', '20%'] }
        },
        {
          value: 80,
          name: 'Product Variety',
          title: { offsetCenter: ['0%', '40%'] },
          detail: { valueAnimation: true, offsetCenter: ['0%', '50%'] }
        }
      ],
      title: { fontSize: 14 },
      detail: {
        width: 50,
        height: 14,
        fontSize: 14,
        color: 'inherit',
        borderColor: 'inherit',
        borderRadius: 20,
        borderWidth: 1,
        formatter: '{value}%'
      },
    }
  ],
  width: 600,
  height: 600,
}; 