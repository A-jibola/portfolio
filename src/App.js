import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from './Pages/Home.js'
import Projects from './Pages/Projects.js'
import ProjectUX from './Pages/ProjectUX.js'
import ProjectSWE from './Pages/ProjectSWE.js'
import About from './Pages/About.js'
import Experience from './Pages/Experience.js'
import Footer from './Components/Footer.js'
import Header from "./Components/Header.js";
import Open from './Components/Open.js'
import { useSelector } from 'react-redux';
import './App.css';

function App() {

  const isOpen = useSelector((state)=> state.opener.value)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="experience" element={<Experience />} />
        <Route path="project/ux/:projectID" element={<ProjectUX />} />
        <Route path="project/swe/:projectID" element={<ProjectSWE />} />
        <Route path="open" element={<Open />} />
      </>
    )
  );

  return (
    <div className="App">
      {(!isOpen)?<Open /> : ""}
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
