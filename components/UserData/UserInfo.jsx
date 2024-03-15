"use client";
import { useEffect, useState } from "react";
import { signOut, signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useUser from "../hooks/useUser";

export default function UserInfo() {
  const { data: session } = useSession();
  const router = useRouter();
  const { user } = useUser();

  const handleSignIn = async () => {
    // router.push("/Login");
  };

  return (
    <div className="grid place-items-center mt-2 ">
      <div className=" text-xs p-4 bg-zinc-300/10 flex flex-col gap-2 ">
        {session ? (
          <>
            <div className="flex  w-full  flex-col items-start gap-2">
              <div className="flex items-center justify-around">
                {" "}
                username:
                <span className="font-bold gap-2"> {user?.username}</span>
              </div>
              <div>
                {" "}
                email: <span className="font-bold gap-2">{user?.email}</span>
              </div>
            </div>
            <button
              onClick={() => signOut()}
              className="bg-red-500 text-white font-bold px-4  py-2 "
            >
              Log Out
            </button>
            {/* <button onClick={router.push('/Profile')} >Profile</button> */}
          </>
        ) : (
          <button
            onClick={handleSignIn}
            className="bg-green-500 text-white font-bold px-4 py-2 mt-3"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}
