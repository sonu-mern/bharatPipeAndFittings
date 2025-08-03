import React, { useState } from "react";
import styles from "./ContactPage.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { constantValue } from "../utils/constantValue";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\+?[\d\s\-\(\)]+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      const toEmail = constantValue.companyEmail;
      const subject = "New Contact Form Submission";
      const body = `
Full Name: ${formData.fullName}
Company Name: ${formData.companyName}
Email: ${formData.email}
Phone Number: ${formData.phoneNumber}
Message:
${formData.message}
      `;

      const mailtoLink = `mailto:${toEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      // Redirect to default mail client
      window.location.href = mailtoLink;

      // Reset form after short delay
      setTimeout(() => {
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
        setIsSubmitted(true);
      }, 1000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <h1 className={styles.heroTitle}>Contact Us</h1>
            <p className={styles.heroSubtitle}>
              Get in touch with us. We'd love to hear from you!
            </p>
          </div>

          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <h2 className={styles.contactInfoTitle}>Get In Touch</h2>
              <p className={styles.contactInfoText}>
                Have a question or need assistance? Our team is here to help.
                Fill out the form and we'll get back to you as soon as possible.
              </p>

              <div className={styles.contactDetails}>
                <div className={styles.contactDetail}>
                  <h3 className={styles.contactDetailTitle}>📧 Email</h3>
                  <p>{constantValue.companyEmail}</p>
                </div>
                <div className={styles.contactDetail}>
                  <h3 className={styles.contactDetailTitle}>📞 Phone</h3>
                  <p>{constantValue.companyPhone}</p>

                  <p>{constantValue.alternativePhone}</p>
                </div>
                <div className={styles.contactDetail}>
                  <h3 className={styles.contactDetailTitle}>🏢 Address</h3>
                  <p>{constantValue.companyAddress}</p>
                </div>
                <div className={styles.contactDetail}>
                  <h3 className={styles.contactDetailTitle}>
                    🏭 Manufacturing Plant 1
                  </h3>
                  <p>{constantValue.ManufacturingPlant1}</p>
                </div>
                <div className={styles.contactDetail}>
                  <h3 className={styles.contactDetailTitle}>
                    🏭 Manufacturing Plant 2
                  </h3>
                  <p>{constantValue.ManufacturingPlant2}</p>
                </div>
                <div className={styles.contactDetail}>
                  <h3 className={styles.contactDetailTitle}>🕒 Hours</h3>
                  <p>
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.formContainer}>
              {isSubmitted ? (
                <div className={styles.successMessage}>
                  <h3>Thank you for your message!</h3>
                  <p>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label htmlFor="fullName" className={styles.label}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`${styles.input} ${
                        errors.fullName ? styles.inputError : ""
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <span className={styles.error}>{errors.fullName}</span>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="companyName" className={styles.label}>
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className={styles.input}
                      placeholder="Enter your company name (optional)"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`${styles.input} ${
                        errors.email ? styles.inputError : ""
                      }`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <span className={styles.error}>{errors.email}</span>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phoneNumber" className={styles.label}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className={`${styles.input} ${
                        errors.phoneNumber ? styles.inputError : ""
                      }`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phoneNumber && (
                      <span className={styles.error}>{errors.phoneNumber}</span>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`${styles.textarea} ${
                        errors.message ? styles.inputError : ""
                      }`}
                      placeholder="Enter your message"
                      rows="6"
                    ></textarea>
                    {errors.message && (
                      <span className={styles.error}>{errors.message}</span>
                    )}
                  </div>

                  <button type="submit" className={styles.submitButton}>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
