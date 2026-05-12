import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../home.css";

export default function Home() {
  const [activeTab, setActiveTab] = useState("united-kingdom");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Close dropdown if user clicks outside
  const handleWrapperBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsSearchFocused(false);
    }
  };

  return (
    <>
      <Navbar transparent />
      
      {/* Exact Hero Section from Screenshot */}
      <section className="home-hero">
        <div className="container">
          <h1>Safe Home For Every Student</h1>
          <p className="lead">
            Find your perfect student accommodation, close to university & close to life
          </p>
          
          <div className="hero-features">
            <div className="hero-feature-pill">
              <i className="bi bi-shield-check"></i> 100% Safe and Verified Properties
            </div>
            <div className="hero-feature-pill">
              <i className="bi bi-headset"></i> 24x7 Assistance
            </div>
            <div className="hero-feature-pill">
              <i className="bi bi-slash-circle"></i> No Hidden Charges
            </div>
          </div>

          <div 
            className="hero-search-wrapper" 
            onFocus={() => setIsSearchFocused(true)}
            onBlur={handleWrapperBlur}
            tabIndex={-1}
          >
            <div className="hero-search-bar">
              <i className="bi bi-search search-icon"></i>
              <input 
                type="text" 
                placeholder="Search for City, University, Property" 
              />
              <button className="btn-search"><i className="bi bi-arrow-right-short"></i></button>
            </div>

            {/* Advanced Search Dropdown */}
            {isSearchFocused && (
              <div className="advanced-search-dropdown" tabIndex={0}>
                <div className="search-country-tabs">
                  <div className="search-country-tab active">
                    <span>🇬🇧</span> UK
                  </div>
                  <div className="search-country-tab">
                    <span>🇦🇺</span> AUS
                  </div>
                  <div className="search-country-tab">
                    <span>🇺🇸</span> USA
                  </div>
                  <div className="search-country-tab">
                    <span>🇩🇪</span> GER
                  </div>
                  <div className="search-country-tab">
                    <span>🇨🇦</span> CAN
                  </div>
                  <div className="search-country-tab">
                    <span>🇮🇪</span> IRL
                  </div>
                  <div className="search-country-tab">
                    <span>🇮🇹</span> ITA
                  </div>
                  <div className="search-country-tab">
                    <span>🇵🇹</span> PRT
                  </div>
                </div>

                <div className="search-dropdown-content">
                  <div className="search-dropdown-section">
                    <div className="search-section-title">
                      <i className="bi bi-clock"></i> Recent Searches
                    </div>
                    <div className="search-grid-1">
                      <Link to="/city/london" className="search-grid-item" style={{display: 'block'}}>London</Link>
                    </div>
                  </div>

                  <div className="search-dropdown-section">
                    <div className="search-section-title">
                      <i className="bi bi-geo-alt-fill"></i> Popular Cities in UK
                    </div>
                    <div className="search-grid-2">
                      <Link to="/city/london" className="search-grid-item" style={{display: 'block'}}>London</Link>
                      <Link to="/city/birmingham" className="search-grid-item" style={{display: 'block'}}>Birmingham</Link>
                      <Link to="/city/manchester" className="search-grid-item" style={{display: 'block'}}>Manchester</Link>
                      <Link to="/city/nottingham" className="search-grid-item" style={{display: 'block'}}>Nottingham</Link>
                      <Link to="/city/glasgow" className="search-grid-item" style={{display: 'block'}}>Glasgow</Link>
                      <Link to="/city/cardiff" className="search-grid-item" style={{display: 'block'}}>Cardiff</Link>
                    </div>
                  </div>

                  <div className="search-dropdown-section">
                    <div className="search-section-title">
                      <i className="bi bi-mortarboard-fill"></i> Popular University in UK
                    </div>
                    <div className="search-grid-2">
                      <Link to="/city/london" className="search-grid-item" style={{display: 'block'}}>King's College London (KCL)</Link>
                      <Link to="/city/london" className="search-grid-item" style={{display: 'block'}}>Queen Mary University of London (QMUL)</Link>
                      <Link to="/city/manchester" className="search-grid-item" style={{display: 'block'}}>University of Manchester</Link>
                      <Link to="/city/birmingham" className="search-grid-item" style={{display: 'block'}}>Birmingham City University (BCU)</Link>
                      <Link to="/city/nottingham" className="search-grid-item" style={{display: 'block'}}>Nottingham Trent University (NTU)</Link>
                      <Link to="/city/glasgow" className="search-grid-item" style={{display: 'block'}}>University of Glasgow</Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div className="recent-searches">
              Recent searches:
              <div className="recent-searches-pill">
                <i className="bi bi-geo-alt"></i> London <i className="bi bi-chevron-right" style={{fontSize: "10px", marginTop: "2px"}}></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Ticker Section */}
      <section className="review-ticker-section">
        <div className="container">
          <div className="ticker-container">
            <div className="google-rating">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" />
              <span className="fw-bold text-dark ms-1" style={{ fontSize: "14px" }}>Google</span>
              <div className="stars ms-2">★★★★★</div>
              <div className="score ms-2">4.6/5</div>
              <div className="reviews ms-1">(1387)</div>
            </div>
            <div className="ticker-content">
              <div className="ticker-text">
                "I had a quite interesting and overall positive experience booking my student accommodation through Room Scholars. It was the best choice I made before moving abroad." - <span className="author">Shubham, Springfield, United States</span> <span style={{color: "#ccc", margin: "0 12px"}}>•</span> "Great service and verified properties!" - <span className="author">Alex, London, UK</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="section-padding" style={{ background: "#f8f9fa", paddingBottom: "40px" }}>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="blog-card">
                <div className="img-wrapper">
                  <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80" alt="Blog" />
                </div>
                <div className="content">
                  <h5>From Amritsar to London & Dubai: How University Living & Belonging Shape Study...</h5>
                  <a href="#" className="read-more">Read More <i className="bi bi-chevron-right" style={{fontSize: "10px"}}></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-card">
                <div className="img-wrapper">
                  <img src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=600&q=80" alt="Blog" />
                </div>
                <div className="content">
                  <h5>Best Areas Guide for Student Housing in Birmingham</h5>
                  <a href="#" className="read-more">Read More <i className="bi bi-chevron-right" style={{fontSize: "10px"}}></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-card">
                <div className="img-wrapper">
                  <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600&q=80" alt="Blog" />
                </div>
                <div className="content">
                  <h5>From India to Leeds: The Unexpected Lessons I Learned Moving Countries</h5>
                  <a href="#" className="read-more">Read More <i className="bi bi-chevron-right" style={{fontSize: "10px"}}></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Stats Ribbon */}
      <section className="stats-ribbon">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-6">
              <div className="stat-item">
                <img src="https://cdn-icons-png.flaticon.com/512/2012/2012015.png" alt="Globe" className="icon" />
                <h3>640</h3>
                <p>Global Cities</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="stat-item">
                <img src="https://cdn-icons-png.flaticon.com/512/2942/2942784.png" alt="University" className="icon" />
                <h3>5.5k+</h3>
                <p>Universities Served</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="stat-item">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="House" className="icon" style={{ opacity: 0.6 }} />
                <h3>65k+</h3>
                <p>Safe Properties</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="stat-item">
                <img src="https://cdn-icons-png.flaticon.com/512/3048/3048122.png" alt="Students" className="icon" />
                <h3>12Mn</h3>
                <p>Students Assisted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Connect */}
      <section className="section-padding bg-white">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold" style={{ fontSize: "28px", color: "#1b1b3a" }}>Let's Connect</h2>
          <div className="row g-4">
            <div className="col-md-3">
              <a href="#" className="connect-card email">
                <i className="bi bi-envelope-fill icon"></i>
                care@roomscholars.com
              </a>
            </div>
            <div className="col-md-3">
              <a href="#" className="connect-card chat">
                <i className="bi bi-chat-dots-fill icon"></i>
                Live chat
              </a>
            </div>
            <div className="col-md-3">
              <a href="#" className="connect-card call">
                <i className="bi bi-telephone-fill icon"></i>
                Call us @ +91 9484707151
              </a>
            </div>
            <div className="col-md-3">
              <a href="#" className="connect-card whatsapp">
                <i className="bi bi-whatsapp icon"></i>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Media Spotlight */}
      <section className="media-spotlight">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2>Media Spotlight</h2>
              <p style={{ color: "#666", fontSize: "15px", lineHeight: "1.6" }}>Check out our media spotlight to see how we're making headlines and transforming student accommodation worldwide</p>
              
              <div className="media-logos">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/CNBC_logo.svg" alt="CNBC" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Forbes_logo.svg" alt="Forbes" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/The_Hindu_logo.svg" alt="The Hindu" />
              </div>
              
              <button className="btn-continue">Continue Reading</button>
            </div>
            <div className="col-lg-6">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" alt="Mockup" className="mockup-img" />
            </div>
          </div>
        </div>
      </section>

      {/* SEO Text & Accordions */}
      <section className="section-padding bg-white pt-0">
        <div className="container">
          <div className="mb-5" style={{ maxWidth: "900px" }}>
            <h4 style={{ color: "#1b1b3a", fontWeight: "700", fontSize: "18px", marginBottom: "16px" }}>Room Scholars – Find Your Perfect Student Accommodation Globally</h4>
            <ul style={{ color: "#444", fontSize: "14px", marginBottom: "16px" }}>
              <li className="mb-2">Transparent Rent Plans & Affordable Student Housing</li>
            </ul>
            <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.6" }}>
              Whether you're searching for a student apartment near your university or a little farther from the centre, we are there for you. So, no matter where your future takes you, whether it's a smaller student city or a major global destination, Room Scholars is here to ease your study abroad journey.
            </p>
          </div>

          <div className="accordion custom-accordion" id="bigAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                  Explore Student Accommodation Options Worldwide
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#bigAccordion">
                <div className="accordion-body">Details about exploring student accommodation...</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                  Modern Amenities for a Comfortable Student Lifestyle
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#bigAccordion">
                <div className="accordion-body">Details about modern amenities...</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                  More Than Accommodation - Exclusive Student Support
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#bigAccordion">
                <div className="accordion-body">Details about student support...</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                  Book Your Student Accommodation in 3 Easy Steps
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#bigAccordion">
                <div className="accordion-body">Details about booking steps...</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Student Homes Across the World */}
      <section className="section-padding bg-white pt-0">
        <div className="container">
          <h3 className="fw-bold mb-4" style={{ fontSize: "20px", color: "#444" }}>Explore Student Homes Across the World</h3>
          
          <div className="toggle-wrapper">
            <button className="toggle-btn active">Country</button>
            <button className="toggle-btn">City</button>
          </div>

          <div className="links-grid">
            <a href="#">United Kingdom</a>
            <a href="#">United States</a>
            <a href="#">Australia</a>
            <a href="#">Ireland</a>
            <a href="#">Canada</a>
            <a href="#">Germany</a>
            <a href="#">Spain</a>
            <a href="#">France</a>
            <a href="#">United Arab Emirates</a>
            <a href="#">Italy</a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding" style={{ background: "#fafafa" }}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <p className="text-muted fw-bold" style={{ fontSize: "13px", letterSpacing: "1px", textTransform: "uppercase" }}>Frequently Asked Questions</p>
              <h2 className="fw-bold mb-4" style={{ fontSize: "36px", color: "#1b1b3a", letterSpacing: "-1px" }}>We have 24/7 support available.</h2>
              <div className="d-flex gap-3">
                <button className="btn-whatsapp-outline"><i className="bi bi-whatsapp"></i> Whatsapp Us</button>
                <button className="btn-call-expert"><i className="bi bi-telephone-fill"></i> Call an Expert</button>
              </div>
            </div>
            
            <div className="col-lg-7">
              <div className="accordion custom-accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      What types of accommodation are available for students
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      At Room Scholars, students can choose from a variety of accommodation options. These include studio rooms, ensuites, shared apartments and private apartments.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      How to book student accommodation with Room Scholars?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Booking your student accommodation with us is very simple. Select the city/university you’re headed to, browse the properties, click on ‘Book Now’, and pay the deposit fee if required.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      Is there any deposit or booking fee?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes. We require a deposit/booking fee, which is refundable at the end of your tenancy. (T&C Apply)
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                      Are the rooms and apartments provided by Room Scholars verified?
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes. All the accommodation, from studio rooms to private apartments, is 100% verified. So, don’t worry, you’re in safe hands!
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
                      Does Room Scholars Offer Group Bookings?
                    </button>
                  </h2>
                  <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes! You can book in groups with your friends, and many properties offer special discounts.
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="btn btn-outline-primary mt-3" style={{ borderRadius: "6px", fontWeight: "600" }}>Read more</button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a href="#" className="floating-whatsapp">
        <i className="bi bi-whatsapp"></i>
      </a>

      <Footer />
    </>
  );
}
