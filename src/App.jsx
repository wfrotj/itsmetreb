import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
//pages
import Home from "./navbarpages/Home";
import About from "./navbarpages/About";
import Contact from "./navbarpages/Contact";
import Projects from "./navbarpages/Projects";
//layouts
import Rootlayout from "./layouts/Rootlayout";

function App() {
  return (
    <>
      <Rootlayout />
      <Routes>
        <Route path="/" element={<Rootlayout />} />
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
