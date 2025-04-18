"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { File, Shield, Upload } from "lucide-react";
import Image from "next/image";
import { AppContext } from "../layout";
import { usePathname, useRouter } from "next/navigation";

const SideNav = () => {
  const pathName = usePathname();
  const router = useRouter();
  const { addSidebar, setAddSidebar } = useContext(AppContext);
  const menuRef = useRef(null);
  const menuList = [
    { id: 1, name: "Upload", icon: Upload, path: "/upload" },
    { id: 2, name: "Files", icon: File, path: "/files" },
    { id: 3, name: "Upgrade", icon: Shield, path: "/upgrade" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setAddSidebar(false);
      }
    };

    if (addSidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [addSidebar]);

  return (
    <>
      <div
        ref={menuRef}
        className="shadow-lg border-r-2 border-gray-300 h-full bg-white"
      >
        <div className="p-5 shadow-sm border-b-2  border-gray-300 flex justify-center">
          <Image
            src="/logo.svg"
            width={50}
            height={50}
            alt="logo"
            onClick={() => (window.location.href = "/")}
          />
        </div>
        <div className="flex flex-col float-left w-full">
          {menuList.map((item, index) => (
            <button
              key={item.id}
              className={`font-semibold text-lg flex gap-2 p-4 px-18 hover:bg-gray-100 w-full text-gray-500 ${
                pathName === item.path ? "bg-blue-50 text-primary" : null
              }`}
              onClick={() => {
                setAddSidebar(addSidebar ? false : true);
                router.push(`${item.path}`);
              }}
            >
              <item.icon />
              <h2>{item.name}</h2>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideNav;
