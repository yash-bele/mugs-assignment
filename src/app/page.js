"use client";
import { useEffect } from "react";
import About from "@/components/About";
import Banner from "@/components/Banner";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className="w-full h-screen bg-zinc-900 text-white">
      <Navbar />
      <Banner />
      <Marquee />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
