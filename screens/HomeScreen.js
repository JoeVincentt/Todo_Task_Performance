import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  ImageBackground
} from "react-native";
import {
  ItalicText,
  LightText,
  RegularText,
  BoldItalicText
} from "../components/StyledText";
import { height, width } from "../constants/Layout";

export default class HomeScreen extends React.Component {
  state = {
    tasks: [],
    doneAmount: 0,
    notDoneAmount: 0,
    totalAmount: 0
  };

  async componentWillMount() {}

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.welcomeContainer}>
            <LightText>Light text</LightText>
            <BoldItalicText>Bold italic</BoldItalicText>
            <RegularText>Regular</RegularText>
            <ItalicText>Italic</ItalicText>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    flex: 1,
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  welcomeContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  }
});
