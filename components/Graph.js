import React from "react";
import {
  SlideAreaChart,
  YAxisProps,
  XAxisProps,
} from "react-native-slide-charts";
import * as shape from "d3-shape";
import { View, Text } from "react-native";
import { useApi } from "../hooks/useApi";
import styled from "styled-components";

export default function Graph({ data, color }) {
  const li = [];
  data
    .filter((e, i) => i % 5 === 5 - 1)
    .map((item, index) => {
      li.push({ x: index, y: item });
    });
  return (
    <SlideAreaChart
      data={li}
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
