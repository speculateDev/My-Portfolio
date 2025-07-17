import { ReactNode } from "react";

interface SkillIconPrps {
  children: ReactNode;
  className: string;
}

function SkillIcon({ className, children }: SkillIconPrps) {
  return (
    <span className={`${className} p-2 inline-block rounded-full`}>
      {children}
    </span>
  );
}

export default SkillIcon;
