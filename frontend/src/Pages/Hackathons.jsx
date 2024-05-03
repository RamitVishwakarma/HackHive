import React from "react";
import HackathonCard from "../components/HackathonCard/HackathonCard";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import HeadingSection from "../components/HeadingSection/HeadingSection";

function Hackathons() {
  return (
    <>
      <Navbar />
      <HeadingSection title={"Hackathons Near You"} />
      <HackathonCard />
      <Footer />
    </>
  );
}

export default Hackathons;
