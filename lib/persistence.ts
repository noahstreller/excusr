import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { Excuse } from "../components/excuse-output";

const { getItem, setItem, removeItem, mergeItem } = useAsyncStorage("excuse-id-history");

export const getHistory = async () => {
  const history = JSON.parse(await getItem());
  console.log(history);
  return history;
};

export const addHistory = async (item: Excuse): Promise<boolean> => {
  let history: Excuse[] = await getHistory();
  if(!history) history = [];
  if (history.some(excuse => excuse.id === item.id)) return false;
  history.push(item);
  await setItem(JSON.stringify(history));
  return true;
}

export const removeHistory = async (id: number) => {
  const history = await getHistory();
  const newHistory = history.filter((excuseId) => excuseId !== id);
  await setItem(JSON.stringify(newHistory));
}

export const clearHistory = async () => {
  await removeItem();
}