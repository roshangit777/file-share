"use client";
import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { app } from "@/firebaseconfig";
import { useUser } from "@clerk/nextjs";
import toast from "react-hot-toast";
import FileTable from "./_components/FileTable";
import LoaderPage from "@/app/_components/LoaderPage";

const Files = () => {
  const db = getFirestore(app);
  const [allfiles, setAllFiles] = useState([]);
  const { user, isLoaded } = useUser();
  const [loading, setLoading] = useState(true);

  // ✅ Ensure hooks are called before any return statement
  useEffect(() => {
    if (user?.emailAddresses[0]?.emailAddress) {
      getFilesByUsername(user.emailAddresses[0].emailAddress);
    }
  }, [user?.emailAddresses?.[0]?.emailAddress]); //

  async function getFilesByUsername(email) {
    if (!email) return; // ✅ Prevent Firestore query with undefined

    try {
      const FetchingToast = toast.loading("fetching your files...");
      const filesRef = collection(db, "uploadedFile");
      const q = query(filesRef, where("userEmail", "==", email)); // ✅ Use email address from user object
      const querySnapshot = await getDocs(q);

      const files = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setAllFiles(files); // ✅ Fix: Replace old state instead of mutating
      toast.success("Files fetched successfully", { id: FetchingToast });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching files:", error);
      toast.error("Failed to fetch files", {
        id: FetchingToast,
      });
      setLoading(false);
    }
  }

  // ✅ Return Loading only when necessary
  if (!isLoaded)
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <LoaderPage />
      </div>
    );

  if (!user) {
    toast.error("User not found");
    return null;
  }

  if (loading) {
    <div className="flex items-center justify-center h-screen w-full">
      <LoaderPage />
    </div>;
  }

  return <FileTable files={allfiles} />;
};

export default Files;
