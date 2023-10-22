'use client'
import CONFIG from "../config"; 
import GetLocalStore from "../helpers/localStore/getLocalStore";
import SetLocalStore from "../helpers/localStore/setLocalStore";
import { decodedToken } from "./jwt";

export const isLoggedIn = () => {
  const authToken = GetLocalStore(CONFIG.authKey);
  return !!authToken;
};

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return SetLocalStore(CONFIG.authKey, accessToken as string);
};

export const getUserInfo = () => {
  const authToken = GetLocalStore(CONFIG.authKey);
  if (authToken) {
    const decodedData = decodedToken(authToken);
    return decodedData;
  } else {
    return "";
  }
};
