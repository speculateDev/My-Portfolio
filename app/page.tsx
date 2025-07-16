import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";

export default function Page() {
  return (
    <div id="home" className="relative">
      {/*  Grain bg */}
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{ backgroundImage: `url(/grain.jpg)` }}
      ></div>

      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
}
