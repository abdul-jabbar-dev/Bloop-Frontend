'use client'

const GetLocalStore = (key: string): string | null => {

  if (typeof window !== "undefined") {
     const item = localStorage.getItem(key);
     return item;
  } else {
    return null
  }


};
export default GetLocalStore;


