import { Link } from "react-router-dom";
import enhanced from "../images/enhanced.png";

function Home() {
  return (
    <div className="home  flex flex-col gap-10 tablet:gap-20">
      <div className="flex laptop:flex-row laptop:justify-between items-center mobile:flex-col mobile:gap-10 ">
        <div className="mobile:flex ">
          <img
            src={enhanced}
            alt="background"
            className="laptop: w-90  laptop:flex mobile:hidden"
          />
        </div>
        <div className="mobile:gap-10 items-center flex flex-col gap-10  justify-center">
          <h1 className="uppercase mobile:text-xl laptop:text-2xl ">
            Hey its me
          </h1>

          <h1 className="main-span uppercase  mobile:text-2xl tablet:text-3xl laptop:text-4xl justify-center font-bold laptop: bg-white ">
            Wilbert rodrigo
          </h1>
          <h2 className="position mobile: text-xl"> A WEB DEVELOPER</h2>
          <p className="statement mobile:text-4xl laptop:text-4xl text-center laptop: items-center hover:bg-white p-4 ">
            who loves to <span className="main-span text-6xl">collaborate</span>
            , let's build<br></br>
            <span className="main-span text-6xl">together</span>!
          </p>
        </div>
        <img
          src={enhanced}
          alt="background"
          className="laptop: w-90 laptop:hidden mobile:hidden tablet:flex"
        />
      </div>
      <div className="flex justify-center ">
        <Link to="about">
          <button className="color-main mobile:w-60 tablet:w-80 laptop:w-96 text-white font-bold py-2 px-4  mobile:text-xl tablet:text-2xl laptop:text-2xl laptop:mt-8 ">
            Know more about me
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
