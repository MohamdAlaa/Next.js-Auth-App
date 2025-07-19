"use server";
import { getIronSession } from "iron-session";
import { defaultSession, SessionData, sessionOptions } from "./lib";
import { cookies } from "next/headers";

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};
// export const login = () => async () => {};
// export const logout = () => async () => {};
