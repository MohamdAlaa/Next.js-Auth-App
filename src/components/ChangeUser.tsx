import { changeUsername, getSession } from "@/actions";
import React from "react";

const ChangeUser = async () => {
  const session = await getSession();
  return (
    <form action={changeUsername}>
      <label htmlFor="username">Update UserName :</label>
      <input
        type="text"
        id="username"
        name="username"
        required
        placeholder={session.username}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default ChangeUser;
