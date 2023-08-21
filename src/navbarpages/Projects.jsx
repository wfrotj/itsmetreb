import React from "react";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import Untitled from "../images/Untitled.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Projects() {
  return (
    <React.Fragment>
      <h1 className="project mobile:flex mobile:justify-center mobile:items-center mobile:text-center laptop:flex laptop:justify-center items-center text-3xl mb-8">
        Projects Experiences
      </h1>
      <div className="flex justify-center gap-10 mobile:flex mobile:flex-col laptop:flex-row tablet:flex-row">
        <Card style={{ width: "30rem" }}>
          <Card.Img src={project1} className="card-image" />
          <Card.Body>
            <Card.Title className="text-2xl flex justfy-center flex-col items-center p-2">
              News-Headlines
            </Card.Title>
            <Card.Text className="text-justify">
              I took advantage of the React JS and Tailwind CSS in my frontend
              and I used MongoDB as my database to store my API keys. I learned
              how to fetch the data using the useEffect hook of React JS and
              destructuring props to render the different variables.
            </Card.Text>
            <Button className="cards-btn">
              <a href="https://news-headlines.onrender.com" target="_blank">
                Visit link
              </a>
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "30rem" }}>
          <Card.Img src={project2} className="card-image" />
          <Card.Body>
            <Card.Title className="text-2xl flex justfy-center flex-col items-center p-2">
              Visitor Management System
            </Card.Title>
            <Card.Text className="text-justify">
              This is the best capstone in our boot camp. I was responsible to
              architect the backend codes of this application. I learned about
              RESTful API, efficiently using Insomnia to test different
              requests, hashing in creating passwords using bcrcypt, and
              jsonwebtoken for authentication of the user.
            </Card.Text>
            <Button className="cards-btn">
              <a href="https://hellovms.onrender.com/" target="_blank">
                Visit link
              </a>
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "30rem" }}>
          <Card.Img src={Untitled} className="card-image" />
          <Card.Body>
            <Card.Title className="text-2xl flex justfy-center flex-col items-center p-2">
              Phonebook Web Application
            </Card.Title>
            <Card.Text className="text-justify">
              I learned how to use Firebase to store the images we upload using
              the multer library of React JS. This app was one of the products
              of our boot camp and I used Tailwind CSS and Vanilla CSS to add
              style in frontend.
            </Card.Text>
            <Button className="cards-btn">
              <a
                href="https://phonebook-application-4baq.onrender.com"
                target="_blank"
              >
                Visit link
              </a>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default Projects;
