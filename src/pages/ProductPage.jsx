import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './ProductPage.module.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$99.99",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
    description: "Premium wireless headphones with noise cancellation technology. Perfect for music lovers and professionals who demand the highest quality audio experience.",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Bluetooth 5.0 connectivity",
      "Premium leather ear cushions",
      "Quick charge technology"
    ]
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$199.99",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
    description: "Advanced fitness tracking and smartphone integration with heart rate monitoring, GPS, and water resistance.",
    features: [
      "Heart rate monitoring",
      "GPS tracking",
      "Water resistant",
      "7-day battery life",
      "Sleep tracking"
    ]
  },
  {
    id: 3,
    name: "Designer Sunglasses",
    price: "$149.99",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop",
    description: "Stylish sunglasses with UV protection and premium frame construction. Perfect for any occasion.",
    features: [
      "100% UV protection",
      "Scratch-resistant lenses",
      "Premium frame materials",
      "Lightweight design",
      "Includes carrying case"
    ]
  },
  {
    id: 4,
    name: "Yoga Mat",
    price: "$29.99",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1506629905607-c65808e1e8c4?w=600&h=600&fit=crop",
    description: "Non-slip yoga mat for all fitness levels with superior grip and comfort for your practice.",
    features: [
      "Non-slip surface",
      "Extra thick cushioning",
      "Eco-friendly materials",
      "Easy to clean",
      "Carrying strap included"
    ]
  },
  {
    id: 5,
    name: "Coffee Maker",
    price: "$79.99",
    category: "Home & Garden",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=600&fit=crop",
    description: "Automatic coffee maker with programmable timer and premium brewing system for the perfect cup every time.",
    features: [
      "Programmable timer",
      "12-cup capacity",
      "Auto shut-off",
      "Premium brewing system",
      "Easy-clean design"
    ]
  },
  {
    id: 6,
    name: "Running Shoes",
    price: "$89.99",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
    description: "Comfortable running shoes with excellent support and cushioning for long-distance running.",
    features: [
      "Superior cushioning",
      "Breathable mesh upper",
      "Durable outsole",
      "Arch support",
      "Lightweight design"
    ]
  }
];

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

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

          <div className={styles.productDetails}>
            <div className={styles.productImage}>
              <img src={product.image} alt={product.name} />
            </div>
            
            <div className={styles.productInfo}>
              <h1 className={styles.productTitle}>{product.name}</h1>
              <div className={styles.productCategory}>{product.category}</div>
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

              <div className={styles.productActions}>
                <button className={styles.addToCartButton}>
                  Add to Cart
                </button>
                <Link to="/" className={styles.backButton}>
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;