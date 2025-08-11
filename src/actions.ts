"use server";
import { getIronSession } from "iron-session";
import { defaultSession, SessionData, sessionOptions } from "./lib";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

let username = "mike";
let isPro = true;
let isBlocked = true;

export const getSession = async () => {
  const session = await getIronSession<SessionData>(
    await cookies(),
    sessionOptions
  );

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};

// LOGIN
export const login = async (
  prevState: { error: undefined | string },
  formData: FormData
) => {
  const session = await getSession();
  const formUsername = formData.get("username");
  const formPassword = formData.get("password");

  // CHECK USER IN THE DB
  // const user = await db.getUser({username,password})

  if (formUsername !== username) {
    return { error: "Wrong Credentials!" };
  }

  session.userId = "1";
  session.username = formUsername;
  session.isPro = isPro;
  session.isLoggedIn = true;

  await session.save();
  redirect("/");
};

// LOGOUT
export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/");
};

// TOGGLE PREMIUM
export const ChangePremium = async () => {
  const session = await getSession();
  isPro = !session.isPro;
  session.isPro = isPro;
  await session.save();
  revalidatePath("/premium");
};

// CHANGE USERNAME
export const changeUsername = async (formData: FormData) => {
  const session = await getSession();
  const newUsername = formData.get("username") as string;
  username = newUsername;
  session.username = username;
  await session.save();
  revalidatePath("/profile");
};
