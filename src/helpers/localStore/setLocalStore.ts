"use client";
const SetLocalStore = (key: string, value: string): void => {
  return localStorage.setItem(key, value);
};
export default SetLocalStore;
