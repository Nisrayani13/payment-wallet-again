"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import {useBalance} from "@repo/store/useBalance"


export const Appbar = () => {
  const { data: session } = useSession();
  const balance=useBalance();
  return (
    <div>
      <div className="flex items-center justify-between py-3 px-5 border-b">
        <div className="text-xl font-semibold">PayHere</div>
        <div>
          {session?.user ? (
            <button className="text-white bg-black py-1.5 px-4 rounded-lg" onClick={()=>signOut()}>Sign out</button>
          ) : (
            <button className="text-white bg-black py-1.5 px-4 rounded-lg" onClick={()=>signIn()}>Sign In</button>      
          )}
        </div>
      </div>

      <div>My balance is {balance}</div>
    </div>
  );
};
