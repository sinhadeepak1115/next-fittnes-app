import { getCurrentUser } from "@/lib/session";
import { Navbar } from "./Navbar";

export async function NavbarWrapper() {
  const user = await getCurrentUser();
  return <Navbar user={user} />;
}
