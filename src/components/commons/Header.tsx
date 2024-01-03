import React from "react";
import ThreeBulletIcon from "../icons/ThreeBulletIcon";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex h-[70px] fixed bg-white w-full gap-x-4  items-center">
      <div className="flex items-center ml-10 gap-x-5">
        <ThreeBulletIcon className="w-5 h-5" />
        <Image src="/doaibu.png" alt="" width="110" height="90" />
      </div>
    </div>
  );
};

export default Header;
