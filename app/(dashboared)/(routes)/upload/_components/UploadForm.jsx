"use client";
import React, { useState } from "react";
import AlertMsg from "./AlertMsg";
import FilePreview from "./FilePreview";
import toast from "react-hot-toast";

const UploadForm = ({ uploading, handleUpload }) => {
  const [file, setFile] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const onFileSelect = (file) => {
    if (file.size > 2000000) {
      setErrorMsg("Size should be less than 2 MB");
      toast.error("Size should be less than 2 MB");
      return;
    }
    setErrorMsg(null);
    setFile(file);
  };
  return (
    <div className="text-center">
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-[80%] h-100 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-blue-50  dark:bg-blue-50 hover:bg-gray-300"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-12 h-12 mb-4 text-blue-500 dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="text-lg md:text-2xl text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or{" "}
              <strong className="text-primary">drag</strong> and
              <strong className="text-primary"> drop</strong>
            </p>
            <p className="text-sm md:text-[16px] text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX Size : 2MB)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(event) => onFileSelect(event.target.files[0])}
          />
        </label>
      </div>
      {errorMsg ? <AlertMsg msg={errorMsg} /> : <></>}
      <div className="flex flex-col justify-center items-center">
        {file ? <FilePreview file={file} setFile={setFile} /> : null}
        <button
          disabled={!file}
          className="text-white md:p-2 py-2 bg-blue-600 md:w-[20%] w-[36%] mt-5 md:rounded-full rounded-xl cursor-pointer hover:bg-blue-800 disabled:bg-gray-400"
          onClick={() => handleUpload(file)}
        >
          {uploading ? "Uploading ..." : "Upload"}
        </button>
      </div>
    </div>
  );
};

export default UploadForm;
