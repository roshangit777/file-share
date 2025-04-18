"use client";

import { app } from "@/firebaseconfig";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import FileItem from "./_components/FileItem";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const FileView = ({ params }) => {
  const getFileId = params;
  const db = getFirestore(app);
  const [fileView, setFileView] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData(getFileId);
  }, []);

  const getData = async (getfileId) => {
    const fileId = await getfileId?.fileId;
    const docRef = doc(db, "uploadedFile", fileId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setFileView(docSnap.data());
      setLoading(false);
    } else {
      console.log("No such document!");
    }
  };

  return (
    <div className="bg-gray-100  h-screen w-full flex justify-center items-center flex-col gap-4">
      <Link href={"/"}>
        <Image src="/logo.svg" width={100} height={100} alt="logo" />
      </Link>

      <FileItem file={fileView} loading={loading} />
    </div>
  );
};

export default FileView;
