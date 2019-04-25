import React from "react";
import Swipeout from "react-native-swipeout";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "native-base";
import { RegularText } from "../components/StyledText";
import { height, width } from "../constants/Layout";

const doneButtonBackground = "#76ff03";
const failButtonBackground = "#ff5252";
const listItemBackground = "#e3f2fd";

export default class MyListItem extends React.PureComponent {
  swipeoutBtns = [
    {
      component: (
        <View style={styles.button}>
          <Icon name="done-all" />
        </View>
      ),
      backgroundColor: doneButtonBackground,
      onPress: () => {
        this.props.doneClick(this.props.index);
      }
    },
    {
      component: (
        <View style={styles.button}>
          <Icon name="close" />
        </View>
      ),
      backgroundColor: failButtonBackground,
      onPress: () => {
        this.props.failClick(this.props.index);
      }
    }
  ];
  render() {
    return (
      <View style={styles.box}>
        <Swipeout
          right={this.swipeoutBtns}
          backgroundColor={listItemBackground}
          autoClose={true}
        >
          <View style={styles.textBox}>
            <RegularText style={{ fontSize: height * 0.03 }}>
              {this.props.task}
            </RegularText>
          </View>
        </Swipeout>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#90caf9",
    marginVertical: 1
  },
  textBox: {
    justifyContent: "center",
    paddingHorizontal: width * 0.025
  },
  button: {
    flex: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#90caf9",
    alignItems: "center",
    justifyContent: "center"
  }
});
