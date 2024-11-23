"use client";
import { Button } from "./ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

const LoginButton = () => {
  const session = useSession();
  return (
    <div>
      {session.data?.user && <Button onClick={() => signOut()}>Logout</Button>}
      {!session.data?.user && <Button onClick={() => signIn()}>LogIn</Button>}
    </div>
  );
};

export default LoginButton;
