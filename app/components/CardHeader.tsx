import { Star } from "lucide-react";

function CardHeader({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <Star className="text-yellow-600 size-6 md:size-4 lg:size-6 animate-pulse" />
      <h2 className="font-geist text-neutral-100 font-bold text-4xl md:text-2xl lg:text-4xl">
        {text}
      </h2>
    </div>
  );
}

export default CardHeader;
