import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductSection.module.css";

// const categories = ["All", "Electronics", "Fashion", "Home & Garden", "Sports"];
import sheet from "../../assets/images/products/sheets-plates-coils.jpg";
import angles from "../../assets/images/products/angles-channel-flats.jpg";
import rods from "../../assets/images/products/round-bars-rods.jpg";
import pipes from "../../assets/images/products/pipes-tubes.jpg";
import fittings from "../../assets/images/products/pipe-fittings.jpg";
import flanges from "../../assets/images/products/flanges.jpg";
import forged from "../../assets/images/products/forged-fittings.jpg";
import fasteners from "../../assets/images/products/fasteners.jpg";
import valves from "../../assets/images/products/valves.jpg";
const products = [
  {
    id: 6,
    name: "Flanges",
    image: flanges,
  },
  {
    id: 2,
    name: "Angles, Channels & Flat",
    image: angles,
  },
  {
    id: 9,
    name: "Valves",
    image: valves,
  },
  {
    id: 4,
    name: "Pipes & Tubes",
    image: pipes,
  },
  {
    id: 7,
    name: "Forged Fittings",
    image: forged,
  },
  {
    id: 1,
    name: "Sheets, Plates & Coils",
    image: sheet,
  },
  {
    id: 8,
    name: "Fasteners",
    image: fasteners,
  },
  {
    id: 3,
    name: "Round Bars & Rods",
    image: rods,
  },
  {
    id: 5,
    name: "Pipe Fittings",
    image: fittings,
  },
];
const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section className={styles.productSection} id="products">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Product Range</h2>
          <p className={styles.subtitle}>
            Explore top-quality industrial pipes, fittings, and accessories
            trusted by professionals.
          </p>
        </div>

        {/* <div className={styles.categoryTabs}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryTab} ${
                activeCategory === category ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div> */}

        <div className={styles.productsGrid}>
          {filteredProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productImage}>
                <img src={product.image} alt={product.name} />
                <div className={styles.productOverlay}>
                  <Link
                    to={`/product/${product.id}`}
                    className={styles.viewButton}
                  >
                    View Details
                  </Link>
                </div>
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{product.name}</h3>
                {/* <p className={styles.productDescription}>
                  {product.description}
                </p> */}
                {/* <div className={styles.productPrice}>{product.price}</div>
                <button className={styles.addToCartButton}>Add to Cart</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
