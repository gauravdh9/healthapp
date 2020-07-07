import { AreaChart, Path } from "react-native-svg-charts";
import React from "react";
import * as shape from "d3-shape";

export default function Minigraph({ data, color }) {
  const Line = ({ line }) => <Path d={line} stroke={color} fill={"none"} />;

  return (
    <AreaChart
      style={{ height: 50 }}
      data={Array.from(data, (item) => {
        return item.y;
      })}
      svg={{ fill: `${color}20` }}
      animate={true}
      animationDuration={2000}
      curve={shape.curveLinear}
      contentInset={{ top: 5, bottom: 1, right: -1 }}
    >
      <Line />
    </AreaChart>
  );
}
