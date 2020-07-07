import React from "react";
import { SlideAreaChart } from "react-native-slide-charts";
import * as shape from "d3-shape";

export default function Graph({ data, color }) {
  return (
    <SlideAreaChart
      data={data}
      alwaysShowIndicator={false}
      cursorProps={{ displayCursor: false }}
      curveType={shape.CurveFactory}
      height={50}
      width={100}
      fillColor={`${color}20`}
      style={{ backgroundColor: `${color}00` }}
      animated={true}
      chartLineWidth={1}
      chartLineColor={color}
      yAxisProps={{ verticalLineWidth: false, showBaseLine: false }}
    />
  );
}
