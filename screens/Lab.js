import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import Screen from "../utils/Screen";
import { useApi } from "../hooks/useApi";
import styled from "styled-components";
import { heightToDp, widthToDp } from "../utils/Size";
import TestingLab from "../components/TestingLab";
import { Skeleton } from "../components/Tabstack";
import Input from "../components/Input";
import { change } from "./CovidHospital";
import { Address, Filter, FilterLight } from "../utils/Svg";
import * as Location from "expo-location";
import Getdistance from "../components/Distance";
import * as IntentLauncherAndroid from "expo-intent-launcher";
import { useTheme } from "styled-components";

import RNAndroidLocationEnabler from "react-native-android-location-enabler";

const Container = styled(Screen)`
  background-color: ${({ theme }) => theme.Theme.covidscreen.vector};
`;
const FlatView = styled.View`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.Theme.covidscreen.info};
  border-top-right-radius: ${heightToDp("3%")}px;
  border-top-left-radius: ${heightToDp("3%")}px;
`;

const Lab = ({ Test, title }) => {
  const { Theme } = useTheme();
  const {
    TestingData,
    lab,
    hospitaldata,
    hospital,
    setHospital,
    loading,
  } = useApi();

  const LoactionPermission = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") Alert.alert(status);
    else {
      Location.hasServicesEnabledAsync().then(async (values) => {
        if (values === true) {
          try {
            const {
              coords: { latitude, longitude },
            } = await Location.getLastKnownPositionAsync();
            let Datalist = [];
            hospital
              ? hospital.map((item) => {
                  let dis = Getdistance(
                    latitude,
                    longitude,
                    Number(item.loc.lat),
                    Number(item.loc.long)
                  );
                  Datalist.push({ ...item, dis });
                })
              : null;

            Datalist.sort((a, b) => (a.dis > b.dis ? 1 : -1));
            setHospital(Datalist);
            console.log(hospital);
          } catch (e) {}
        } else {
          IntentLauncherAndroid.startActivityAsync(
            IntentLauncherAndroid.ACTION_LOCATION_SOURCE_SETTINGS
          );
        }
      });
    }
  };

  const [value, setValue] = useState("");
  useEffect(() => {
    !Test ? hospitaldata() : TestingData();
    if (title) {
      LoactionPermission();
    }
  }, []);
  return (
    <Screen>
      {title ? (
        <View
          style={{
            justifyContent: "flex-start",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Input
            value={value}
            onChange={(params) => setValue(params)}
            width={widthToDp("80%")}
          />
          <View
            style={{
              justifyContent: "center",
              borderRadius: heightToDp("2%"),
              alignItems: "center",
              height: heightToDp("6.3%"),
              width: widthToDp("12.6%"),
            }}
          >
            <TouchableOpacity onPress={LoactionPermission}>
              {Theme.covidscreen.vector === "#313250" ? (
                <Filter height={heightToDp("10%")} width={widthToDp("10%")} />
              ) : (
                <FilterLight
                  height={heightToDp("10%")}
                  width={widthToDp("10%")}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      {loading ? (
        <Skeleton />
      ) : (
        <Container>
          <FlatView>
            <FlatList
              disableVirtualization
              contentContainerStyle={{ flexGrow: 1 }}
              data={!Test ? change(hospital, value) : lab}
              keyExtractor={(item) => item._id.toString()}
              renderItem={({ item }) => <TestingLab {...item} />}
              initialNumToRender={5}
            />
          </FlatView>
        </Container>
      )}
    </Screen>
  );
};

export default Lab;
