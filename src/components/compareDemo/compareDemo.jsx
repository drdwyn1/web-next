"use client";
import React from "react";
import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
  return (
    (<div
      className="p-4 w-full flex flex-col items-center md:text-7xl justify-center gap-4 border rounded-3xl dark:bg-black dark:border-neutral-800 px-4">
        <h1 className="text-center">
          The transition I wish in your life from udaasi to muskurahat❤️
        </h1>
      <Compare
        firstImage="assets/one.jpg"
        secondImage="assets/three.jpg"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover" />
    </div>)
  );
}
