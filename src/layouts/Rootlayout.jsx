import { Link } from "react-router-dom";

function Rootlayout() {
  return (
    <div>
      <header className="">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects"> Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
    </div>
  );
}

export default Rootlayout;
