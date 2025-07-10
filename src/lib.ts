import { SessionOptions } from "iron-session";

export interface SessionData {
  userId?: string;
  userName?: string;
  userEmail?: string;
  img?: string;
  isPro?: boolean;
}

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_SECRET_KEY || "default_secret_key",
  cookieName: "user-session",
  cookieOptions: {
    httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
    secure: process.env.NODE_ENV === "production", // Use secure cookies in production
    // maxAge: 60 * 60 * 24 * 7, // 1 week
  },
};
