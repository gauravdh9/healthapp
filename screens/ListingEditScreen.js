import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { Form, FormPicker as Picker, SubmitButton } from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    label: "A+",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    label: "A-",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    label: "B+",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    label: "B-",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    label: "AB+",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    label: "Ab-",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    label: "O+",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    label: "O-",
    value: 8,
  },
];

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <Picker
          items={categories}
          name="category"
          numberOfColumns={2}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />

        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
