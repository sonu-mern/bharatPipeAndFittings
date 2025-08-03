import React, { useEffect } from "react";
import TopBar from "../components/TopBar/TopBar";
import Navbar from "../components/Navbar/Navbar";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import AboutSection from "../components/AboutSection/AboutSection";
import ProductSection from "../components/ProductSection/ProductSection";
import Footer from "../components/Footer/Footer";
import { useLocation } from "react-router-dom";
import TrustedClientsHeader from "../components/TrustedClientsHeader/TrustedClientsHeader";

import lt from "../assets/images/trustedClient/lt.png";
import indiaoil from "../assets/images/trustedClient/indiaoil.png";
import bhel from "../assets/images/trustedClient/bhel.png";
import godrej from "../assets/images/trustedClient/godrej.png";
import adityaBirla from "../assets/images/trustedClient/adityaBirla.png";
import ThirdPartyInspection from "../components/ThirdPartyInspection/ThirdPartyInspection";
import Achievements from "../components/Achievements/Achievements";
import { FaBriefcase, FaThumbsUp, FaTrophy, FaUserTie } from "react-icons/fa";

const achievements = [
  {
    count: 462,
    label: "Happy Customers",
    icon: <FaUserTie />,
  },
  {
    count: 534,
    label: "Project Served",
    icon: <FaThumbsUp />,
  },
  {
    count: 26,
    label: "Awards Achieved",
    icon: <FaTrophy />,
  },
  {
    count: 30,
    label: "Years of Experience",
    icon: <FaBriefcase />,
  },
];

const Index = () => {
  console.log("Index page rendering");
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // Delay slightly to make sure rendering is complete
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);
  return (
    <div>
      <TopBar />
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <ProductSection />
      <TrustedClientsHeader
        label="Most Valuable"
        heading="Trusted Clients"
        description="We are proud to have earned the trust of numerous esteemed clients across various industries. Our commitment to excellence and personalized service has fostered long-lasting."
        images={[
          lt,
          indiaoil,
          bhel,
          godrej,
          adityaBirla,
          lt,
          indiaoil,
          bhel,
          godrej,
          adityaBirla,
        ]}
      />
      <br />
      <TrustedClientsHeader
        label="Trusted by Industry Leaders"
        heading="THIRD PARTY INSPECTION"
        description="We take pride in being the trusted inspection partner for some of the most respected organizations across diverse sectors. Our consistent delivery of quality and compliance has earned us lasting relationships with top-tier clients."
        images={[
          lt,
          indiaoil,
          bhel,
          godrej,
          adityaBirla,
          lt,
          indiaoil,
          bhel,
          godrej,
          adityaBirla,
        ]}
      />
      <br />
      <Achievements
        heading="Our Achievements"
        description="We take pride in the milestones we've accomplished so far."
        achievements={achievements}
      />

      <Footer />
    </div>
  );
};

export default Index;
