import { LoaderCircleIcon } from "lucide-react";

function SubmitBtn({
  label,
  pendingLabel,
  isPending,
}: {
  label: string;
  pendingLabel?: string;
  isPending: boolean;
}) {
  return (
    <button
      disabled={isPending}
      type="submit"
      className="px-4 py-2 hover:bg-white hover:text-gray-950 border-2 border-white/50 font-medium cursor-pointer rounded-lg mt-4 transition-colors duration-500"
    >
      {isPending ? (
        <span className="flex gap-3">
          <LoaderCircleIcon className="animate-spin" />
          {pendingLabel}
        </span>
      ) : (
        <span>{label}</span>
      )}
    </button>
  );
}

export default SubmitBtn;
