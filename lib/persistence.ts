import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { Excuse } from "../components/excuse-output";

const { getItem, setItem, removeItem, mergeItem } = useAsyncStorage("excuse-id-history");

export const getHistory = async (): Promise<Excuse[]> => {
  return JSON.parse(await getItem());
};

export const addHistory = async (item: Excuse): Promise<boolean> => {
  let history: Excuse[] = await getHistory();
  if(!history) history = [];
  if (history.some(excuse => excuse.id === item.id)) return false;
  history.push(item);
  await setItem(JSON.stringify(history));
  return true;
}

export const clearHistory = async () => {
  await removeItem();
}