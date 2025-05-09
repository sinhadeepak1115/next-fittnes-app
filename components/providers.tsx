"use client";
import { SessionProvider } from "next-auth/react";
import React, { FC, ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
