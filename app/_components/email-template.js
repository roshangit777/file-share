"use client";
import * as React from "react";

export const EmailTemplate = ({ file }) => {
  return (
    <div className="flex items-center justify-center flex-col mt-5 ">
      <section className="max-w-2xl mx-auto bg-white border border-blue-800 rounded-lg">
        <header className="py-8 flex justify-center w-full items-center gap-5">
          <img src="/logo.svg" className="w-15 h-15" alt="tailwindtaplogo" />
          <h1 className="text-3xl font-semibold text-black">FileShare</h1>
        </header>
        <div className="w-full h-[2px] bg-[#365CCE]"></div>
        <div className="text-center mt-10 flex flex-col gap-3">
          <h1 className="text-3xl font-semibold">
            Thanks for {""}
            <span className="relative">
              Signing up!
              <div className="h-[3px] w-20 bg-[#365CCE] absolute left-1 -bottom-2"></div>
            </span>
          </h1>
        </div>
        <main className="mt-8 px-5 sm:px-10">
          <h3>
            Hi <span className="font-bold">Roshan</span>,
          </h3>
          <br />
          <h2>
            I hope you're doing well. I'm sharing a file with you. Here are the
            details:
          </h2>
          <div>
            <h3 className="mt-5">File Name: {file?.name}</h3>
            <h3 className="mt-5">File Type: {file?.type}</h3>
            <h3 className="mt-5">File Size: {file?.size}</h3>
          </div>
          <a href={file?.fileUrl?.url}>
            <button className="px-6 py-2 mt-6 text-sm font-bold tracking-wider text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-lg hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80">
              Download File
            </button>
          </a>
          <p className="mt-8 text-gray-600">
            Thank you, <br />
            Roshan
          </p>
        </main>
      </section>
    </div>
  );
};
