import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Service from "./components/pages/Service";
import Portfolio from "./components/pages/Portfolio";
import Team from "./components/pages/Team";
import Contact from "./components/pages/Contact";
import PortfolioDetils from "./components/pages/PortfolioDetils";


function App() {
  return (
    <>
    <BrowserRouter>
       <NavBar />
          <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="about" element={<About /> } />
            <Route path="service" element={<Service /> } />
            <Route path="portfolio" element={<Portfolio /> } />
            <Route path="portfolio/:id" element={<PortfolioDetils />} />
            <Route path="team" element={<Team /> } />
            <Route path="contact" element={<Contact /> } />
          </Routes>
        <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
