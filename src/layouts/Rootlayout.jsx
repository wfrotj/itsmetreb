import { NavLink, Outlet } from "react-router-dom";

function Rootlayout() {
  return (
    <div>
      <header className="">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects"> Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Rootlayout;
