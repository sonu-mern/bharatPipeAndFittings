
import React, { useState } from 'react';
import styles from './ProductSection.module.css';

const categories = ['All', 'Electronics', 'Fashion', 'Home & Garden', 'Sports'];

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$99.99",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    description: "Premium wireless headphones with noise cancellation"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$199.99",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
    description: "Advanced fitness tracking and smartphone integration"
  },
  {
    id: 3,
    name: "Designer Sunglasses",
    price: "$149.99",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop",
    description: "Stylish sunglasses with UV protection"
  },
  {
    id: 4,
    name: "Yoga Mat",
    price: "$29.99",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1506629905607-c65808e1e8c4?w=300&h=300&fit=crop",
    description: "Non-slip yoga mat for all fitness levels"
  },
  {
    id: 5,
    name: "Coffee Maker",
    price: "$79.99",
    category: "Home & Garden",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop",
    description: "Automatic coffee maker with programmable timer"
  },
  {
    id: 6,
    name: "Running Shoes",
    price: "$89.99",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
    description: "Comfortable running shoes with excellent support"
  }
];

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className={styles.productSection} id="products">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Products</h2>
          <p className={styles.subtitle}>
            Discover our handpicked selection of premium products
          </p>
        </div>

        <div className={styles.categoryTabs}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryTab} ${activeCategory === category ? styles.active : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.productsGrid}>
          {filteredProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productImage}>
                <img src={product.image} alt={product.name} />
                <div className={styles.productOverlay}>
                  <button className={styles.viewButton}>View Details</button>
                </div>
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productDescription}>{product.description}</p>
                <div className={styles.productPrice}>{product.price}</div>
                <button className={styles.addToCartButton}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
