import { ReactNode } from "react";

function FormError({ children }: { children: ReactNode }) {
  return (
    <div className="text-red-500 font-bold flex gap-1 text-xs mt-1">
      <span className="font-bolder">&#9888;</span>
      {children}
    </div>
  );
}

export default FormError;
