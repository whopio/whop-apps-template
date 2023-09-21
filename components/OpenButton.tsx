"use client";
import { WhopApp } from "@/lib/iframe";

export default function OpenButton() {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
      onClick={() => WhopApp.openExternalUrl({ url: "https://google.com" })}
    >
      Click me to open Google
    </button>
  );
}
