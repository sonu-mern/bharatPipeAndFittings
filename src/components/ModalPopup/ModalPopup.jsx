import React from "react";
import styles from "./ModalPopup.module.css";

const ModalPopup = () => {
  return (
    <div className={`${styles.modal_popup} ${styles.one}`}>
      <div className={styles["modal-popup-inner"]}>
        <div className={styles["close-modal"]}>
          <i className="fa fa-times"></i>
        </div>
        <div className={styles.modal_box}>
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className={styles.form_inner}>
                <div className={styles.form_content}>
                  <form
                    className={styles["contact-form"]}
                    method="post"
                    action="https://metallinksteelalloys.com/enquiry.php"
                  >
                    <p>
                      <label>
                        Your name
                        <br />
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Enter Your Name"
                          required
                        />
                        <br />
                        <i className="fa fa-user"></i>
                        <br />
                      </label>
                    </p>
                    <p>
                      <label>
                        Your email
                        <br />
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter Your Email"
                          required
                        />
                        <br />
                        <i className="fa fa-envelope"></i>
                        <br />
                      </label>
                    </p>
                    <p>
                      <label>
                        Subject
                        <br />
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          placeholder="Enter Your Subject"
                          required
                        />
                        <br />
                        <i className="fa fa-folder"></i>
                        <br />
                      </label>
                    </p>
                    <p>
                      <label>
                        Your message (optional)
                        <br />
                        <textarea
                          name="message"
                          id="message"
                          cols="40"
                          rows="10"
                          placeholder="Enter Your Message"
                        ></textarea>
                        <br />
                        <i className="fa fa-comments"></i>
                        <br />
                      </label>
                    </p>
                    <p>
                      <input type="submit" value="Submit" />
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className={styles.about_company_inner}>
                <div className={styles.abt_content}>
                  <div className={styles.logo}>
                    <img
                      src="assets/images/logo.png"
                      alt="Company Logo"
                      className={styles.company_logo_modal}
                    />
                  </div>
                  <div className={styles.text}>
                    <p>
                      With 35 years of experience in metal industries, we stick
                      with our basic principles and offer excellent quality
                      products to worldwide customers to build their
                      high-performance applications. We made the benchmark for
                      ourselves in the national and international markets with
                      our technical expertized and facilities. Our teams are
                      highly qualified and professional who anxious to face new
                      challenges of our competitors around the world. For any
                      type of ferrous and non-ferrous product requirement
                      contact us today.
                    </p>
                    <a href="#">Read More</a>
                  </div>
                  <div className={styles.copright}>
                    © 2024 Metal-Link Steel & Alloys. All Rights Reserved.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPopup;
