import { getSession } from "@/actions";
import Link from "next/link";
import { redirect } from "next/navigation";

const Premiumpage = async () => {
  const session = await getSession();
  if (!session.isLoggedIn) {
    redirect("/login");
  }

  if (!session.isPro) {
    return (
      <div className="notPremium">
        <h1>Only Premium Users can see the content</h1>
        <Link href="/profile">
          <span>Go to profile page to upgrade to Premuim</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="premium">
      <h1>Welcome to Premium Page</h1>
      <p>
        This page is only accessible to users with a premium subscription. Enjoy
        exclusive content and features!
      </p>
      <ul>
        <li>Exclusive articles and tutorials</li>
        <li>Ad-free browsing experience</li>
        <li>Priority support</li>
        <li>Access to premium resources</li>
      </ul>
    </div>
  );
};

export default Premiumpage;
