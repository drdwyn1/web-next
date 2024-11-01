"use client";
import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import { LampContainer, LampDemo } from "../ui/lamp";
// import TextTransition, { presets } from 'react-text-transition';

const myNames = [
  "Δ <| i ! ! Sir",
  "Aditya",
  "Ummm... Haddi",
  "karejaa💕",
  "Bandar🐒",
  "Chirkut",
];
const princessNames = [
  "$hivi! Ma'am",
  "Shivangi",
  "Princess👑",
  "jaan❤️",
  "Bandariya🐒",
  "Panda",
];

const HeroText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId1 = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 3 seconds
    );
    const intervalId2 = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 3 seconds
    );
    return () => {
      clearTimeout(intervalId1);
      clearTimeout(intervalId2);
    };
  }, []);

  return (
    <>
      <div className="w-full h-screen grid place-items-center">
        <div className="flex flex-col bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-6xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          <div className="flex flex-row">
            To meri pyari...
            <span>
              <TextTransition springConfig={presets.wobbly}>
                <h1 className="text-pink-500">
                  {" "}
                  {princessNames[index % princessNames.length]}
                </h1>
              </TextTransition>
            </span>
          </div>
          <br />
          <br />
          <div className="flex flex-row">
            with love<span className="text-red-500">❤️</span> from her...
            <br />
            <h1 className="text-yellow-400 font-dosis">
              <TextTransition springConfig={presets.wobbly}>
                {myNames[index % myNames.length]}
              </TextTransition>
            </h1>
          </div>
        </div>
        <h1 className="color-changing-animation bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-4xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Scroll down{" "}
          <span className="bg-clip-text font-kalam text-transparent text-center bg-gradient-to-b from-[#43C6AC] to-[#F8FFAE] text-2xl md:text-4xl lg:text-4xl py-2 md:py-10 relative z-20 font-bold tracking-tight">
            प्रिये💕
          </span>
        </h1>
      </div>
    </>
  );
};

export default HeroText;
