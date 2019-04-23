import React from "react";
import { SecureStore } from "expo";

const saveDataToSecureStorage = async (key, item) =>
  await Expo.SecureStore.setItemAsync(key, JSON.stringify(item));

export const setTasks = async tasks => {
  SecureStore.setItemAsync("PerformanceTasks", JSON.stringify(tasks));
};
export const setDoneAmount = async doneAmount => {
  SecureStore.setItemAsync("PerformanceDone", JSON.stringify(doneAmount));
};
export const setNorDoneAmount = async notDoneAmount => {
  SecureStore.setItemAsync("PerformanceNotDone", JSON.stringify(notDoneAmount));
};
export const setTotalAmount = async totalAmount => {
  SecureStore.setItemAsync(
    "PerformanceTotalAmount",
    JSON.stringify(totalAmount)
  );
};
