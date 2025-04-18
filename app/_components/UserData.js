"use client";
import { useUser } from "@clerk/nextjs";
export function getCurrentUserData() {
  async function getUserData() {
    const { user } = await useUser();
    return user;
  }
  return getUserData();
}
