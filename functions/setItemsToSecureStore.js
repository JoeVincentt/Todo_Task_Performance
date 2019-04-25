import React from "react";
import { SecureStore } from "expo";

export const setTasks = async tasks => {
  SecureStore.setItemAsync("PerformanceTasks", JSON.stringify(tasks));
};
export const setDoneAmount = async doneAmount => {
  SecureStore.setItemAsync("PerformanceDone", JSON.stringify(doneAmount));
};
export const setNotDoneAmount = async notDoneAmount => {
  SecureStore.setItemAsync("PerformanceNotDone", JSON.stringify(notDoneAmount));
};
