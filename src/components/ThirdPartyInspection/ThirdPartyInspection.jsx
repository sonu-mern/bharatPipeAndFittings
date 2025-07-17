import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ThirdPartyInspection = ({ img }) => {
  const imageUrls = [
    "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=600&q=80",
  ];

  return (
    <section
      style={{
        padding: "20px 0",
        width: "60vw",
        maxWidth: "100%",
        // borderRadius: "8px",
      }}
      className="third-party-section"
    >
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
        {img.map((url, index) => (
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
                  objectFit: "cover",
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
