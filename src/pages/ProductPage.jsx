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
import { slugify } from "../utils/helperFunction";
import { mainProducts, materials } from "../utils/productsShortList";
import { constantValue } from "../utils/constantValue";

const ProductPage = () => {
  const { id } = useParams();
  const [isMobile, setIsMobile] = useState(false);
  const [product, setProduct] = useState(allProducts[0]);

  useEffect(() => {
    // Only use window.scrollTo in browser environment
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 900);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
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
        <title>
          {product.name} | {constantValue.companyName}
        </title>
        <meta
          name="description"
          content={product?.description?.replace(/<[^>]+>/g, "").slice(0, 155)}
        />
        <meta
          name="keywords"
          content={`${product.name}, ${product.productShortName}, pipe manufacturer India, ${product.material} products, industrial supplies, ${constantValue.companyName}`}
        />
        <meta name="author" content={constantValue.companyName} />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content={`${product.name} | ${constantValue.companyName}`}
        />
        <meta
          property="og:description"
          content={product?.description?.replace(/<[^>]+>/g, "").slice(0, 155)}
        />
        <meta property="og:type" content="product" />
        <meta
          property="og:url"
          content={`${constantValue.companyUrl}/product/${id}`}
        />
        <meta
          property="og:image"
          content={
            product.images?.[0] || `${constantValue.companyUrl}/logo.jpeg`
          }
        />
        <meta property="og:site_name" content={constantValue.companyName} />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${product.name} | ${constantValue.companyName}`}
        />
        <meta
          name="twitter:description"
          content={product?.description?.replace(/<[^>]+>/g, "").slice(0, 155)}
        />
        <meta
          name="twitter:image"
          content={
            product.images?.[0] || `${constantValue.companyUrl}/logo.jpeg`
          }
        />

        <link
          rel="canonical"
          href={`${constantValue.companyUrl}/product/${id}`}
        />

        {/* Structured Data - Product */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product?.description?.replace(/<[^>]+>/g, ""),
            image:
              product.images?.[0] || `${constantValue.companyUrl}/logo.jpeg`,
            brand: {
              "@type": "Brand",
              name: constantValue.companyName,
            },
            manufacturer: {
              "@type": "Organization",
              name: constantValue.companyName,
              url: constantValue.companyUrl,
            },
            category: "Industrial Supplies",
            material: product.material,
            url: `${constantValue.companyUrl}/product/${id}`,
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceCurrency: "INR",
              price: "Contact for quote",
              seller: {
                "@type": "Organization",
                name: constantValue.companyName,
              },
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: constantValue.companyUrl,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Products",
                item: `${constantValue.companyUrl}#products`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: product.name,
                item: `${constantValue.companyUrl}/product/${id}`,
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
