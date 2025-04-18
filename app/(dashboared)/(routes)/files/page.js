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

const Files = () => {
  const db = getFirestore(app);
  const [allfiles, setAllFiles] = useState([]);
  const { user, isLoaded } = useUser();

  // ✅ Ensure hooks are called before any return statement
  useEffect(() => {
    if (user?.emailAddresses[0]?.emailAddress) {
      getFilesByUsername(user.emailAddresses[0].emailAddress);
    }
  }, [user?.fullName]); //

  async function getFilesByUsername(email) {
    if (!email) return; // ✅ Prevent Firestore query with undefined

    try {
      const filesRef = collection(db, "uploadedFile");
      const q = query(filesRef, where("userEmail", "==", email)); // ✅ Use email address from user object
      const querySnapshot = await getDocs(q);

      const files = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log("Retrieved files:", files);
      setAllFiles(files); // ✅ Fix: Replace old state instead of mutating
      toast.success("Files fetched successfully");
    } catch (error) {
      console.error("Error fetching files:", error);
      toast.error("Failed to fetch files");
    }
  }

  // ✅ Return Loading only when necessary
  if (!isLoaded) return <div>Loading...</div>;
  if (!user) {
    toast.error("User not found");
    return null;
  }

  return <FileTable files={allfiles} />;
};

export default Files;
