import AboutSlider from "@/components/About/AboutSlider";
import ChooseUs from "@/components/ChooseUs";
import Features from "@/components/FeatuersSection/Features";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <ChooseUs />
      <Quote />
      <AboutSlider />
      <Footer />
    </>
  );
}
