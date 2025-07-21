import { ArrowRight, CheckCircle2, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  details: string[];
  link: string;
  repo: string;
  image: string;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div
      className="p-10 border-2 border-white/20 rounded-lg bg-[#101116] sticky overflow-hidden"
      style={{
        top: `calc(80px + ${index * 50}px)`,
      }}
    >
      <div className="lg:grid lg:grid-cols-2 lg:gap-5 lg:min-h-[450px]">
        <div className="h-full flex flex-col mb-5 lg:mb-0">
          <h3 className="text-3xl font-geist font-medium">{project.title}</h3>
          <hr className="border-t-2 text-white/10 mt-3 md:mt-6" />

          <ul className="flex flex-col gap-2 sm:gap-5 mt-2 md:mt-6">
            {project.details.map((detail) => (
              <li
                key={detail}
                className="flex text-white/50 gap-2 text-xs items-start md:text-lg"
              >
                <CheckCircle2 className="size-5 flex-shrink-0 mt-0.5" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>

          <div className="flex gap-5 lg:mt-auto mt-5">
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 sm:gap-3 items-center px-2 sm:px-5 sm:py-3 border border-white/20 text-xs sm:text-sm rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              <span>Visit live site</span>
              <ArrowRight className="size-5 group-hover:rotate-60 transition duration-300" />
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={project.repo}
              className="flex gap-1 sm:gap-3 items-center px-2 sm:px-5 py-3 border border-white/20 text-xs sm:text-sm rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              <span>Visit Repo</span>
              <Github className="size-5" />
            </Link>
          </div>
        </div>

        <div className="relative aspect-square translate-y-[-50px] -z-1 lg:z-auto">
          <Image
            fill
            className="object-contain absolute lg:mt-0 hover:scale-110 transition-all rounded-lg"
            alt={project.title}
            src={project.image}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
