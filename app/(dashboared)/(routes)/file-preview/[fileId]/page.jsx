"use client";
import LoaderPage from "@/app/_components/LoaderPage";
import { app } from "@/firebaseconfig";
import { useUser } from "@clerk/nextjs";
import { getFirestore, updateDoc } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { SquareArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const FilePreview = ({ params }) => {
  const db = getFirestore(app);
  const router = useRouter();
  const { user } = useUser();
  const getfileId = params;
  const [isChecked, setIsChecked] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [sendToEmail, setSendToEmail] = useState("");
  const [sendingEmail, setSendingEmail] = useState(false);
  const [previewFile, setPreviewFile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData(getfileId);
  }, []);
  const getData = async (getfileId) => {
    const fileId = await getfileId?.fileId;
    const docRef = doc(db, "uploadedFile", fileId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setPreviewFile(docSnap.data());
      setLoading(false);
    } else {
      console.log("No such document!");
    }
  };

  const updatePassword = async (getfileId) => {
    const fileId = await getfileId?.fileId;
    const docRef = doc(db, "uploadedFile", fileId);
    try {
      await updateDoc(docRef, {
        password: newPassword,
      });
      toast.success("Password updated successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to update password");
    }
  };

  const sendEmailToUser = async (sendToEmail, previewFile) => {
    const loadingToast = toast.loading("Sending Email...");
    setSendingEmail(true);
    try {
      await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({
          recepientEmail: sendToEmail,
          previewFile,
          user,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success === false) {
            toast.error("Failed to send email", { id: loadingToast });
          } else {
            toast.success("Email sent successfully", { id: loadingToast });
          }
        });
    } catch (error) {
      console.log("Eroro from catch:", error);
      toast.error("Failed to send email", { id: loadingToast });
    } finally {
      setSendingEmail(false);
    }
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <LoaderPage />
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full mt-30 md:mt-0 md:w-full p-5">
      <div className="self-start hover:border-2 hover:border-gray-600 rounded-md p-2 mb-10 md:mt-10 md:mb-10">
        <button
          className="flex gap-2 items-center text-lg"
          onClick={() => router.push("/upload")}
        >
          <SquareArrowLeft className="w-6 md:w-9 h-6 md:h-9" />
          <h4 className="text-sm font-semibold">Go to Uplaod</h4>
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-8 p-6 md:p-10 rounded-2xl justify-center items-center w-full">
        <div className="w-full border-2 border-blue-100 px-20 py-10 md:px-40 md:py-20 rounded-2xl flex flex-col items-center gap-10">
          <div className="w-fit">
            <img
              src={previewFile?.fileUrl?.url || null}
              className="w-50 h-45 rounded-lg"
              alt="file preview"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <h3 className="text-sm font-semibold text-center overflow-hidden text-ellipsis whitespace-nowrap w-[200px] md:w-[300px]">
              {previewFile?.fileName || ""}
            </h3>
            <p className="text-[12px] text-gray-400">
              {previewFile?.fileType || ""}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10 w-full">
          <div className="">
            <h3 className="text-md text-gray-400 mb-2 font-semibold">
              Short Url
            </h3>
            <input
              type="text"
              value={previewFile?.shortUrl || ""}
              readOnly
              className="text-sm md:text-md border-2 border-gray-400 w-full md:w-[78%] p-2 rounded-lg"
            />
          </div>
          <div className="">
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="accent-blue-600 w-5 h-5 mb-2"
              />
              <h3
                className={`text-sm font-semibold mb-2 ${
                  isChecked ? "text-gray-800" : "text-gray-400"
                }`}
              >
                Enable password?
              </h3>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="password"
                className={`text-sm md:text-md border-2 border-gray-400 w-full md:w-2/3 p-2 rounded-lg ${
                  isChecked ? "bg-white" : "bg-gray-100"
                }`}
                disabled={!isChecked}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
              />
              <button
                disabled={!isChecked}
                className="cursor-pointer px-4 py-2 md:py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                onClick={() => updatePassword(getfileId)}
              >
                Save
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 border-2 border-gray-200 p-5 rounded-lg full md:w-[78%]">
            <h3 className="text-sm md:text-lg text-gray-400 mb-2 font-semibold">
              Send file to Email
            </h3>
            <input
              type="email"
              placeholder="example@gmail.com"
              value={sendToEmail}
              onChange={(e) => setSendToEmail(e.target.value)}
              className="border-2 border-gray-400 w-full p-2 rounded-lg mb-2 text-sm md:text-md"
            />
            <button
              disabled={sendingEmail}
              className="text-sm md:text-md px-4 py-2.5 bg-blue-600 text-white font-semibold rounded-md disabled:bg-gray-400 hover:bg-blue-700"
              onClick={() => {
                sendEmailToUser(sendToEmail, previewFile);
              }}
            >
              {sendingEmail ? "Sending Email ..." : "Send Email"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilePreview;
