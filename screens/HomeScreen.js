import React from "react";
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
  Alert
} from "react-native";
import { Icon } from "native-base";
import {
  ItalicText,
  LightText,
  RegularText,
  BoldItalicText
} from "../components/StyledText";
import { height, width } from "../constants/Layout";
import {
  getDoneAmount,
  getNotDoneAmount,
  getTasks
} from "../functions/getItemsFromSecureStore";
import {
  setDoneAmount,
  setNotDoneAmount,
  setTasks
} from "../functions/setItemsToSecureStore";
import TaskItem from "../components/TaskItem";
import { ScrollView } from "react-native-gesture-handler";

export default class HomeScreen extends React.Component {
  state = {
    tasks: [],
    doneAmount: 0,
    notDoneAmount: 0,
    text: ""
  };

  async componentWillMount() {
    const doneAmount = await getDoneAmount();
    const notDoneAmount = await getNotDoneAmount();
    const tasks = await getTasks();
    await this.setState({ doneAmount, notDoneAmount, tasks });
  }

  doneClick = async i => {
    await this.setState({
      tasks: this.state.tasks.filter((item, index) => index !== i),
      doneAmount: this.state.doneAmount + 1
    });
    await setDoneAmount(this.state.doneAmount);
    await setTasks(this.state.tasks);
  };

  failClick = async i => {
    await this.setState({
      tasks: this.state.tasks.filter((item, index) => index !== i),
      notDoneAmount: this.state.notDoneAmount + 1
    });
    await setNotDoneAmount(this.state.notDoneAmount);
    await setTasks(this.state.tasks);
  };

  addTask = async () => {
    if (this.state.text.trim() !== "") {
      this.state.tasks.push(this.state.text);
      await this.setState({
        tasks: [...this.state.tasks],
        text: "",
        totalAmount: this.state.totalAmount + 1
      });
      await setTasks(this.state.tasks);
    } else {
      Alert.alert("Can't Be Empty!");
    }
  };

  clearAll = async () => {
    await this.setState({
      tasks: []
    });
    await setTasks(this.state.tasks);
  };
  resetProgress = async () => {
    await this.setState({
      doneAmount: 0,
      notDoneAmount: 0
    });
    await setDoneAmount(this.state.doneAmount);
    await setNotDoneAmount(this.state.notDoneAmount);
  };

  render() {
    const { tasks, doneAmount, notDoneAmount } = this.state;
    return (
      <>
        <View
          style={{
            marginTop: height * 0.075,
            justifyContent: "flex-start"
          }}
        >
          <TextInput
            style={{
              backgroundColor: "white",
              borderColor: "#90caf9",
              borderTopWidth: 1,
              borderBottomWidth: 1,
              fontSize: height * 0.04,
              height: height * 0.15,
              padding: width * 0.025,
              fontFamily: "Roboto-Light"
            }}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            editable={true}
            multiline={true}
            maxLength={50}
          />
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity onPress={() => this.addTask()}>
              <View
                style={{
                  margin: width * 0.015,
                  backgroundColor: "#e1f5fe",
                  width: width * 0.3,
                  height: height * 0.075,
                  borderRadius: 15,
                  borderWidth: 3,
                  borderColor: "#90caf9",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <BoldItalicText style={{ fontSize: height * 0.03 }}>
                  {" "}
                  ADD{" "}
                </BoldItalicText>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            paddingTop: height * 0.015,
            flexDirection: "row",
            justifyContent: "space-evenly"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Icon
              name="done-all"
              style={{
                color: "#76ff03",
                fontSize: height * 0.07,
                marginRight: width * 0.02
              }}
            />
            <BoldItalicText style={{ fontSize: height * 0.03 }}>
              {doneAmount !== null ? doneAmount : 0}
            </BoldItalicText>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Icon
              name="close"
              style={{
                color: "#ff5252",
                fontSize: height * 0.07,
                marginRight: width * 0.02
              }}
            />
            <BoldItalicText style={{ fontSize: height * 0.03 }}>
              {notDoneAmount !== null ? notDoneAmount : 0}
            </BoldItalicText>
          </View>
        </View>
        <ScrollView
          style={{ paddingTop: height * 0.02, maxHeight: height * 0.5 }}
        >
          {tasks.length === 0 ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <BoldItalicText>No Tasks Yet! Please Add a Task.</BoldItalicText>
            </View>
          ) : (
            <FlatList
              data={tasks}
              keyExtractor={(item, i) => i.toString()}
              renderItem={item => (
                <TaskItem
                  keyExtractor={() => item.index}
                  task={item.item}
                  index={item.index}
                  doneClick={() => this.doneClick(item.index)}
                  failClick={() => this.failClick(item.index)}
                />
              )}
            />
          )}
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderTopWidth: 0.5,
            borderTopColor: "black"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <TouchableOpacity onPress={() => this.clearAll()}>
              <Icon
                name="refresh"
                style={{
                  color: "#d50000",
                  fontSize: height * 0.04,
                  marginRight: width * 0.02,
                  marginLeft: width * 0.05,
                  marginTop: height * 0.01
                }}
              />
            </TouchableOpacity>
            <ItalicText>Clear all</ItalicText>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <ItalicText>Reset Progress</ItalicText>
            <TouchableOpacity onPress={() => this.resetProgress()}>
              <Icon
                name="warning"
                style={{
                  color: "#ffeb3b",
                  fontSize: height * 0.04,
                  marginRight: width * 0.05,
                  marginLeft: width * 0.02,
                  marginTop: height * 0.01
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff"
  }
});
