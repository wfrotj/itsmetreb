import { Link } from "react-router-dom";
import upouLogo from "../images/upou-logo.jpg";
import ursLogo from "../images/urs-logo.jpg";
import pupLogo from "../images/pup-logo.png";

const skills = [
  { label: "JavaScript", className: "text-black bg-customYellow" },
  { label: "HTML", className: "bg-customOrange text-black" },
  { label: "CSS", className: "bg-customBlue text-white font-semibold" },
  { label: "React", className: "bg-customBlack text-customBlue" },
  { label: "Node.js", className: "bg-customGreen text-black" },
  { label: "Git", className: "bg-customBlack text-customGreenText" },
  { label: "Figma", className: "text-black bg-customYellow" },
  { label: "Mocha", className: "bg-customOrange text-black" },
  { label: "Chai", className: "bg-customBlue text-white font-semibold" },
  { label: "Postman", className: "bg-customBlack text-customBlue" },
  { label: "Claude Code", className: "bg-customGreen text-black" },
  { label: "n8n", className: "bg-customBlack text-customGreenText" },
];

const experience = [
  {
    role: "Software Engineer",
    company: "International IT Solutions",
    period: "June 2025 – Present",
    points: [
      "Develop and implement scalable banking solutions by integrating business logic with the bank APIs, while maintaining clean, efficient, and well-structured code.",
      "Create automated test suites using Node.js, transform Figma designs into responsive HTML/CSS interfaces, and provide accurate technical estimates and work effort assessments for project delivery.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Pulsar Software Development",
    period: "May 2024 – May 2025",
    points: [
      "Designed and maintained backend systems that analyze customer financial data to trigger notifications, nudges, and integrations.",
      "Sustained long-term client partnerships by delivering reliable projects, using task breakdown and AI-assisted analysis to keep implementation plans clear for technical and non-technical stakeholders.",
    ],
  },
  {
    role: "Digital UX & SEO Marketing Specialist",
    company: "Upwork (Freelance)",
    href: "https://www.upwork.com/freelancers/~01512cec647f431fab",
    period: "October 2023",
    points: [
      "Conducted comprehensive audits of client websites to identify SEO, usability, and performance issues, delivering detailed and actionable reports to improve search visibility and user experience.",
    ],
  },
  {
    role: "Professional Computer Teacher",
    company: "ANHS",
    period: "May 2013 – May 2024",
    points: [
      "Designed and implemented student-centered technology learning activities while collaborating with colleagues to share instructional strategies, resources, and practical approaches that enhanced technology integration and improved learner confidence and competence.",
    ],
  },
  {
    role: "Manager",
    company: "Jollibee Foods Corporation",
    period: "May 2011 – May 2013",
    points: [
      "Led daily operations to maintain consistent performance across sales, service, and production while ensuring compliance with quality and safety standards through strict implementation of SOPs, continuous monitoring, issue identification, and timely corrective actions.",
    ],
  },
];

const volunteerExperience = [
  {
    role: "Capstone QA & Software Mentor",
    company: "Volunteer",
    period: "2026 – Present",
    points: [
      "Provide free QA and software development mentoring to students working on capstone projects.",
      "Guide students on software testing, test planning, requirements, and quality practices.",
      "Provide technical advice and feedback throughout their project development.",
    ],
  },
];

const education = [
  {
    school: "University of the Philippines Open University",
    credential: "Diploma in Computer Science",
    period: "2026 – Present",
    logo: upouLogo,
    logoAlt: "University of the Philippines Open University seal",
  },
  {
    school: "University of Rizal System",
    credential: "Master in Business Administration (Units Earned)",
    period: "2015 – 2018",
    logo: ursLogo,
    logoAlt: "University of Rizal System seal",
  },
  {
    school: "Polytechnic University of the Philippines",
    credential: "Bachelor in Business Technology Education",
    period: "2007 – 2011",
    logo: pupLogo,
    logoAlt: "Polytechnic University of the Philippines seal",
  },
];

const certifications = [
  "Licensed Professional Teacher",
  "Full-Stack Web Development",
  "NC III Bookkeeping – TESDA (2015)",
];

const awards = [
  "Best Capstone (2023)",
  "Overall Top 3 Student (2023)",
  "Project School Coordinator (DRRM)",
];

function About() {
  return (
    <div className="about flex flex-row items-center justify-between gap-4">
      <div className="mt-4 flex flex-col justify-center text-lg">
        <h2 className="about-me text-center text-4xl">About Me</h2>
        <div className="p-2 text-left text-xl laptop:p-10">
          <p>
            Software engineer with 2 years of experience designing and
            implementing workflow automation and backend systems. I collaborate
            with cross-functional teams to deliver reliable, production-ready
            solutions.
          </p>
          <p>
            I care about modern engineering practices, agile development, and
            building efficient systems that improve user experience and internal
            workflows.
          </p>
        </div>

        <h2 className="mt-2 text-center text-2xl">Experience</h2>
        <ol className="mt-6 flex flex-col gap-8 text-left laptop:px-10">
          {experience.map((job) => (
            <li
              key={`${job.role}-${job.company}`}
              className="border-l-2 border-[var(--quarterly)] pl-6"
            >
              <h3 className="text-2xl font-bold">{job.role}</h3>
              <p className="main-span my-1 text-lg">
                {job.href ? (
                  <a
                    href={job.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    {job.company}
                  </a>
                ) : (
                  job.company
                )}
              </p>
              <p className="my-0 text-base opacity-80">{job.period}</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-lg">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <h2 className="mt-10 text-center text-2xl">Volunteer Experience</h2>
        <p className="mt-3 text-center text-lg laptop:px-10">
          This service is completely free for students.{" "}
          <Link to="/contact" className="contact-link font-semibold">
            Contact me
          </Link>{" "}
          if you need QA or software mentoring for your capstone.
        </p>
        <ol className="mt-6 flex flex-col gap-8 text-left laptop:px-10">
          {volunteerExperience.map((item) => (
            <li
              key={`${item.role}-${item.company}`}
              className="border-l-2 border-[var(--quarterly)] pl-6"
            >
              <h3 className="text-2xl font-bold">{item.role}</h3>
              <p className="main-span my-1 text-lg">{item.company}</p>
              <p className="my-0 text-base opacity-80">{item.period}</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-lg">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <h2 className="mt-10 text-center text-2xl">Education</h2>
        <ol className="mt-6 flex flex-col gap-6 text-left laptop:px-10">
          {education.map((item) => (
            <li
              key={`${item.school}-${item.credential}`}
              className="border-l-2 border-[var(--quarterly)] pl-6"
            >
              <div className="flex items-start gap-4">
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt={item.logoAlt || item.school}
                    className="mt-1 h-16 w-16 shrink-0 rounded-full bg-white object-contain p-1"
                  />
                ) : null}
                <div>
                  <h3 className="text-2xl font-bold">{item.credential}</h3>
                  <p className="main-span my-1 text-lg">{item.school}</p>
                  <p className="my-0 text-base opacity-80">{item.period}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10">
          <h2 className="text-center text-2xl">Technical Skills</h2>
          <section className="mt-4 flex flex-wrap items-center justify-center gap-4">
            {skills.map((skill) => (
              <span
                key={skill.label}
                className={`inline-flex h-10 items-center justify-center rounded-full border-2 border-solid border-white px-4 ${skill.className}`}
              >
                {skill.label}
              </span>
            ))}
          </section>
        </div>

        <h2 className="mt-6 text-center text-2xl">Certifications</h2>
        <div className="mt-4 text-center">
          {certifications.map((item) => (
            <h3 key={item} className="text-xl">
              {item}
            </h3>
          ))}
        </div>

        <h2 className="mt-6 text-center text-2xl">Awards & Activities</h2>
        <div className="mt-4 text-center underline">
          {awards.map((award) => (
            <h3 key={award} className="text-xl">
              {award}
            </h3>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-center">
          <Link to="/projects">
            <button className="color-main w-60 py-2 px-4 text-xl font-bold text-white tablet:w-80 tablet:text-2xl laptop:mt-8 laptop:w-96 laptop:text-2xl">
              Here are my Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
