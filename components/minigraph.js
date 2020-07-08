import { AreaChart, LineChart } from "react-native-svg-charts";
import React from "react";
import { curveBasis } from "d3-shape";

export default function Minigraph({ data, color }) {
  const propData = {
    animated: { usenativedriver: true },
    style: { height: 50, width: "100%" },
    data,
    animate: true,
    animationDuration: 2000,
    curve: curveBasis,
    contentInset: { top: 5, bottom: 1, right: -1 },
  };
  return (
    <AreaChart {...propData} svg={{ fill: `${color}20` }}>
      <LineChart {...propData} svg={{ stroke: color }} />
    </AreaChart>
  );
}
