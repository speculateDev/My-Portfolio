import { ReactNode } from "react";

function SkillBox({
  className,
  children,
  text,
}: {
  className?: string;
  children: ReactNode;
  text: string;
}) {
  return (
    <div
      className={`inline-flex items-center py-1.5 px-4 rounded-xl bg-white/5 gap-2 border border-white/20 hover:shadow-xl hover:shadow-white/10 hover:-translate-y-1 transition duration-300 select-none ${
        className ? className : ""
      }`}
    >
      {children}
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}

export default SkillBox;
