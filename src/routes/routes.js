import React from "react";
import { Route, BrowserRouter, Routes as Router } from "react-router-dom";
import Footer from "../components/footer/index.tsx";
import Navbar from "../components/navbar/index.tsx";
import { AboutUs } from "../pages/aboutUs";
import { Contact } from "../pages/contact";
import { Home } from "../pages/homePage";
import { PageNotFound } from "../pages/pageNotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Router>
        <Route path="/" exact element={<Home />} />
        <Route path="/aboutus" exact element={<AboutUs />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/*" element={<PageNotFound />} />
      </Router>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
