"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkels";

export function SparklesHeading({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading: string;
}) {
  return (
    <div className="h-40 w-full bg-transparent flex flex-col items-center justify-end overflow-hidden rounded-md relative ">
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-neutral-800 relative z-20">
        {heading}
      </h1>
      <div className="w-[40rem] h-40 relative rounded-b-2xl overflow-hidden flex flex-col items-center">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        <p className="mt-6 absolute">{subHeading}</p>

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full rounded-b-2xl overflow-hidden"
          particleColor="#000000"
        />
        <div className="absolute inset-0 w-full h-full bg-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
