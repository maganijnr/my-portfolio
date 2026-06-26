import React from "react";

export default function ContactInfo() {
  return (
    <div className="mt-4 space-y-1">
      <div className="w-full flex items-center justify-start gap-2">
        <p className="font-medium text-sm text-black">Email:</p>
        <p className="text-sm text-black">maganijoshua25@gmail.com</p>
      </div>
      <div className="w-full flex items-center justify-start gap-2">
        <p className="font-medium text-sm text-black">Phone:</p>
        <p className="text-sm text-black">(+234) 8189709386</p>
      </div>
    </div>
  );
}
