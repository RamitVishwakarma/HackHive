import React from "react";
import FeaturedHackathonCard from "../components/FeaturedHackathons/FeaturedHackathons";
import Footer from "../components/Footer/Footer";
import Hero from "../components/HeroSection/Hero";
import Navbar from "../components/Navbar/Navbar";
import Organizations from "../components/Organizations/Organizations";
import Search from "../components/Searchbar/Search";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Organizations />
      <Search />
      <FeaturedHackathonCard />
      <Footer />
    </>
  );
};

export default Landing;
