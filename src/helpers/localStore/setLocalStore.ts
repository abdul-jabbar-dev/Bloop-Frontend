"use client";

const SetLocalStore = (key: string, value: string): void => {
  if (typeof window !== "undefined") {
    return localStorage.setItem(key, value);
  } else {
    console.log("You are on the server");
  }
};
export default SetLocalStore;
