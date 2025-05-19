"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";
import Header from "./dashboard/_components/Header";

export default function Home() {
  const [selectedStep, setSelectedStep] = useState(1);

  const stepImages = {
    1: "/step1.png",
    2: "/step2.png",
    3: "/step3.png",
    4: "/step4.png",
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#eef2f5] to-[#f5f8fb] flex items-center justify-center px-4">
        <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 mt-[100px]">
          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Give AI Practice Interview.<br />
              Get Noticed. <span className="text-black font-extrabold">Land the Job</span>
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Transform interview anxiety into confidence with our AI-driven mock interview
              simulator and recruiter suggestions. It is the easiest way to get shortlisted by companies hiring with us. Do real-time interview practice.
            </p>
            <Link href="/dashboard">
              <Button className="text-lg px-6 py-3">Try mock interview Now</Button>
            </Link>
          </div>

          <div className="flex-1 relative flex justify-center">
            <Image
              src={"/unnamed.png"}
              alt="Confident candidate"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-1 rounded-lg text-sm font-bold">
              C1 Advanced
            </div>
            <div className="absolute bottom-4 right-4 bg-white shadow-md px-4 py-2 rounded-md text-sm">
              <strong>43%</strong> of your sentences had <br />
              <strong>complex structure</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Who Can Benefit Section */}
      <div className="bg-[#f8f9fb] py-20 px-4 mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Who Can Benefit from our AI Job Interview Simulator?
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
          {[
            {
              img: "/b1.webp",
              title: "Non-native English speakers",
              desc: "Enhance your English communication skills and gain confidence in interviews with tailored practice and feedback",
            },
            {
              img: "/b2.png",
              title: "Job seekers",
              desc: "Prepare for your next career move with realistic interview simulations and personalized coaching to help you stand out",
            },
            {
              img: "/b3.png",
              title: "Students and recent graduates",
              desc: "Transition smoothly from academia to the professional world with practice scenarios designed to boost your confidence",
            },
            {
              img: "/b4.png",
              title: "Career changers",
              desc: "Navigate your career transition with ease by refining your interview skills and adapting to new industry expectations",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img src={item.img} alt={item.title} className="w-24 h-24 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* New Image Showcase Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Filter for specific languages, skills, or technologies
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Visual feedback on sentence complexity, grammar, and pronunciation helps you improve faster and more effectively.
          </p>
          <div className="flex justify-center">
            <Image
              src="/28273e40-b63a-4065-a9b9-647f2ab6edef.png"
              alt="Dashboard Screenshot"
              width={900}
              height={500}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
