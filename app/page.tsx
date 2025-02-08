"use client"
import Introbg from "@/components/Intro/Introbg";
import Introtrending from "@/components/Intro/Introtrending";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("")
  const handleEmail = (email: string) => {
    setEmail(email)
  }
  console.log(email)
  return (
    <div className="relative w-full h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Intro Background */}
      <Introbg onEmailChange={handleEmail} />

      {/* Intro Trending */}
      <Introtrending />
    </div>
  );
}
