import React from "react";
import styles from "./ThirdPartyInspection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ThirdPartyInspection = ({ img, title, customWidth }) => {
  // Add responsive styles using useEffect to avoid SSR issues
  React.useEffect(() => {
    if (typeof document !== "undefined") {
      const style = document.createElement("style");
      style.innerHTML = `
        @media (max-width: 576px) {
          .third-party-section {
            width: 90vw !important;
            max-width: 90vw !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
        }
      `;
      document.head.appendChild(style);

      // Cleanup function to remove the style when component unmounts
      return () => {
        if (document.head.contains(style)) {
          document.head.removeChild(style);
        }
      };
    }
  }, []);

  // Check if images array is valid
  if (!img || !Array.isArray(img) || img.length === 0) {
    return (
      <section
        style={{
          padding: "20px 0",
          width: customWidth || "60vw",
          maxWidth: "100%",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          textAlign: "center",
        }}
        className="third-party-section"
      >
        <p>No images to display</p>
      </section>
    );
  }

  return (
    <section
      style={{
        padding: "20px 0",
        width: customWidth || "60vw",
        maxWidth: "100%",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        marginTop: "20px",
      }}
      className="third-party-section"
    >
      {title && <h2 className={styles.title}>{title}</h2>}

      <Swiper
        modules={[Autoplay, FreeMode, Navigation, Pagination]}
        autoplay={{ delay: 2000 }}
        freeMode={true}
        loop={true}
        speed={1000}
        slidesPerView={4}
        spaceBetween={10}
        breakpoints={{
          0: { slidesPerView: 2 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1200: { slidesPerView: 5 },
        }}
      >
        {img?.map((url, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 100,
                padding: "10px",
              }}
            >
              <img
                src={url}
                alt={`slide-${index + 1}`}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ThirdPartyInspection;
