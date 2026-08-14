import { Routes, Route } from "react-router-dom";
import Home from "./navbarpages/Home";
import About from "./navbarpages/About";
import Contact from "./navbarpages/Contact";
import Projects from "./navbarpages/Projects";
import Rootlayout from "./layouts/Rootlayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default App;
