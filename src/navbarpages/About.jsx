import React from "react";
import Picture from "../images/Picture.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about flex flex-row justify-between items-center gap-4">
      <div className="mobile: text-l text-justify mt-4 flex flex-col justify-center ">
        <h2 className="about-me mobile: text-4xl text-center ">About Me</h2>
        <div className="text-xl laptop:p-10 mobile:p-2">
          <p>
            As a career shifter, my drive to reach higher levels of expertise
            and excel in the field of software development is constant. I
            understand that the path may be challenging, but my determination
            allows me to face any learning curves with a positive mindset and
            the belief that I can overcome them.
          </p>
          <p>
            My drive pushes me to acquire new skills, broaden my knowledge, and
            adapt to the demands of my new career. I am proactive in seeking out
            learning experiences and taking on projects that push me outside of
            my comfort zone.
          </p>
          <p>
            I am adaptable, resourceful, and responsible in keeping myself
            up-to-date with the latest industry trends.
          </p>
        </div>
        <div>
          <div className="mobile:flex justify-center items-center ">
            <h2 className="mobile:text-2xl text-center ">Techinal Skills</h2>
          </div>
          <section className="mobile: flex flex-wrap justify-center items-center gap-4 mt-4">
            <button className="rounded-full border-white border-solid border-2  w-32 h-10 text-black bg-customYellow ">
              Javascript
            </button>
            <button className="rounded-full border-white border-solid border-2  w-32 h-10 bg-customOrange text-black ">
              HTML 5
            </button>
            <button className="rounded-full border-white border-solid border-2  w-40 h-10 bg-customBlue text-white font-semibold">
              {" "}
              Tailwind CSS
            </button>
            <button className="rounded-full border-white border-solid border-2  w-32 h-10 bg-customBlack text-customBlue">
              React JS
            </button>
            <button className="rounded-full border-white border-solid border-2  w-24 h-10 bg-customGreen text-black">
              node js
            </button>
            <button className="rounded-full border-white border-solid border-2  w-24 h-10 bg-customBlack text-customGreenText">
              MongoDB
            </button>
          </section>
        </div>
        <div>
          <div className="mobile: text-2xl text-center mt-6">
            <h2>Awards in Bootcamp</h2>
          </div>
          <div className="mobile: text-center mt-4 underline ">
            <h3 className="text-xl">Best in Capstone</h3>
            <h3 className="text-xl">Best in Coding</h3>
            <h3 className="text-xl">Top 4 Student</h3>
          </div>
        </div>
        <div className="flex justify-center items-center mobile:mt-4">
          <Link to="/projects">
            <button className="color-main mobile:w-60 tablet:w-80 laptop:w-96 text-white font-bold py-2 px-4  mobile:text-xl tablet:text-2xl laptop:text-2xl laptop:mt-8">
              Here are my Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
