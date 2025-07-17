import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="py-28 md:py-32 lg:py-40 relative">
      <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_60%,transparent)] -z-10">
        <div
          className="absolute inset-0 opacity-5 -z-30"
          style={{ backgroundImage: `url(/pattern.png)` }}
        ></div>
      </div>

      <div className="sm-container relative px-6 sm:px-0">
        <div className="hidden right-[-30px] sm:inline-flex badge items-center gap-1 rounded-full absolute top-0 lg:right-2 px-3 py-1.5 bg-sky-400/10 text-white/80 border border-sky-400/20 text-xs">
          <strong className="">2+</strong> years of experience
        </div>
        <div className="flex flex-col items-center">
          <div className="relative size-25 aspect-square rounded-full  outline-3 outline-white/30 outline-offset-4  ">
            <Image
              fill
              className="rounded-full"
              src="/my-picture.jpg"
              alt="my Picture"
            />
          </div>

          <div className="inline-flex items-center gap-3 bg-neutral-900 py-2 px-4 rounded-xl relative -mt-2 z-2 border border-white/20">
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
            </span>{" "}
            <p className="text-sm text-white font-medium">
              Open to new opportunities
            </p>
          </div>

          <div className="text-xl sm:text-2xl font-bold md:text-5xl mt-8 text-white/90 text-center lg:leading-15">
            <h1>
              Hi, I&apos;m Sidali, a frontend developer, on my path to become{" "}
            </h1>
            <span className="typewriter max-w-min inline-block">
              a full-stack web developer.
            </span>
          </div>

          <p className="text-white/40 lg:mt-4 sm:mt-2 md:mt-3 mt-1 w-full text-center text-xs  sm:text-base">
            I specialize in crafting performant, responsive, aesthetically
            pleasing digital experiences
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
