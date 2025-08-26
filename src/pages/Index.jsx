import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
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

import lt2 from "../assets/images/ThirdParty/lt.png";
import npcil from "../assets/images/ThirdParty/npcil.jpg";
import eil from "../assets/images/ThirdParty/eil.jpg";
import ibr from "../assets/images/ThirdParty/ibr.jpg";
import deputy from "../assets/images/ThirdParty/deputy-of-atomic-energy.jpg";
import dnv from "../assets/images/ThirdParty/dnv.jpg";
import tuv from "../assets/images/ThirdParty/tuv.jpg";
import tata from "../assets/images/ThirdParty/tata.jpg";
import lr from "../assets/images/ThirdParty/lr.jpg";

import Achievements from "../components/Achievements/Achievements";

import { FaBriefcase, FaThumbsUp, FaTrophy, FaUserTie } from "react-icons/fa";
import IndustryCards from "../components/IndustryCards/IndustryCards";
import { constantValue } from "../utils/constantValue";

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
    // Only run in browser environment and after hydration
    if (typeof window !== "undefined" && location.hash) {
      // Use a small delay to ensure hydration is complete
      const timer = setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location]);

  // SEO meta description for homepage
  const metaDescription = `${constantValue.companyName}: Leading manufacturer and supplier of industrial pipes, tubes, and fittings in India. Explore our wide range of quality products and trusted services.`;

  return (
    <div>
      <Helmet>
        <title>
          {constantValue.companyName} | Leading Pipe & Fittings Manufacturer
          India
        </title>
        <meta name="description" content={metaDescription} />
        <meta
          name="keywords"
          content="pipe manufacturer India, stainless steel pipes, alloy steel fittings, carbon steel flanges, industrial valves, steel fasteners, round bars, pipe fittings supplier, Mumbai"
        />
        <meta name="author" content={constantValue.companyName} />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content={`${constantValue.companyName} | Leading Pipe & Fittings Manufacturer India`}
        />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={constantValue.companyUrl} />
        <meta
          property="og:image"
          content={`${constantValue.companyUrl}/logo.jpeg`}
        />
        <meta property="og:site_name" content={constantValue.companyName} />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${constantValue.companyName} | Leading Pipe & Fittings Manufacturer India`}
        />
        <meta name="twitter:description" content={metaDescription} />
        <meta
          name="twitter:image"
          content={`${constantValue.companyUrl}/logo.jpeg`}
        />

        <link rel="canonical" href={constantValue.companyUrl} />

        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: constantValue.companyName,
            url: constantValue.companyUrl,
            logo: `${constantValue.companyUrl}/logo.jpeg`,
            description:
              "Leading manufacturer of stainless steel, alloy steel, carbon steel pipes, fittings, flanges, valves, fasteners, and round bars in India.",
            foundingDate: "1994",
            numberOfEmployees: "100+",
            address: {
              "@type": "PostalAddress",
              addressCountry: "IN",
              addressLocality: "Mumbai",
              addressRegion: "Maharashtra",
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              telephone: "+91-XXXXXXXXXX",
              email: "info@bharatpipe.com",
            },
            sameAs: [
              "https://www.facebook.com/bharatpipe",
              "https://www.linkedin.com/company/bharatpipe",
              "https://twitter.com/bharatpipe",
            ],
          })}
        </script>

        {/* Structured Data - WebSite */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: constantValue.companyName,
            url: constantValue.companyUrl,
            potentialAction: {
              "@type": "SearchAction",
              target: `${constantValue.companyUrl}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          })}
        </script>

        {/* Structured Data - Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: constantValue.companyName,
            image: `${constantValue.companyUrl}/logo.jpeg`,
            description:
              "Leading manufacturer of stainless steel, alloy steel, carbon steel pipes, fittings, flanges, valves, fasteners, and round bars in India.",
            url: constantValue.companyUrl,
            telephone: "+91-XXXXXXXXXX",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Industrial Area",
              addressLocality: "Mumbai",
              addressRegion: "Maharashtra",
              postalCode: "400001",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "19.0760",
              longitude: "72.8777",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "09:00",
              closes: "18:00",
            },
            priceRange: "$$",
            servesCuisine: "Industrial Manufacturing",
          })}
        </script>
      </Helmet>
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
        images={[lt2, npcil, eil, ibr, deputy, dnv, tuv, tata, lr]}
      />
      <br />
      <Achievements
        heading="Our Achievements"
        description="We take pride in the milestones we've accomplished so far."
        achievements={achievements}
      />
      <TrustedClientsHeader
        label={constantValue.companyName}
        heading="Industries We Serve"
        description="Our skilled and adaptable team delivers outstanding solutions across diverse industries, with a deep understanding of each sector's unique challenges and opportunities."
        showIndustryCards={true}
      />

      <Footer />
    </div>
  );
};

export default Index;
