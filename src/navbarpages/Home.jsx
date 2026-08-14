import { Link } from "react-router-dom";
import Picture from "../images/Picture.jpg";

function Home() {
  return (
    <section className="home flex min-h-[70vh] flex-col items-center justify-center gap-10 laptop:flex-row laptop:justify-between laptop:gap-16">
      <img
        src={Picture}
        alt="Wilbert Rodrigo"
        className="h-44 w-44 rounded-full object-cover tablet:h-56 tablet:w-56 laptop:h-72 laptop:w-72"
      />
      <div className="flex max-w-xl flex-col items-center text-center laptop:items-start laptop:text-left">
        <p className="main-span my-0 text-sm uppercase tracking-[0.28em]">
          Software Engineer
        </p>
        <h1 className="mt-4 text-4xl font-bold tablet:text-5xl">
          Wilbert Rodrigo
        </h1>
        <p className="mt-6 text-lg leading-relaxed">
          I design and implement workflow automation and backend systems,
          working with teams to ship reliable, production-ready software.
        </p>
        <p className="mt-2 text-sm opacity-70">
          International IT Solutions · Antipolo, Philippines
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 laptop:justify-start">
          <Link to="/projects" className="home-btn home-btn-primary">
            View projects
          </Link>
          <a
            href="https://www.upwork.com/freelancers/~01512cec647f431fab"
            target="_blank"
            rel="noopener noreferrer"
            className="home-btn home-btn-secondary"
          >
            Hire on Upwork
          </a>
          <Link to="/contact" className="home-btn home-btn-secondary">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
