import { AreaChart, LineChart } from "react-native-svg-charts";
import React from "react";
import * as shape from "d3-shape";

export default function Minigraph({ data, color }) {
  return (
    <AreaChart
      style={{ height: 50, width: "100%" }}
      data={data}
      svg={{ fill: `${color}20` }}
      animate={true}
      animationDuration={2000}
      curve={shape.curveBasis}
      contentInset={{ top: 5, bottom: 1, right: -1 }}
    >
      <LineChart
        style={{ height: 50, width: "100%" }}
        data={data}
        svg={{ stroke: color }}
        animate={true}
        animationDuration={2000}
        curve={shape.curveBasis}
        contentInset={{ top: 5, bottom: 1, right: -1 }}
      />
    </AreaChart>
  );
}
