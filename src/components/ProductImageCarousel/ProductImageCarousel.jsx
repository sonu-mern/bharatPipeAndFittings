import React, { useEffect, useState } from "react";

// Product Image Carousel or Static Image based on count
const ProductImageCarousel = ({ images, name }) => {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const next = () => setCurrent((c) => (c + 1) % images.length);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);

  // Auto-scroll only if more than 1 image
  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  // If no images
  if (!images || !Array.isArray(images) || images.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        Loading images...
      </div>
    );
  }

  // Single image – no carousel
  if (images.length === 1) {
    return (
      <div style={{ textAlign: "center" }}>
        <img
          src={images[0]}
          alt={name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/fallback-image.jpg";
          }}
          style={{
            maxWidth: "100%",
            maxHeight: 400,
            borderRadius: 8,
            objectFit: "cover",
          }}
        />
      </div>
    );
  }

  // Carousel for multiple images
  return (
    <div style={{ position: "relative", width: "100%", textAlign: "center" }}>
      {!loaded && (
        <div
          style={{
            height: 400,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span>Loading image...</span>
        </div>
      )}
      <img
        key={images[current]}
        src={images[current]}
        alt={name}
        onLoad={() => setLoaded(true)}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/fallback-image.jpg";
        }}
        style={{
          display: loaded ? "block" : "none",
          maxWidth: "100%",
          maxHeight: 400,
          borderRadius: 8,
          objectFit: "contain",
        }}
      />

      <>
        <button
          onClick={prev}
          style={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.7)",
            border: "none",
            padding: "8px 12px",
            cursor: "pointer",
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
            background: "rgba(255,255,255,0.7)",
            border: "none",
            padding: "8px 12px",
            cursor: "pointer",
          }}
        >
          &#8594;
        </button>
      </>

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
              margin: "0 4px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageCarousel;
