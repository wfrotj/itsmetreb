import { Link } from "react-router-dom";
import enhanced from "../images/enhanced.png";

function Home() {
  return (
    <div className="home flex flex-col gap-10">
      <div className="flex flex-row justify-between items-center">
        <div>
          <img src={enhanced} alt="background" className="w-90" />
        </div>
        <div className="items-center flex flex-col gap-10 justify-center">
          <h1 className="uppercase laptop: text-2xl">Hey its me</h1>
          <h1 className="uppercase laptop: main-span text-4xl justify-center font-bold bg-white">
            Wilbert rodrigo
          </h1>
          <h2>WEB DEVELOPER</h2>
          <p className="statement mobile:text-lg text-4xl text-center laptop: items-center hover:bg-white">
            I love to <span className="main-span text-6xl">collaborate</span>,
            let's build <span className="main-span text-6xl">together</span>!
          </p>
        </div>
      </div>
      <div className="flex justify-center ">
        <Link to="about">
          <button className="color-main mobile: w-96  text-white font-bold py-2 px-4 rounded text-2xl mt-8 ">
            Know more about me
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
