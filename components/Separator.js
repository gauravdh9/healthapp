import React from "react";
import { View } from "react-native";
import { Phone, Location } from "../utils/Svg";
import { heightToDp, widthToDp } from "../utils/Size";
import styled from "styled-components";

const Line = styled.View`
  height: 100%;
  width: ${heightToDp("0.3%")}px;
  background-color: ${({ theme }) => theme.Theme.covidscreen.vector};
`;
const Separate = styled.View`
  background-color: ${({ theme }) => theme.Theme.covidscreen.vector};
  height: ${heightToDp("0.5%")}px;
`;
const Separator = () => {
  return (
    <>
      <Separate />
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              backgroundColor: "#bbf1c8",
              paddingTop: heightToDp("0.3%"),
              paddingBottom: heightToDp("0.3%"),
            }}
          >
            <Phone height="30" width="30" />
          </View>

          <Line />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              backgroundColor: "#deecfc",
              paddingTop: heightToDp("0.5%"),
              paddingBottom: heightToDp("0.5%"),
            }}
          >
            <Location height="30" width="30" />
          </View>
        </View>
      </View>
    </>
  );
};

export default Separator;
