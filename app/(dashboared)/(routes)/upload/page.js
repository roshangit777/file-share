"use client";
import React, { useState } from "react";
import UploadForm from "./_components/UploadForm";
import toast from "react-hot-toast";
import { generateRandomString } from "@/app/_utils/GenerateRandomString";
import { app } from "@/firebaseconfig";
import { useUser } from "@clerk/nextjs";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
const Upload = () => {
  const [uploading, setUploading] = useState(false);
  const db = getFirestore(app);
  const { user } = useUser();
  const router = useRouter();
  const handleUpload = async (file) => {
    if (!file) return alert("Please select a file");
    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploading(true);
      const loadingToast = toast.loading("Uploading...");
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        console.log(data);
        const docId = generateRandomString(6);
        await setDoc(doc(db, "uploadedFile", docId), {
          fileName: file.name,
          fileSize: file.size,
          fileType: file.type,
          fileUrl: data,
          userEmail: user.primaryEmailAddress.emailAddress,
          userName: user.fullName,
          password: "",
          id: docId,
          shortUrl: process.env.NEXT_PUBLIC_BASE_URL + "f/" + docId,
          previewUrl:
            process.env.NEXT_PUBLIC_BASE_URL + "file-preview/" + docId,
        });
        toast.success("Upload completed!", { id: loadingToast });
        router.push(`/file-preview/${docId}`);
      } else {
        toast.error("Upload failed! Please try again.", { id: loadingToast });
      }
    } catch (error) {
      toast.error("Upload failed!", { id: loadingToast });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-5 px-8 md:px-28">
      <h2 className="text-3xl text-center m-5">
        Start <strong className="text-primary">Uploading</strong> file and{" "}
        <strong className="text-primary">Share </strong>
        it{" "}
      </h2>
      <UploadForm handleUpload={handleUpload} uploading={uploading} />
    </div>
  );
};

export default Upload;
