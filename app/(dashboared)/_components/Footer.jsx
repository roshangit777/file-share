import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-screen-xl py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
          <div className="p-5 sm:w-8/12 md:block hidden">
            <h3 className="font-bold text-3xl text-blue-600 mb-4">
              file-share
            </h3>

            <div className="flex text-gray-500 uppercase text-sm">
              <a href="/upload" className="mr-2 hover:text-blue-600">
                Uplaod
              </a>
              <a href="/files" className="mr-2 hover:text-blue-600">
                View Files
              </a>
            </div>
          </div>
        </div>
        <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
          <p>© Copyright 2025. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
