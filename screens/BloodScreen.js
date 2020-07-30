import React, { useEffect, useContext, useState } from "react";
import { FlatList } from "react-native";
import Screen from "../utils/Screen";
import Listheader from "../components/listheader";
import styled, { useTheme } from "styled-components";
import { useApi } from "../hooks/useApi";
import { heightToDp, widthToDp } from "../utils/Size";
import { UserContext } from "../App";
import Fab from "react-native-fab";
import Icon from "react-native-vector-icons/FontAwesome5";
import ModalView from "../components/ModalView";
import InputComponent from "../components/InputComponent";
const Container = styled(Screen)`
  background-color: ${({ theme }) => theme.Theme.covidscreen.vector};
`;
const FlatView = styled.View`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.Theme.covidscreen.info};
  border-top-right-radius: ${heightToDp("3%")}px;
  border-top-left-radius: ${heightToDp("3%")}px;
`;

const Hospital = () => {
  const [visible, setVisible] = useState(false);
  const { Theme } = useTheme();
  const { query, Requests } = useApi();
  const { user } = useContext(UserContext);
  useEffect(() => {
    Requests();
  }, []);
  return (
    <Screen>
      <Listheader icon title={`Welcome ${user ? user.name : ""}`} />
      <Container>
        <FlatView>
          <FlatList
            disableVirtualization
            contentContainerStyle={{ flexGrow: 1 }}
            data={query}
            keyExtractor={(item) => item._id.toString()}
            renderItem={({ item }) => <TestingLab {...item} />}
            initialNumToRender={5}
          />
        </FlatView>
        <ModalView visible={visible} setVisible={setVisible}>
          <InputComponent
            value={""}
            iconName={"user-secret"}
            placeholder="Blood"
            style={{ width: widthToDp("40%"), height: heightToDp("10%") }}
          />
          <InputComponent
            value={""}
            iconName={"hospital-o"}
            placeholder="hospital"
            style={{
              width: widthToDp("80%"),
              height: heightToDp("10%"),
            }}
          />
        </ModalView>
        <Fab
          visible
          buttonColor={Theme.covidscreen.vector}
          iconTextColor={Theme.text.heading}
          iconTextComponent={
            <Icon
              name="plus"
              size={heightToDp("2.8%")}
              color={Theme.text.heading}
            />
          }
          onClickAction={() => setVisible(true)}
        />
      </Container>
    </Screen>
  );
};

export default Hospital;
