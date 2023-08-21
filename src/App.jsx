import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
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
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route
          path="*"
          element={<h1>Page not found. Go back to the Homepage</h1>}
        />
      </Route>
    )
  );

  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
