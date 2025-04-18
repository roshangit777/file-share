"use client";
import { Download } from "lucide-react";
import Image from "next/image";
import React from "react";

const FileItem = ({ file }) => {
  const [password, setPassword] = React.useState("");
  return (
    <div className="bg-white w-auto h-auto flex flex-col gap-5 items-center p-10 rounded-3xl">
      <h1 className="text-4xl font-semibold">
        <span className="text-primary">{file?.userName}</span> Shared the file
        with You
      </h1>
      <p className="text-lg text-gray-500">Find file details below</p>
      <Image src={"/downloadfile.gif"} width={150} height={150} alt="file" />
      <div className="flex gap-2">
        <h1 className="text-lg">{file?.fileName} ⚡</h1>
        <h1 className="text-lg">{file?.fileType} ⚡</h1>
        <h1 className="text-lg">
          {(file?.fileSize / 1024 / 1024).toFixed(2)}mb
        </h1>
      </div>
      {file?.password.length > 0 ? (
        <input
          type="password"
          placeholder="Enter password to access"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 border-3  border-gray-300 rounded-lg text-xl font-semibold text-gray-600 text-center"
        />
      ) : null}
      <button
        disabled={password !== file?.password}
        className="flex gap-2 items-center justify-center bg-blue-600 text-white p-3 rounded-lg w-2/3 text-lg font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => window.open(file?.fileUrl?.url)}
      >
        <Download />
        <h1>Download</h1>
      </button>
      <h1 className="text-sm text-gray-500">*Terms and Condition apply</h1>
    </div>
  );
};

export default FileItem;
