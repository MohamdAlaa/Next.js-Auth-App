import Link from "next/link";
import LogoutForm from "./LogoutFom";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/premium">Premium</Link>
      <Link href="/login">Login</Link>
      <LogoutForm />
    </nav>
  );
};

export default Navbar;
