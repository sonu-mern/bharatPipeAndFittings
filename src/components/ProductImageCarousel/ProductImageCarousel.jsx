import React, { useEffect, useState } from "react";
// Simple carousel component for product images
const ProductImageCarousel = ({ images, name }) => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => (c + 1) % images.length);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);

  // Auto-scroll effect
  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 2500); // 2.5 seconds
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;
  return (
    <div style={{ position: "relative", width: "100%", textAlign: "center" }}>
      <img
        src={images[current]}
        alt={name}
        style={{ maxWidth: "100%", maxHeight: 400, borderRadius: 8 }}
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            style={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            &#8592;
          </button>
          <button
            onClick={next}
            style={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            &#8594;
          </button>
        </>
      )}
      {images.length > 1 && (
        <div style={{ marginTop: 8 }}>
          {images.map((_, idx) => (
            <span
              key={idx}
              style={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: idx === current ? "#333" : "#ccc",
                margin: "0 2px",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default ProductImageCarousel;
