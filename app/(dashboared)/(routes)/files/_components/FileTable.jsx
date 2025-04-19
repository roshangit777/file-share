import EmptyFiles from "@/app/_components/EmptyFiles";
import React from "react";

const FileTable = ({ files }) => {
  return (
    <>
      {files.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  File Name
                </th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  Type
                </th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  Size
                </th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  Link
                </th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {files?.map((file, index) => {
                return (
                  <tr key={index}>
                    <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                      {file?.fileName}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                      {file?.fileType}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                      {(file?.fileSize / 1024 / 1024).toFixed(2)}mb
                    </td>

                    <td className="px-4 py-2 whitespace-nowrap">
                      <a
                        href={file?.previewUrl}
                        className="inline-block rounded-sm bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <EmptyFiles />
      )}
    </>
  );
};

export default FileTable;
