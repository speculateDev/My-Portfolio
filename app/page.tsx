import { Toaster } from "react-hot-toast";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Footer from "./sections/Footer";

export default function Page() {
  return (
    <div id="home" className="relative">
      {/*  Grain bg */}
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{ backgroundImage: `url(/grain.webp)` }}
      ></div>

      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "2px solid rgba(255, 255, 255, 0.3)",
            color: "#fff",
            minWidth: "300px",
          },
        }}
      />
    </div>
  );
}
