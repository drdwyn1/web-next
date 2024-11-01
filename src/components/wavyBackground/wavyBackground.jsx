import React from "react";
import { BackgroundLines } from "../ui/background-lines";

function WavyBackground() {
  return (
    <div className="wavy-background absolute top-0 left-0 -z-50 h-screen w-screen">
      <BackgroundLines />
    </div>
  );
}

export default WavyBackground;
