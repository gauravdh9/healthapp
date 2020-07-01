<<<<<<< HEAD
import { LineChart, Grid } from "react-native-svg-charts";
import React, { useState } from "react";
import * as shape from "d3-shape";
import { useApi } from "../hooks/useApi";

export default function Minigraph({ type, color }) {
  const { dailylist } = useApi();
  const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);

  return (
    <LineChart
      style={{ height: 70 }}
      data={every_nth(dailylist[type], 3)}
      svg={{ stroke: color }}
      animate={true}
      animationDuration={2000}
      curve={shape.curveNatural}
      contentInset={{ top: 20, bottom: 20 }}
    ></LineChart>
  );
}
=======
import { LineChart, Grid } from "react-native-svg-charts";
import React, { useState } from "react";
import * as shape from "d3-shape";
import { useApi } from "../hooks/useApi";

export default function Minigraph({ type, color }) {
  const { dailylist } = useApi();
  const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);

  return (
    <LineChart
      style={{ height: 70 }}
      data={every_nth(dailylist[type], 3)}
      svg={{ stroke: color }}
      animate={true}
      animationDuration={2000}
      curve={shape.curveNatural}
      contentInset={{ top: 20, bottom: 20 }}
    ></LineChart>
  );
}
>>>>>>> 5b65431300c5dbb1edf670d0c25c44de33a1d454
