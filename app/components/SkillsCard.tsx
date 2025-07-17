import CardHeader from "./CardHeader";
import SkillBox from "./SkillBox";

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
import Express from "../../public/logos/express.svg";
import Zustand from "../../public/logos/zustand.svg";
import Redux from "../../public/logos/redux.svg";

function SkillsCard() {
  return (
    <div className="card col-span-4">
      <CardHeader text="My Tools" />

      <p className="text-white/40 text-sm mt-1 mb-12">
        In case you are uncomfortable with rotating icons...
      </p>

      <div className="flex flex-wrap gap-3">
        <SkillBox text="ReactJs">
          <ReactLogo className="size-5" />
        </SkillBox>

        <SkillBox text="NextJs">
          <NextLogo className="size-5" />
        </SkillBox>

        <SkillBox text="Tailwind">
          <Tailwind className="size-5 text-sky-400" />
        </SkillBox>

        <SkillBox text="Git">
          <Git className="size-5" />
        </SkillBox>

        <SkillBox text="MongoDB">
          <Mongodb className="size-5" />
        </SkillBox>

        <SkillBox text="PostgreSQL">
          <Postgres className="size-5" />
        </SkillBox>

        <SkillBox text="NodeJs">
          <Node className="size-5" />
        </SkillBox>

        <SkillBox text="Express">
          <Express className="size-5 text-white" />
        </SkillBox>

        <SkillBox text="GSAP">
          <Gsap className="size-5" />
        </SkillBox>

        <SkillBox text="TypeScript">
          <Typescript className="size-5" />
        </SkillBox>

        <SkillBox text="JavaScript">
          <Js className="size-5" />
        </SkillBox>

        <SkillBox text="Linux">
          <Linux className="size-5" />
        </SkillBox>

        <SkillBox text="Zustand">
          <Zustand className="size-5" />
        </SkillBox>

        <SkillBox text="Redux">
          <Redux className="size-5" />
        </SkillBox>
      </div>
    </div>
  );
}

export default SkillsCard;
