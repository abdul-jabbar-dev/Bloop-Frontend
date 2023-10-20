"use client";
const RemoveLocalStore = (key: string) => {
  return localStorage.removeItem(key);
};
export default RemoveLocalStore;
