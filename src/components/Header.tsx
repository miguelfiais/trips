"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { status, data } = useSession();
  const handleLogin = () => signIn();
  const handleLogout = () => {
    setMenuIsOpen(false);
    signOut();
  };
  const handleMenu = () => setMenuIsOpen(!menuIsOpen);
  return (
    <div className="container mx-auto px-5 h-24 flex justify-between items-center">
      <Image src="/logo.png" alt="Full Stack Week" width={183} height={32} />

      {status === "unauthenticated" && (
        <button
          className="text-primary text-sm font-semibold"
          onClick={handleLogin}
        >
          Login
        </button>
      )}
      {status === "authenticated" && (
        <div className="flex items-center gap-3 py-2 px-3 border-grayLighter border-2 border-solid rounded-full relative">
          <AiOutlineMenu
            size={20}
            onClick={handleMenu}
            className="cursor-pointer"
          />
          <Image
            className="rounded-full shadow-md"
            width={36}
            height={36}
            src={data?.user?.image!}
            alt={data?.user?.name!}
          />
          {menuIsOpen && (
            <div className="z-50 absolute top-14 left-0 w-full h-full bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
              <button
                className="text-primary text-sm font-semibold"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
