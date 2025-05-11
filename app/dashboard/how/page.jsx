"use client";
import React, { useState } from "react";
import Image from "next/image";

function Page() {
  const [selectedStep, setSelectedStep] = useState(1);

  const stepDescriptions = [
    "Select your desired role and interview details.",
    "Practice in real–time with follow-up questions.",
    "Get actionable feedback using industry parameters.",
    "Track and improve your performance through unlimited practice.",
  ];

  const stepImages = [
    "/images/step1.png",
    "/images/step2.png",
    "/images/step3.png",
    "/images/step4.png",
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-10">How it Works?</h2>
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Step Buttons */}
        <div className="space-y-6">
          {stepDescriptions.map((desc, index) => {
            const step = index + 1;
            return (
              <div
                key={step}
                onClick={() => setSelectedStep(step)}
                className={`cursor-pointer p-4 rounded-lg shadow transition-all duration-200 border ${
                  selectedStep === step
                    ? "bg-purple-500 text-white"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                <strong>{step}.</strong> {desc}
              </div>
            );
          })}
        </div>

        {/* Display Step Image */}
        <div className="flex justify-center">
          <Image
            src={stepImages[selectedStep - 1]}
            alt={`Step ${selectedStep}`}
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
