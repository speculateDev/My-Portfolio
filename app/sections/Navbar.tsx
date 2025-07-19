"use client";

import { HomeIcon, Briefcase, Telescope, Send, Info } from "lucide-react";
import { useEffect, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveSection(window.location.hash);

      if (location.hash.length > 1) {
        const tab = document.querySelector(
          `.${window.location.hash.slice(1)}-nav`
        );

        updateIndicator(tab!);
      } else {
        const tab = document.querySelector(".home-nav") as Element;

        updateIndicator(tab);
      }
      const handleHashChange = () => {
        const hash = window.location.hash;
        setActiveSection(hash);
      };

      window.addEventListener("hashchange", handleHashChange);

      return () => {
        window.removeEventListener("hashchange", handleHashChange);
      };
    }
  }, []);

  function updateIndicator(e?: React.MouseEvent<HTMLAnchorElement> | Element) {
    // Get NavRow
    const navRow = document.querySelector(".nav-row");
    const navBounds = navRow?.getBoundingClientRect();

    let target;
    if (e instanceof Element) {
      target = e;
    } else if (e) {
      target = e.target as HTMLElement;
    }

    const tab = target?.closest(".tab");
    const tabBounds = tab?.getBoundingClientRect();

    // Get offset
    if (!tabBounds || !navBounds) return;
    const width = tabBounds?.width;
    const offset = tabBounds?.left - navBounds?.left;

    gsap.to(".indicator", {
      x: offset,
      width: `${width - 10}px`,
      duration: 0.4,
      ease: "back.out(5)",
    });
  }

  return (
    <div className="fixed top-5 flex-center w-full z-10">
      {/* Logo */}
      <a
        href="https://github.com/speculateDev"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:block left-[8%] size-10 absolute cursor-pointer"
        aria-label="Visit GitHub profile"
      >
        <div className="absolute -inset-2 rotate-arc">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <path
              d="M29.465,0.038373A28,28,0,0,1,52.948,40.712L51.166,39.804A26,26,0,0,0,29.361,2.0356Z"
              className="arc-blue"
              fill="currentColor"
            ></path>
            <path
              d="M51.483,43.250A28,28,0,0,1,4.5172,43.250L6.1946,42.161A26,26,0,0,0,49.805,42.161Z"
              className="arc-red"
              fill="currentColor"
            ></path>
            <path
              d="M3.0518,40.712A28,28,0,0,1,26.535,0.038373L26.639,2.0356A26,26,0,0,0,4.8338,39.804Z"
              className="arc-yellow"
              fill="currentColor"
            ></path>
          </svg>{" "}
        </div>

        <Image
          src={"/profile.svg"}
          alt="Profile picture"
          fill
          className="rounded-full"
        />
      </a>

      <nav
        className="flex gap-1 bg-white/5 p-1 backdrop-blur border border-white/15 rounded-xl nav-row relative"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="indicator fixed bottom-0 h-[2.5px] bg-linear-to-r from-white/30 to-white/80 rounded-md" />

        <a
          className={`nav-item tab flex items-center home-nav ${
            activeSection === "#home" || activeSection === "" ? "active" : ""
          }`}
          href="#home"
          onClick={updateIndicator}
          aria-label="Home"
          aria-current={
            activeSection === "#home" || activeSection === ""
              ? "page"
              : undefined
          }
        >
          <HomeIcon className="size-4" aria-hidden="true" />
          <span className="sr-only">Home</span>
        </a>

        <div className="py-1.5">
          <span className="border-r border-white/20" />
        </div>

        <a
          className={`nav-item tab flex gap-4 projects-nav items-center ${
            activeSection === "#projects" ? "active" : ""
          }`}
          href="#projects"
          onClick={updateIndicator}
          aria-current={activeSection === "#projects" ? "page" : undefined}
        >
          <Briefcase className="size-4" aria-hidden="true" />
          <span className="hidden md:inline">Projects</span>
          <span className="sr-only md:hidden">Projects</span>
        </a>

        <a
          className={`nav-item tab skills-nav flex items-center gap-4 ${
            activeSection === "#skills" ? "active" : ""
          }`}
          href="#skills"
          onClick={updateIndicator}
          aria-current={activeSection === "#skills" ? "page" : undefined}
        >
          <Telescope className="size-4" aria-hidden="true" />
          <span className="hidden md:inline">Skills</span>
          <span className="sr-only md:hidden">Skills</span>
        </a>

        <a
          className={`nav-item tab contact-nav flex items-center gap-4 ${
            activeSection === "#about" ? "active" : ""
          }`}
          href="#about"
          onClick={updateIndicator}
          aria-current={activeSection === "#about" ? "page" : undefined}
        >
          <Info className="size-4" aria-hidden="true" />
          <span className="hidden md:inline">About</span>
          <span className="sr-only md:hidden">About</span>
        </a>

        <a
          className={`nav-item tab contact-nav flex items-center gap-4 ${
            activeSection === "#contact" ? "active" : ""
          }`}
          href="#contact"
          onClick={updateIndicator}
          aria-current={activeSection === "#contact" ? "page" : undefined}
        >
          <Send className="size-4" aria-hidden="true" />
          <span className="hidden md:inline">Contact</span>
          <span className="sr-only md:hidden">Contact</span>
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
