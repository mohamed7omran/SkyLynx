import AboutSlider from "@/components/About/AboutSlider";
import ChooseUs from "@/components/ChooseUs";
import Features from "@/components/FeatuersSection/Features";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ChooseUs />
      <Quote />
      <AboutSlider />
    </>
  );
}
