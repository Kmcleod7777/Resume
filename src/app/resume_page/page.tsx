"use client";

import { useState } from "react";

export default function ResumePage() {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <object
        data="/Resume.pdf"
        type="application/pdf"
        className="w-full h-[calc(100vh-2rem)]"
      >
        <p>
          Unable to display PDF file.{" "}
          <a href="/Resume.pdf" className="text-blue-500 hover:underline">
            Download
          </a>{" "}
          instead.
        </p>
      </object>
    </div>
  );
}
