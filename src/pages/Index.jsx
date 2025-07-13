import React, { useEffect } from "react";
import TopBar from "../components/TopBar/TopBar";
import Navbar from "../components/Navbar/Navbar";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import AboutSection from "../components/AboutSection/AboutSection";
import ProductSection from "../components/ProductSection/ProductSection";
import Footer from "../components/Footer/Footer";
import ThirdPartyInspection from "../components/ThirdPartyInspection/ThirdPartyInspection";
import { useLocation } from "react-router-dom";

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
      {/* <ThirdPartyInspection /> */}
      <Footer />
    </div>
  );
};

export default Index;
