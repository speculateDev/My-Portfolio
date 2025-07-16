import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "A Booking web app, client side",
    details: [
      "Allows authenticated users to book, edit delete reservations, update their profile",
      "Levereged Next.js ecosystem to optimize SEO metric",
      "Authentication through Auth.js",
    ],
    link: "https://wild-oasis-client.vercel.app/",
    repo: "https://github.com/speculateDev/wild-oasis-client",
    image: "/project1.png",
  },
  {
    title: "A Booking web app, Admin side",
    details: [
      "SPA that allows admin operations on bookings such as check-in, delete, and check-out",
      "Includes CRUD operations on cabins",
      "Animated data visualizations, and filtering/sorting through URL query parameters",
    ],
    link: "https://wild-oasis-admin-side.netlify.app",
    repo: "https://github.com/speculateDev/the-wild-oasis-admin",
    image: "/project2.png",
  },
  {
    title: "CV Maker",
    details: [
      "Single page app",
      "An interface where users can input personal information, education, work experience, skills.",
      "The application includes one template with export option in PDF format.",
    ],
    link: "https://cv-builder-123.netlify.app/",
    repo: "https://github.com/speculateDev/CV-Maker",
    image: "/project-3.png",
  },
  {
    title: "Modern Landing Page",
    details: [
      "Generic Modern landing page for Saas",
      "Used Framer Motion to craft multiple animations",
      "Performance and Seo optimized through Next.js",
    ],
    link: "https://saas-light-landing.vercel.app/",
    repo: "https://github.com/speculateDev/Saas-light-landing",
    image: "/project-4.png",
  },
];

function Projects() {
  return (
    <section className="py-28" id="projects">
      <div className="lg-container">
        <p className="section-subtitle">Crafted with Passion</p>
        <h2 className="text-center text-3xl sm:text-5xl mt-4 font-bold">
          Featured Projects
        </h2>

        <div className="flex flex-col gap-10 mt-10 md:mt-20">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
