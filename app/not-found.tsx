import Link from "next/link";

function NotFound() {
  return (
    <div className="font-geist lg-container h-screen max-h-screen  flex flex-col items-center justify-center overflow-hidden select-none">
      <p className="text-9xl font-black bg-gradient-to-r from-white/5 to-white/60 p-5 text-transparent bg-clip-text">
        404
      </p>

      <div
        className="absolute top-1/2 left-1/2 size-170 pointer-events-none opacity-40 -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(200, 200, 200, 0.2) 0%, rgba(200, 200, 200, 0) 70%)",
          zIndex: "-2",
        }}
      ></div>

      <div className="flex gap-4">
        <p className="text-white/60 tracking-wider">The page does not exist.</p>
        <Link
          className="text-white/20 underline hover:underline-offset-4 transition-all"
          href="/"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
