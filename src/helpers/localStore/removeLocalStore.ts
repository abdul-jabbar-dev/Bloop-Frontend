"use client";

const RemoveLocalStore = (key: string) => {
  if (typeof window !== "undefined") {
    return localStorage.removeItem(key);
  } else {
    console.log("You are on the server");
  }
};
export default RemoveLocalStore;
