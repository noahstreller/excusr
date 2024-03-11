import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { Excuse, Preferences } from "./types";

const historyStore = useAsyncStorage("excuse-id-history");
const settingsStore = useAsyncStorage("preferences");

export const getHistory = async (): Promise<Excuse[]> => {
  return JSON.parse(await historyStore.getItem());
};

export const addHistory = async (item: Excuse): Promise<boolean> => {
  let history: Excuse[] = await getHistory();
  if(!history) history = [];
  if (history.some(excuse => excuse.id === item.id)) return false;
  history.push(item);
  await historyStore.setItem(JSON.stringify(history));
  return true;
}

export const clearHistory = async () => {
  await historyStore.removeItem();
}

export const getPreferences = async (): Promise<Preferences> => {
  let data = JSON.parse(await settingsStore.getItem());
  console.log("data ", data)
  // if (Object.keys(data).length === 0) data = await setDefaultPreferences();
  return data;
};

export const setPreferences = async (preferences: Preferences) => {
  console.log("setting ", preferences)
  await settingsStore.setItem(JSON.stringify(preferences));
}

export const setDefaultPreferences = async (): Promise<Preferences> => {
  let defaults: Preferences = {
    darkMode: true,
    duplicates: true,
  };
  await setPreferences(defaults);
  return defaults;
}