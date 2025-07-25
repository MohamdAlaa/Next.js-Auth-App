import Link from "next/link";
import LogoutForm from "./LogoutFom";
import { getSession } from "@/actions";

const Navbar = async () => {
  const session = await getSession();
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/premium">Premium</Link>
      {!session.isLoggedIn && <Link href="/login">Login</Link>}
      {session.isLoggedIn && <LogoutForm />}
    </nav>
  );
};

export default Navbar;
