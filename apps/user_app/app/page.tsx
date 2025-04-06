"use client"

import { SessionProvider } from "next-auth/react";
import { Appbar } from "../components/Appbar";

export default function Page() {
  return (
    <SessionProvider>
      <Appbar></Appbar>
    </SessionProvider>
  )
}
