"use client";
import { useEffect, useState } from "react";

import ReactLogo from "../../public/logos/react.svg";
import NextLogo from "../../public/logos/next.svg";
import Tailwind from "../../public/logos/tailwind.svg";
import Git from "../../public/logos/git.svg";
import Mongodb from "../../public/logos/mongodb.svg";
import Postgres from "../../public/logos/postgres.svg";
import Node from "../../public/logos/node.svg";
import Gsap from "../../public/logos/gsap.svg";
import Typescript from "../../public/logos/typescript.svg";
import Js from "../../public/logos/js.svg";
import Linux from "../../public/logos/linux.svg";

import SkillIcon from "../components/SkillIcon";
import SkillOrbit from "../components/SkillOrbit";

function Skills() {
  const [point, setPoint] = useState<string>();

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;

      if (width < 768) {
        setPoint("sm");
      } else if (width < 1200) {
        setPoint("md");
      } else {
        setPoint("lg");
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on mount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="skills" className="py-32 overflow-x-clip">
      <div className="sm-container">
        <p className="section-subtitle z-3">My Toolbox</p>
        <h2 className="section-title">My Skills</h2>
      </div>

      {/* Rings */}
      <div className="py-[42rem] relative">
        <div className="skills-ring lg:size-[600px] size-[450px]"></div>
        <div className="skills-ring lg:size-[820px] size-[700px]"></div>
        <div className="skills-ring size-[1020px]"></div>
        <div className="skills-ring size-[1220px]"></div>

        {/* Icons */}
        <SkillOrbit
          size={point === "sm" ? 160 : point === "md" ? 400 : 430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SkillIcon className="bg-sky-400/10">
            <ReactLogo className="logo-icon" />
          </SkillIcon>
        </SkillOrbit>

        <SkillOrbit
          size={point === "sm" ? 300 : point === "md" ? 500 : 440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <SkillIcon className="bg-neutral-400/20">
            <NextLogo className="logo-icon" />
          </SkillIcon>
        </SkillOrbit>

        <SkillOrbit
          size={point === "sm" ? 220 : point === "md" ? 450 : 650}
          rotation={-41}
          shouldOrbit
          shouldSpin
          orbitDuration="34s"
        >
          <SkillIcon className="bg-sky-400/10">
            <Tailwind className="logo-icon text-sky-500" />
          </SkillIcon>
        </SkillOrbit>

        <SkillOrbit
          size={point === "sm" ? 180 : point === "md" ? 350 : 640}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <SkillIcon className="bg-[#f03c2e]/20">
            <Git className="logo-icon" />
          </SkillIcon>
        </SkillOrbit>

        <SkillOrbit
          size={point === "sm" ? 250 : point === "md" ? 550 : 880}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <SkillIcon className="bg-[#4FAA41]/20">
            <Mongodb className="logo-icon" />
          </SkillIcon>
        </SkillOrbit>

        <SkillOrbit
          size={point === "sm" ? 200 : point === "md" ? 400 : 590}
          rotation={300}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <SkillIcon className="bg-[#336791]/20">
            <Postgres className="logo-icon" />
          </SkillIcon>
        </SkillOrbit>

        <SkillOrbit
          size={point === "sm" ? 280 : point === "md" ? 580 : 900}
          rotation={-5}
          shouldOrbit
          orbitDuration="42s"
        >
          <SkillIcon className="bg-[#4FAA41]/20">
            <Node className="logo-icon" />
          </SkillIcon>
        </SkillOrbit>

        <SkillOrbit
          size={point === "sm" ? 190 : point === "md" ? 450 : 790}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="3s"
        >
          <SkillIcon className="bg-neutral-400/20">
            <Gsap className="logo-icon" />
          </SkillIcon>
        </SkillOrbit>

        <SkillOrbit
          size={point === "sm" ? 210 : point === "md" ? 500 : 600}
          rotation={100}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="10s"
        >
          <SkillIcon className="bg-sky-400/20">
            <Typescript className="logo-icon" />
          </SkillIcon>
        </SkillOrbit>

        <SkillOrbit
          size={point === "sm" ? 170 : point === "md" ? 400 : 600}
          rotation={100}
          shouldOrbit
          orbitDuration="22s"
          shouldSpin
          spinDuration="10s"
        >
          <SkillIcon className="bg-yellow-400/20">
            <Js className="logo-icon" />
          </SkillIcon>
        </SkillOrbit>

        <SkillOrbit
          size={point === "sm" ? 150 : point === "md" ? 350 : 600}
          rotation={200}
          shouldOrbit
          shouldSpin
          orbitDuration="22s"
          spinDuration="15s"
        >
          <SkillIcon className="bg-yellow-400/20">
            <Linux className="logo-icon" />
          </SkillIcon>
        </SkillOrbit>
      </div>
    </section>
  );
}

export default Skills;
