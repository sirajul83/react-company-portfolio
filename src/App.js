import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Service from "./components/pages/Service";
import Team from "./components/pages/Team";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
    <BrowserRouter>
       <NavBar />
          <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="about" element={<About /> } />
            <Route path="service" element={<Service /> } />
            <Route path="team" element={<Team /> } />
            <Route path="contact" element={<Contact /> } />
          </Routes>
        <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
