import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import Untitled from "../images/Untitled.png";
import mastreadyLogo from "../images/mastready-logo.svg";

const featured = {
  title: "MASTReady",
  href: "https://mast-ready.com",
  subtitle: "Management and Scheduling for Tournaments",
  description:
    "A platform I built to run leagues end to end: rosters, game schedules, QR player profiles, lineups, waivers, and stats. Live at mast-ready.com.",
  stack: ["React", "Vite", "Tailwind CSS"],
};

const projects = [
  {
    title: "News Headlines",
    image: project1,
    href: "https://breaking-news-rust.vercel.app/",
    stack: ["React", "Tailwind CSS", "MongoDB"],
    description:
      "A news reader that fetches live headlines in React, with Tailwind CSS on the frontend and MongoDB for API key storage.",
  },
  {
    title: "Visitor Management System",
    image: project2,
    href: "https://hello-vms.vercel.app/",
    stack: ["Node.js", "REST", "JWT", "MongoDB"],
    description:
      "Bootcamp capstone awarded Best in Capstone. I architected the backend: REST APIs, bcrypt password hashing, and JWT authentication.",
  },
  {
    title: "Phonebook",
    image: Untitled,
    href: "https://phonebook-895rqily4-itsmetrebs-projects.vercel.app/",
    stack: ["React", "Firebase", "Tailwind CSS"],
    description:
      "A contact manager with image uploads through Firebase, styled with Tailwind CSS and custom CSS.",
  },
];

function Projects() {
  return (
    <section className="flex flex-col gap-14">
      <header className="flex max-w-2xl flex-col items-center text-center laptop:items-start laptop:text-left">
        <p className="main-span my-0 text-sm uppercase tracking-[0.28em]">
          Selected work
        </p>
        <h1 className="mt-4 text-4xl font-bold tablet:text-5xl">Projects</h1>
        <p className="mt-6 text-lg leading-relaxed">
          Client delivery, backend systems, and full-stack apps I have shipped.
        </p>
      </header>

      <article className="flex flex-col gap-8 border-t border-white/20 pt-10 laptop:flex-row laptop:items-start laptop:justify-between laptop:gap-16">
        <div className="flex max-w-xl flex-col laptop:flex-1">
          <p className="my-0 text-sm uppercase tracking-[0.18em] opacity-60">
            Featured
          </p>
          <h2 className="mt-3 text-3xl font-bold">{featured.title}</h2>
          <p className="main-span my-2 text-base">{featured.subtitle}</p>
          <p className="mt-4 text-lg leading-relaxed">{featured.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {featured.stack.map((item) => (
              <span key={item} className="project-tag">
                {item}
              </span>
            ))}
          </div>
          <a
            href={featured.href}
            target="_blank"
            rel="noopener noreferrer"
            className="home-btn home-btn-primary mt-8 self-start"
          >
            Visit mast-ready.com
          </a>
        </div>
        <a
          href={featured.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[180px] w-full items-center justify-center border border-white/25 laptop:max-w-sm laptop:flex-1"
        >
          <img
            src={mastreadyLogo}
            alt="MASTReady"
            className="h-28 w-28 tablet:h-36 tablet:w-36"
          />
        </a>
      </article>

      <div className="grid gap-10 tablet:grid-cols-2 laptop:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="flex flex-col">
            <img
              src={project.image}
              alt={project.title}
              className="aspect-video w-full object-cover object-top"
            />
            <h2 className="mt-5 text-2xl font-bold">{project.title}</h2>
            <p className="mt-3 flex-1 text-base leading-relaxed">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="project-tag">
                  {item}
                </span>
              ))}
            </div>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="home-btn home-btn-secondary mt-6 self-start"
            >
              View project
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
