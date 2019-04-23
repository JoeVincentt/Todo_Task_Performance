import React from "react";
import { SecureStore } from "expo";

export const getTasks = async () => {
  let tasks = await SecureStore.getItemAsync("PerformanceTasks");
  if (tasks !== null) {
    tasks = JSON.parse(tasks);
    return tasks;
  } else {
    return null;
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
export const getTotalAmount = async () => {
  let totalAmount = await SecureStore.getItemAsync("PerformanceTotalAmount");
  if (totalAmount !== null) {
    totalAmount = Number(JSON.parse(totalAmount));
    return totalAmount;
  } else {
    return null;
  }
};
