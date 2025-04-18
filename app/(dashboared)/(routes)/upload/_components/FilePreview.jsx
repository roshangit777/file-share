import { X } from "lucide-react";
import Image from "next/image";
import React from "react";

const FilePreview = ({ file, setFile }) => {
  console.log(file);

  return (
    <div className="inline-flex items-center justify-center gap-2 mt-5 border rounded-md w-fit">
      <div className="flex items-center justify-center p-4 gap-4">
        <Image src={"/file.svg"} width={40} height={40} alt="image's preview" />
        <div className="text-left w-[80%] overflow-hidden text-ellipsis">
          <h2 className="text-[10px] md:text-[14px] text-wrap">{file.name}</h2>
          <h2 className="md:text-[12px] text-[10px] text-gray-400">
            {file?.type} / {(file.size / 1024 / 1024).toFixed(2)}MB
          </h2>
        </div>
        <X className="text-red-500" onClick={() => setFile(null)} />
      </div>
    </div>
  );
};

export default FilePreview;
