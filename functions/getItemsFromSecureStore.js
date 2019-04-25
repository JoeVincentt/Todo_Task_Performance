import React from "react";
import { SecureStore } from "expo";

export const getTasks = async () => {
  let tasks = await SecureStore.getItemAsync("PerformanceTasks");
  if (tasks !== null) {
    tasks = JSON.parse(tasks);
    return tasks;
  } else {
    return [];
  }
};
export const getDoneAmount = async () => {
  let doneAmount = await SecureStore.getItemAsync("PerformanceDone");
  if (doneAmount !== null) {
    doneAmount = Number(JSON.parse(doneAmount));
    return doneAmount;
  } else {
    return null;
  }
};
export const getNotDoneAmount = async () => {
  let notDoneAmount = await SecureStore.getItemAsync("PerformanceNotDone");
  if (notDoneAmount !== null) {
    notDoneAmount = Number(JSON.parse(notDoneAmount));
    return notDoneAmount;
  } else {
    return null;
  }
};
