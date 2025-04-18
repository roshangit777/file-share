"use client";

import { UserButton } from "@clerk/nextjs";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import React, { useContext } from "react";
import { AppContext } from "../layout";

const TopHeader = () => {
  const { addSidebar, setAddSidebar } = useContext(AppContext);
  return (
    <div className="shadow-sm flex p-[31px] border-b border-gray-300 items-center justify-between md:justify-end">
      <AlignJustify
        className="md:hidden"
        onClick={() => setAddSidebar(addSidebar ? false : true)}
      />
      <Image
        src={"/logo.svg"}
        width={50}
        height={50}
        alt="logo"
        className="md:hidden"
      />
      <UserButton />
    </div>
  );
};

export default TopHeader;
