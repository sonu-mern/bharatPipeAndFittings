import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styles from "./ProductPage.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ServiceSidebar from "../components/Sidebar/ServiceSidebar";
import { allProducts } from "../utils/allproducts";
import KeyValueTable from "../components/ui/KeyValueTable";
import ThirdPartyInspection from "../components/ThirdPartyInspection/ThirdPartyInspection";
import ProductImageCarousel from "../components/ProductImageCarousel/ProductImageCarousel";
import ImageGridWithLabel from "../components/ImageGridWithTitle/ImageGridWithLabel";
import { mainProducts, materials } from "../utils/ProductsShortList";
import { slugify } from "../utils/helperFunction";

const ProductPage = () => {
  const { id } = useParams();
  const [isMobile, setIsMobile] = useState(false);
  const [product, setProduct] = useState(allProducts[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const foundProduct = allProducts.find(
      (p) => slugify(p.productShortName) === slugify(id)
    );
    setProduct(foundProduct);
  }, [id]);

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
      <Helmet>
        <title>{product.name} | Bharat Pipe & Fittings</title>
        <meta
          name="description"
          content={product?.description?.replace(/<[^>]+>/g, "").slice(0, 155)}
        />
        <link
          rel="canonical"
          href={`https://www.yourwebsite.com/products/${id}`}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.yourwebsite.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Products",
                item: "https://www.yourwebsite.com/#products",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: product.name,
                item: `https://www.yourwebsite.com/products/${id}`,
              },
            ],
          })}
        </script>
      </Helmet>

      <Navbar />
      <main className={styles.main}>
        <section className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="breadcrumb">
            <Link to="/">Home</Link>
            <span> / </span>
            <Link to="/#products">Products</Link>
            <span> / </span>
            <span>{product.name}</span>
          </nav>

          <header className={styles.productPageHeader}>
            <div className={styles.responsiveLayout}>
              {!isMobile && (
                <aside className={styles.sidebarResponsive}>
                  <ServiceSidebar data={mainProducts} title="Our Products" />
                  <br />
                  <ServiceSidebar data={materials} title="Our Materials" />
                </aside>
              )}

              <article className={styles.productPageContent}>
                <section className={styles.productDetails}>
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
                    <h1 className={styles.productTitle}>{product.name}</h1>
                    <hr />
                    <br />
                    <section className={styles.productDescription}>
                      <h3>Description</h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: product.description,
                        }}
                      />
                    </section>
                    <br />
                    {isMobile && (
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
                </section>

                <section className={styles.productFeatures}>
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
                      <section key={subProduct.id || index}>
                        <h2 className={styles.subProductHeading}>
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
                        </h2>

                        {subProduct?.images?.length > 0 ? (
                          <ThirdPartyInspection
                            img={subProduct.images}
                            alt={`${subProduct.name} inspection images`}
                          />
                        ) : (
                          <ImageGridWithLabel
                            imagesWithLabel={subProduct.imagesWithLabel}
                          />
                        )}

                        <p
                          dangerouslySetInnerHTML={{
                            __html: subProduct.description,
                          }}
                        />

                        <KeyValueTable
                          tableData={subProduct.materialSpecifications}
                        />
                      </section>
                    ))}
                  </div>
                </section>
              </article>

              {isMobile && (
                <aside className={styles.sidebarResponsive}>
                  <ServiceSidebar data={mainProducts} title="Our Products" />
                  <br />
                  <ServiceSidebar data={materials} title="Our Materials" />
                </aside>
              )}
            </div>
          </header>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
