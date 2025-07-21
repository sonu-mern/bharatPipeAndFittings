import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./ProductPage.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ServiceSidebar from "../components/Sidebar/ServiceSidebar";
import { allProducts } from "../utils/allproducts";
import KeyValueTable from "../components/ui/KeyValueTable";
import ThirdPartyInspection from "../components/ThirdPartyInspection/ThirdPartyInspection";
import ProductImageCarousel from "../components/ProductImageCarousel/ProductImageCarousel";

const ProductPage = () => {
  const { id } = useParams();

  // ✅ Always declare all hooks FIRST
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    handleResize(); // run once
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Only lookup product AFTER hooks
  const product = allProducts.find(
    (p) => p.productShortName.toLowerCase() === id.toLowerCase()
  );

  // ✅ 404 page (after hooks)
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

          <div className={styles.productPageHeader}>
            <div className={styles.responsiveLayout}>
              {!isMobile && (
                <aside className={styles.sidebarResponsive}>
                  <ServiceSidebar />
                </aside>
              )}

              <div className={styles.productPageContent}>
                <div className={styles.productDetails}>
                  <div className={styles.productImage}>
                    <ProductImageCarousel
                      images={product.images}
                      name={product.name}
                    />
                    <br />
                    {!isMobile && (
                      <div className={styles.connectDiv}>
                        <h3>Connect with Us</h3>
                        <p>
                          {product.connectDivDetails} Absolutely,{" "}
                          {product.productShortName} is in stock and ready to
                          deliver. Need a custom solution? Contact us with your
                          requirements to get a free quote. Make an enquiry →
                        </p>
                      </div>
                    )}
                  </div>

                  <div className={styles.productInfo}>
                    <h6 className={styles.productTitle}>{product.name}</h6>
                    <hr />
                    <br />
                    <div className={styles.productDescription}>
                      <h3>Description</h3>
                      <p>{product.description}</p>
                    </div>
                    <br />
                    {isMobile && (
                      <div className={styles.connectDiv}>
                        <h3>Connect with Us</h3>
                        <p>{product.connectDivDetails}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className={styles.productFeatures}>
                  <h3>
                    <span
                      style={{
                        color: "#22c55e",
                        fontSize: "1em",
                        verticalAlign: "middle",
                        marginRight: 8,
                      }}
                    >
                      ✓
                    </span>
                    {product.productDetails.tableData.tableName}
                  </h3>

                  <KeyValueTable
                    tableData={
                      product.productDetails.tableData.materialSpecifications
                    }
                  />

                  <hr />
                  <hr />
                  <hr />

                  <div>
                    <br />
                    {product?.subProducts?.map((subProduct, index) => (
                      <div key={subProduct.id || index}>
                        <h1 className={styles.subProductHeading}>
                          <span
                            style={{
                              color: "#22c55e",
                              fontSize: "1em",
                              verticalAlign: "middle",
                              marginRight: 8,
                            }}
                          >
                            ✓
                          </span>
                          {subProduct.name}
                        </h1>

                        <ThirdPartyInspection img={subProduct.images} />
                        <p>{subProduct.description}</p>

                        <KeyValueTable
                          tableData={subProduct.materialSpecifications}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {isMobile && (
                <aside className={styles.sidebarResponsive}>
                  <ServiceSidebar />
                  <br />
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
