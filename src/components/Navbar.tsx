import Image from "next/image";
import React from "react";
import emotion_logo from "@/assets/emotions_logo.png";

export const Navbar = () => {
  return (
    <div className="flex w-full justify-between items-center bg-transparent fixed top-0 py-14 px-28">
      <div className="flex gap-5 items-center">
        <span>
          <Image src={emotion_logo} className="w-10 h-10" alt="logo" />
        </span>
        <p className="text-blue-950 font-bold text-2xl">Mood Tracker</p>
      </div>
      <div className="flex gap-5 items-center">
        <span>
          <Image src={emotion_logo} className="w-10 h-10" alt="logo" />
        </span>
        
      </div>
    </div>
  );
};
