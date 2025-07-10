import React from "react";
import TopBar from "../components/TopBar/TopBar";
import Navbar from "../components/Navbar/Navbar";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import AboutSection from "../components/AboutSection/AboutSection";
import ProductSection from "../components/ProductSection/ProductSection";
import Footer from "../components/Footer/Footer";
import ThirdPartyInspection from "../components/ThirdPartyInspection/ThirdPartyInspection";

const Index = () => {
  console.log("Index page rendering");

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
