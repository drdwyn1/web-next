import { CompareDemo } from "@/components/compareDemo/compareDemo";
import Footer from "@/components/footer/Footer";
import HeroText from "@/components/heroText/heroText";
import { BackgroundLines } from "@/components/ui/background-lines";
import { LampDemo } from "@/components/ui/lamp";
import WavyBackground from "@/components/wavyBackground/wavyBackground";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <WavyBackground />
      <HeroText />
      <LampDemo />
      <CompareDemo />
      <Footer />
    </>
  );
}
