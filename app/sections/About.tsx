import Image from "next/image";
import JungImg from "../../public/jung.png";
import CardHeader from "../components/CardHeader";
import SkillsCard from "../components/SkillsCard";
import MapImg from "../../public/map.png";
import Me from "../../public/ghibli.png";

function About() {
  return (
    <section
      id="about"
      className="py-28 md:py-32 lg:py-40 px-4 md:px-0 relative"
    >
      <div className="lg-container">
        <p className="section-subtitle">About Me</p>
        <h2 className="section-title">Get to Know Me</h2>

        <div className="w-full flex flex-col md:grid md:grid-cols-6 gap-8 mt-25">
          {/* Hobbies Card */}
          <div className="card col-span-2 h-90">
            <CardHeader text="My Reads" />

            <p className="text-white/40 text-xs lg:text-sm mt-1 md:mt-5">
              Favourite author,{" "}
              <strong className="text-white/60">Carl Jung</strong> <br />
              the investigator of the unconscious
            </p>

            <div className="relative aspect-square rounded-xl mt-10 md:mt-18 lg:mt-10">
              <Image
                alt="Carl Jung"
                src={JungImg}
                fill
                className="rounded-xl"
              />
            </div>
          </div>

          {/* Tools Card */}
          <SkillsCard />

          {/* Map Card */}
          <div className="col-start-2 col-span-3 card h-90 relative">
            <div className="size-20 absolute z-2 inset-1/2 -translate-1/2 rounded-full after:content-[''] after:absolute after:inset-0  after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-white/5">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 -z-20 animate-ping [animation-duration:2s]"></div>
              <Image
                className="size-20 rounded-full"
                src={Me}
                alt="My profile"
              />
            </div>
            <Image alt="Map" src={MapImg} fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
