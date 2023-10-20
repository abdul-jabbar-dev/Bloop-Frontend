'use client'
const GetLocalStore = (key: string): string | null => {
  const item = localStorage.getItem(key);
  return item;
};
export default GetLocalStore;
