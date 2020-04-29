import { createContext } from "react";
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

export const isLoggedIn = async () => {
  const userInfo = await getCreds();
  return userInfo !== null;
};

export const logOut = async () => {
  await Storage.clear();
};

export default UserContext;
