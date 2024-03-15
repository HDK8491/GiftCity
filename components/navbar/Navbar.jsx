"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaBars, FaUser } from "react-icons/fa"; // Import the menu icon from react-icons/fa
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import UserInfo from "../UserData/UserInfo";
import useUser from "../hooks/useUser";
import Image from "next/image";

const Navbar = () => {
  
  const menus = [
    { label: "Home", value: "/" },
    { label: "About Us", value: "/AboutUs" },
    { label: "Events", value: "/#Events" },
    { label: "Community", value: "/Community" },
    { label: "Maps", value: "/#Map" },
  ];
  const {data:session}=useSession();

  const {user}= useUser()
 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currTab, setCurrTab] = useState("Home");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

  const toggleLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };



  return (
    <nav className="flex py-2 px-6 absolute z-10   justify-between  w-full  Gujarat International Finance tech-city items-center">
      <div className='bg flex items-center   flex-col'>
        <Image
          src="/download.png"
          className="rounded-full object-cover border-t-4   border-r "
          width={40}
          height={40}
          alt="TechInvention"
          objectFit="cover"
        
        />
        <h2 className="text-xl font-semibold text-blue-600">TechInnovation</h2>
        {/* <p>International Fiancee TechCity</p> */}


      </div>
      {/* Mobile menu button */}
      {/* <div className="ml-auto block sm:hidden">
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-600 focus:outline-none">
          <FaBars />
        </button>
      </div> */}
      {/* Desktop navigation */}
      <div className="flex w-full justify-center gap-12 text-white text-lg font-medium  ml-auto">
        {menus.map((item, index) => (
          <Link
            href={item.value}
            key={index}
            className={`${
              currTab === item.label ? "border-b-2 border-white" : ""
            }`}
            onClick={() => setCurrTab(item.label)}>
            {item.label}
          </Link>
        ))}
      </div>
      {/* Mobile menu */}
      <div
        className={`ml-auto sm:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}>
        <div className="absolute top-16 right-0 left-0 bg-white p-4 ">
          {menus.map((item, index) => (
            <Link
              href={item.value}
              key={index}
              className="block py-2  scroll-smooth text-gray-600"
              scroll 
              onClick={() => {
                setMobileMenuOpen(false);
                setCurrTab(item.label);
              }}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="ml-4  font-medium text-xl px-6 cursor-pointer text-black">
        {session ? (
          <button onClick={toggleProfileMenu} className=" flex items-center rounded-full ">
            {/* <FaUser className="" /> */}
            {/* <div className=""> */}
        <img
          height={40}
          width={40}
          src={user?.img}
          className="border rounded-full"
          alt="User"
        />
      {/* </div> */}

          </button>
        ) : (
          <button className="text-white" onClick={toggleLoginStatus}>
            <Link href="/Login">Login</Link>
          </button>
        )}
        {isProfileMenuOpen && (
          <ul className="bg-white p-2 mr-3 border-b-2 border-gray-600 absolute z-10 right-0  ">
            <UserInfo/>

          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
