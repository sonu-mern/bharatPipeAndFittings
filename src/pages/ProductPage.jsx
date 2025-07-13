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
import { useParams, Link } from "react-router-dom";
import styles from "./ProductPage.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ServiceSidebar from "../components/Sidebar/ServiceSidebar";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$99.99",
    category: "Electronics",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=600&fit=crop",
    ],
    description:
      "Premium wireless headphones with noise cancellation technology. Perfect for music lovers and professionals who demand the highest quality audio experience.",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Bluetooth 5.0 connectivity",
      "Premium leather ear cushions",
      "Quick charge technology",
    ],
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$199.99",
    category: "Electronics",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600&h=600&fit=crop",
    ],
    description:
      "Advanced fitness tracking and smartphone integration with heart rate monitoring, GPS, and water resistance.",
    features: [
      "Heart rate monitoring",
      "GPS tracking",
      "Water resistant",
      "7-day battery life",
      "Sleep tracking",
    ],
  },
  {
    id: 3,
    name: "Designer Sunglasses",
    price: "$149.99",
    category: "Fashion",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&h=600&fit=crop",
    ],
    description:
      "Stylish sunglasses with UV protection and premium frame construction. Perfect for any occasion.",
    features: [
      "100% UV protection",
      "Scratch-resistant lenses",
      "Premium frame materials",
      "Lightweight design",
      "Includes carrying case",
    ],
  },
  {
    id: 4,
    name: "Yoga Mat",
    price: "$29.99",
    category: "Sports",
    images: [
      "https://images.unsplash.com/photo-1506629905607-c65808e1e8c4?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&h=600&fit=crop",
    ],
    description:
      "Non-slip yoga mat for all fitness levels with superior grip and comfort for your practice.",
    features: [
      "Non-slip surface",
      "Extra thick cushioning",
      "Eco-friendly materials",
      "Easy to clean",
      "Carrying strap included",
    ],
  },
  {
    id: 5,
    name: "Coffee Maker",
    price: "$79.99",
    category: "Home & Garden",
    images: [
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600&h=600&fit=crop",
    ],
    description:
      "Automatic coffee maker with programmable timer and premium brewing system for the perfect cup every time.",
    features: [
      "Programmable timer",
      "12-cup capacity",
      "Auto shut-off",
      "Premium brewing system",
      "Easy-clean design",
    ],
  },
  {
    id: 6,
    name: "Running Shoes",
    price: "$89.99",
    category: "Sports",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&h=600&fit=crop",
    ],
    description:
      "Comfortable running shoes with excellent support and cushioning for long-distance running.",
    features: [
      "Superior cushioning",
      "Breathable mesh upper",
      "Durable outsole",
      "Arch support",
      "Lightweight design",
    ],
  },
];

const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top when page loads
  }, []);
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  if (!product) {
    return (
      <div className={styles.pageContainer}>
        <Navbar />
        <main className={styles.main}>
          <div className={styles.container}>
            <div className={styles.notFound}>
              <h1>Product Not Found</h1>
              <p>The product you're looking for doesn't exist.</p>
              <Link to="/" className={styles.backButton}>
                Back to Home
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.breadcrumb}>
            <Link to="/">Home</Link>
            <span> / </span>
            <Link to="/#products">Products</Link>
            <span> / </span>
            <span>{product.name}</span>
          </div>
          <div className={styles.productPageHeader}>
            <div className={styles.responsiveLayout}>
              {!isMobile && (
                <aside className={styles.sidebarResponsive}>
                  <ServiceSidebar />
                </aside>
              )}
              <div className={styles.productDetails}>
                <div className={styles.productImage}>
                  <ProductImageCarousel
                    images={product.images}
                    name={product.name}
                  />
                </div>
                <div className={styles.productInfo}>
                  <h1 className={styles.productTitle}>{product.name}</h1>
                  <div className={styles.productCategory}>
                    {product.category}
                  </div>
                  <div className={styles.productPrice}>{product.price}</div>
                  <div className={styles.productDescription}>
                    <h3>Description</h3>
                    <p>{product.description}</p>
                  </div>
                  <div className={styles.productFeatures}>
                    <h3>Features</h3>
                    <ul>
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  {/* <div className={styles.productActions}>
                    <button className={styles.addToCartButton}>
                      Add to Cart
                    </button>
                    <Link to="/" className={styles.backButton}>
                      Continue Shopping
                    </Link>
                  </div> */}
                </div>
              </div>
              {isMobile && (
                <aside className={styles.sidebarResponsive}>
                  <ServiceSidebar />
                </aside>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
