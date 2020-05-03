import { createContext } from "react";
import axios from "../axios";
import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;

const UserContext = createContext({});

export const storeCreds = async (userCreds: any) => {
  try {
    await Storage.set({ key: "user", value: JSON.stringify(userCreds) });
  } catch (err) {
    console.log(err);
  }
};

export const getCreds = async () => {
  const ret = await Storage.get({ key: "user" });
  const userInfo = JSON.parse(ret.value as any);
  return userInfo;
};

export const getCredsSync = (): any => {
  Storage.get({ key: "user" }).then((ret) => {
    return JSON.parse(ret.value as any);
  });
};

export const attachToken = (token: string) => {
  // add the user's newly created jwt token to all future axios request
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const isLoggedIn = async () => {
  const userInfo = await getCreds();
  return userInfo !== null;
};

export const logOut = async () => {
  await Storage.remove({ key: "user" });
};

export default UserContext;
