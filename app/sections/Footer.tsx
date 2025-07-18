function Footer() {
  return (
    <footer className="py-24 relative overflow-x-clip">
      <div className="absolute bottom-0 h-[500px] w-[1600px] bg-white/60 left-1/2 -translate-x-1/2 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] pointer-events-none "></div>
      <div className="lg-container border-t border-white/10 flex py-4 justify-center">
        <p className="font-geist text-white/50">
          &copy; 2025 All, rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
