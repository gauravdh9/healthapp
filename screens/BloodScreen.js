import React, { useEffect, useContext, useState } from "react";
import { FlatList, View, Alert } from "react-native";
import Screen from "../utils/Screen";
import Listheader from "../components/listheader";
import styled, { useTheme } from "styled-components";
import { useApi } from "../hooks/useApi";
import { heightToDp, widthToDp } from "../utils/Size";
import { UserContext } from "../utils/Context";
import Fab from "react-native-fab";
import Icon from "react-native-vector-icons/FontAwesome5";
import ModalView from "../components/ModalView";
import InputComponent from "../components/InputComponent";
import { useFormik } from "formik";
import * as Yup from "yup";
import ButtonComponent from "../components/ButtonComponent";
import TestingLab from "../components/TestingLab";
import { Skeleton } from "../components/Tabstack";
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
  const { button } = useContext(UserContext);
  const { query, Requests, load, DeleteRequest } = useApi();
  const [visible, setVisible] = useState(false);
  const List = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const { PostRequest, refresh } = useApi();
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    values,
    touched,
  } = useFormik({
    validationSchema: Yup.object().shape({
      requestBloodGroup: Yup.string().required().oneOf(List),
      hospital: Yup.string().required(),
    }),
    initialValues: { requestBloodGroup: "", hospital: "" },
    onSubmit: (values, { resetForm }) => {
      PostRequest(values.hospital, values.requestBloodGroup);
      resetForm({ values: "" });
      setVisible(false);
      Requests();
    },
  });

  const { Theme } = useTheme();
  const { user } = useContext(UserContext);
  useEffect(() => {
    Requests();
  }, []);
  return (
    <Screen>
      <Listheader icon title={`Welcome ${user ? user.name : ""}`} />
      {load ? (
        <Skeleton />
      ) : (
        <Container>
          <FlatView>
            <FlatList
              disableVirtualization
              contentContainerStyle={{ flexGrow: 1 }}
              data={query}
              keyExtractor={(item) => item._id.toString()}
              renderItem={({ item }) => (
                <TestingLab
                  title={item.name}
                  number={item.phone}
                  type={item.requestBloodGroup}
                  address={item.hospital}
                  location={`https://api.whatsapp.com/send?phone=${item.phone}`}
                  date={item.createdAt}
                  whatsapp
                />
              )}
              initialNumToRender={5}
              refreshing={refresh}
              onRefresh={() => {
                Requests();
              }}
            />
          </FlatView>
          <ModalView visible={visible} setVisible={setVisible} user={user}>
            <View>
              <InputComponent
                value={values.requestBloodGroup}
                iconName={"user-secret"}
                placeholder="Blood"
                style={{ width: widthToDp("40%"), height: heightToDp("10%") }}
                onChangeText={handleChange("requestBloodGroup")}
                error={errors.requestBloodGroup}
                touched={touched.requestBloodGroup}
                onBlur={handleBlur("requestBloodGroup")}
              />
              <InputComponent
                value={values.hospital}
                iconName={"hospital-o"}
                placeholder="Hospital Name where it is Required"
                style={{
                  width: widthToDp("80%"),
                  height: heightToDp("10%"),
                }}
                onChangeText={handleChange("hospital")}
                error={errors.hospital}
                touched={touched.hospital}
                onBlur={handleBlur("hospital")}
              />
              <ButtonComponent
                name={"Submit"}
                style={{
                  width: widthToDp("50%"),
                  borderRadius: heightToDp("20%"),
                  onPress: () => handleSubmit(),
                }}
                outerStyle={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: heightToDp("2%"),
                }}
              />
            </View>
          </ModalView>
          {button ? (
            <Fab
              visible
              buttonColor={Theme.covidscreen.vector}
              iconTextColor={Theme.text.heading}
              iconTextComponent={
                <Icon
                  name="trash"
                  size={heightToDp("2.8%")}
                  color={Theme.text.heading}
                />
              }
              onClickAction={() => {
                Alert.alert(
                  "Delete",
                  `Do you want to delete the request of Blood Group ${
                    button.requestBloodGroup
                  } requested on ${button.createdAt.slice(0, 10)}?`,
                  [
                    {
                      text: "Cancel",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel",
                    },
                    {
                      text: "OK",
                      onPress: () => {
                        DeleteRequest();
                        Requests();
                      },
                    },
                  ],
                  { cancelable: false }
                );
              }}
            />
          ) : (
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
          )}
        </Container>
      )}
    </Screen>
  );
};

export default Hospital;
