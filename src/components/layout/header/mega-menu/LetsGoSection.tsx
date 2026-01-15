"use client";

import React from "react";

export const LetsGoSection: React.FC = () => {
  return (
    <div className="mt-16 md:mt-24">
      <h3
        className="text-5xl md:text-7xl font-bold mb-6"
        style={{
          WebkitTextStroke: "1px rgba(255,255,255,0.3)",
          WebkitTextFillColor: "transparent",
        }}
      >
        Let&apos;s Go
      </h3>
      <div className="relative w-32 h-32 md:w-40 md:h-40">
        <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-12 h-12 md:w-16 md:h-16 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </div>
      </div>
    </div>
  );
};
