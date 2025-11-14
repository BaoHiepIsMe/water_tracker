import { Preferences } from '@capacitor/preferences';

const TOTAL_KEY = "water_total";
const HISTORY_KEY = "water_history";

export const saveTotal = async (value: number) => {
  await Preferences.set({
    key: TOTAL_KEY,
    value: value.toString(),
  });
};

export const loadTotal = async () => {
  const { value } = await Preferences.get({ key: TOTAL_KEY });
  return value ? parseInt(value) : 0;
};

export const saveHistory = async (list: string[]) => {
  await Preferences.set({
    key: HISTORY_KEY,
    value: JSON.stringify(list),
  });
};

export const loadHistory = async () => {
  const { value } = await Preferences.get({ key: HISTORY_KEY });
  return value ? JSON.parse(value) : [];
};

export const clearHistory = async () => {
  await Preferences.remove({ key: HISTORY_KEY });
};
