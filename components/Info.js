import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CountUp } from "use-count-up";
import Minigraph from "./minigraph";
import { useApi } from "../hooks/useApi";

export default function Info({ title, color }) {
  const { result } = useApi();
  return (
    <>
      <Text
        style={{
          position: "relative",
          color: color,
          marginTop: 10,
        }}
      >
        <CountUp
          isCounting
          end={result ? result[0][title] : 0}
          duration={3}
          animated={{ usenativedriver: true }}
        />
      </Text>
      <Minigraph
        data={result ? result[1][title] : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
        color={color}
      />
    </>
  );
}