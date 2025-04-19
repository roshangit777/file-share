"use client";
import { Download } from "lucide-react";
import Image from "next/image";
import React from "react";
import LoaderPage from "../../../_components/LoaderPage";

const FileItem = ({ file, loading }) => {
  const [password, setPassword] = React.useState("");
  return (
    <div className="bg-white w-[350px] md:w-[800px] h-auto flex flex-col gap-5 items-center p-10 rounded-3xl overflow-hidden">
      <h1 className="md:text-4xl text-2xl font-semibold text-center">
        <span className="text-primary">
          {file?.userName ? file.userName : "The Sender"}
        </span>{" "}
        Shared the file with You
      </h1>
      <p className="text-lg text-gray-500">Find file details below</p>
      <Image src={"/downloadfile.gif"} width={150} height={150} alt="file" />
      {loading ? (
        <LoaderPage />
      ) : (
        <div className="flex md:flex-row gap-2 w-[500px] flex-wrap justify-center items-center">
          <h1 className="text-sm md:text-lg w-[100px] md:w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
            {file?.fileName}
          </h1>
          <span className="inline">⚡</span>

          <h1 className="text-sm md:text-lg">
            {file?.fileType} <span className="inline">⚡</span>
          </h1>
          <h1 className="text-sm md:text-lg">
            {(file?.fileSize / 1024 / 1024).toFixed(2)}mb
          </h1>
        </div>
      )}

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
