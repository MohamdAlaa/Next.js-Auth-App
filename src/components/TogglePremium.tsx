import { ChangePremium, getSession } from "@/actions";
import React from "react";

const TogglePremium = async () => {
  const session = await getSession();
  return (
    <form action={ChangePremium}>
      <button>{session.isPro ? "Cancel" : "Buy"} Premium</button>
    </form>
  );
};

export default TogglePremium;
