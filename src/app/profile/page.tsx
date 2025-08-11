import { getSession } from "@/actions";
import ChangeUser from "@/components/ChangeUser";
import TogglePremium from "@/components/TogglePremium";
import { redirect } from "next/navigation";
import React from "react";

const ProfilePage = async () => {
  const session = await getSession();
  if (!session.isLoggedIn) {
    redirect("/");
  }
  return (
    <div className="profile">
      <h1>Welcome to Profile Page</h1>
      <p>
        Welcome to your profile <b>{session.username}</b>
      </p>
      <span>
        You are a{" "}
        <b style={{ color: session.isPro ? "gold" : "lightgreen" }}>
          {session.isPro ? "Premium" : "Free"}
        </b>{" "}
        user
      </span>
      <TogglePremium />
      <ChangeUser />
    </div>
  );
};

export default ProfilePage;
