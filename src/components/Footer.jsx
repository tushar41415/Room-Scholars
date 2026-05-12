import logoSrc from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="dark-footer">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-3">
            <img
              src={logoSrc}
              alt="Room Scholars"
              style={{
                height: "100px",
                marginBottom: "32px",
                filter: "brightness(0) invert(1)",
              }}
            />

            <div className="mb-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google"
                style={{ height: "20px" }}
              />
              <span className="fw-bold ms-1" style={{ fontSize: "14px" }}>
                Google
              </span>
              <span
                style={{
                  color: "#fbbc04",
                  letterSpacing: "2px",
                  margin: "0 8px",
                }}
              >
                ★★★★★
              </span>
              <div style={{ fontSize: "12px", marginTop: "4px" }}>
                4.6 on Google | 1,387 Reviews
              </div>
            </div>

            <div className="mb-4">
              <div className="fw-bold mb-2" style={{ fontSize: "14px" }}>
                Download our app
              </div>
              <div className="d-flex gap-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="App Store"
                  style={{ height: "36px" }}
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  style={{ height: "36px" }}
                />
              </div>
            </div>

            <div>
              <div className="fw-bold mb-2" style={{ fontSize: "14px" }}>
                Payment Options
              </div>
              <div className="d-flex gap-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                  alt="Visa"
                  style={{
                    height: "20px",
                    background: "#fff",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                  alt="Mastercard"
                  style={{
                    height: "20px",
                    background: "#fff",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg"
                  alt="Amex"
                  style={{
                    height: "20px",
                    background: "#fff",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <h6
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.2)",
                paddingBottom: "12px",
              }}
            >
              Support
            </h6>

            <div className="footer-contact-item">
              <div className="country">Australia</div>
              <div className="address">
                Unit-13, 13-15, Kliens Road, Northmead, NSW 2152, Australia
              </div>
              <div className="d-flex gap-2">
                <span className="phone-pill">
                  <i className="bi bi-whatsapp"></i>
                </span>
                <span className="phone-pill">
                  <i className="bi bi-telephone"></i> +61 279 123 007
                </span>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="country">United States</div>
              <div className="address">
                178 Columbus Ave #237190 SMB 32557 New York, NY 10023
              </div>
              <div className="d-flex gap-2">
                <span className="phone-pill">
                  <i className="bi bi-whatsapp"></i>
                </span>
                <span className="phone-pill">
                  <i className="bi bi-telephone"></i> +1 201 285 8299
                </span>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="country">India</div>
              <div className="address">
                Riana Aurelia Plot No- 93-94, 8th Floor, Sector-136, Noida-
                201305
              </div>
              <div className="d-flex gap-2">
                <span className="phone-pill">
                  <i className="bi bi-whatsapp"></i>
                </span>
                <span className="phone-pill">
                  <i className="bi bi-telephone"></i> +91 9484707151
                </span>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="country">United Kingdom</div>
              <div className="address">
                3rd Floor, 86-90 Paul Street, London - EC2A 4NE
              </div>
              <div className="d-flex gap-2">
                <span className="phone-pill">
                  <i className="bi bi-whatsapp"></i>
                </span>
                <span className="phone-pill">
                  <i className="bi bi-telephone"></i> +44 203 695 6785
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <h6
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.2)",
                paddingBottom: "12px",
              }}
            >
              Company
            </h6>
            <ul className="footer-col-links">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Scholarship</a>
              </li>
              <li>
                <a href="#">Refer & Earn</a>
              </li>
              <li>
                <a href="#">Group booking</a>
              </li>
              <li>
                <a href="#">Industry Report</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">List Your Property</a>
              </li>
              <li>
                <a href="#">Student Ambassador</a>
              </li>
              <li>
                <a href="#">Cost Of Living</a>
              </li>
              <li>
                <a href="#">
                  Podcast{" "}
                  <span
                    style={{
                      color: "#ff5a5f",
                      fontSize: "9px",
                      verticalAlign: "top",
                    }}
                  >
                    New
                  </span>
                </a>
              </li>
              <li>
                <a href="#">Press Release</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3">
            <div
              className="d-flex justify-content-end social-icons"
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.2)",
                paddingBottom: "12px",
              }}
            >
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
            <h6 className="mt-4 mb-3">Help</h6>
            <ul className="footer-col-links">
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    marginTop: "16px",
                    display: "inline-block",
                  }}
                >
                  care@roomscholars.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Room Scholars Accommodation Pvt Ltd.</span>
          <a href="#">Terms and conditions</a>
          <a href="#">Privacy policy</a>
        </div>
      </div>
    </footer>
  );
}
