"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are necessary.");
      alert("All filed are necessury");
    }
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res?.error) {
        setError("Invalid  Credentials!");
        alert("Invalid  Credentials!");
        return;
      }
      router.replace("/");
    } catch (error) {
      console.log("message is :", error);
    }
  };

  return (
    <div className="flex  items-center justify-center w-full">
      <div className="flex flex-col py-16 px-4 bg-black/40 shadow-xl rounded  items-center justify-center gap-10 border-2  hover:shadow-md">
        <img
          src="/download.png"
          alt=""
          className="w-50 h-50 rounded-full object-fill border"
        />
        <h2 className="font-semibold text-xl text-gray-700">
          <span className="font-serif"> Welcome </span> To{" "}
          <span className="text-xl text-blue-600 font-bold">
            {" "}
            TechInnovation
          </span>
        </h2>
        <div className="flex  items-center justify-center gap-2">
          <Link href={'/Login/loginCitizen'}>
            <div className=" w-60 flex items-center justify-center text-center font-semibold bg-white text-black py-2  rounded-2xl hover:bg-gray-100 hover:border-blue-500 hover:border active:bg-blue-500">
              login for Citizen
            </div>
          </Link>
          <Link href={'/Login/loginOrganization'}>
          <div className=" w-60 flex items-center justify-center text-center font-semibold bg-white text-black py-2  rounded-2xl hover:bg-slate-50 hover:border-gray-500 hover:border active:bg-blue-500">
            login for Organization
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
