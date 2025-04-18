"use client";
import React, { createContext, useState } from "react";
import SideNav from "./_components/SideNav";
import TopHeader from "./_components/TopHeader";
import Footer from "./_components/Footer";

export const AppContext = createContext(null);

const layout = ({ children }) => {
  const [addSidebar, setAddSidebar] = useState(false);
  return (
    <AppContext.Provider value={{ addSidebar, setAddSidebar }}>
      <div className="h-screen">
        <div
          className={`h-screen md:w-64 flex-col fixed inset-y-0 z-50 ${
            addSidebar ? null : "md:flex hidden"
          }`}
        >
          <SideNav />
        </div>
        <div className="md:ml-64">
          <TopHeader />
          {children}
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default layout;
