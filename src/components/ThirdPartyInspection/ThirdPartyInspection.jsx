import React from "react";
import styles from "./ThirdPartyInspection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ThirdPartyInspection = ({ img, title, customWidth }) => {
  return (
    <section
      style={{
        padding: "20px 0",
        width: customWidth || "60vw",
        maxWidth: "100%",
        // borderRadius: "8px",
        // border: "2px solid #ccc",
      }}
      className="third-party-section"
    >
      <h2 className={styles.title}>{title}</h2>
      <Swiper
        modules={[Autoplay, FreeMode, Navigation, Pagination]}
        autoplay={{ delay: 2000 }}
        freeMode={true}
        loop={true}
        speed={1000}
        slidesPerView={4}
        spaceBetween={10} // Set gap between slides to max 10px
        // pagination={{ clickable: true }}
        // navigation={true}
        // style={{ height: 180 }}
        // Increased carousel height
        breakpoints={{
          0: { slidesPerView: 2 }, // Show 2 images on mobile
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
                // Increased slide height
                // border: "2px solid #ccc",
              }}
            >
              <img
                src={url}
                alt={`unsplash-slide-${index + 1}`}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                  borderRadius: "8px",
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

// Responsive style for full width on mobile
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
