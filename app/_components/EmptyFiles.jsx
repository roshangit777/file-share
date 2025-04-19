import React from "react";

const EmptyFiles = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-semibold">No files found</h1>
      <p className="text-gray-500">Please upload a file to see it here.</p>
    </div>
  );
};

export default EmptyFiles;
