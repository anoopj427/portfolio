import React from "react";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import BlurBlob from "./components/BlurBlob";

export default function App() {
  return (
    <div className="bg-[#050414]">
      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      />
      <div className="relative"></div>
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
