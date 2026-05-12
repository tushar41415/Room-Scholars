import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logoSrc from "../assets/logo.svg";

export default function Navbar({ transparent = true }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = transparent && !isScrolled;

  return (
    <header style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
      <div
        className="promo-bar"
        style={{
          background: "#5d3eff",
          color: "#fff",
          textAlign: "center",
          padding: "8px",
          fontSize: "14px",
          fontWeight: "700",
        }}
      >
        Our 10th Birthday Rewards! Unlock 10 Weeks of Rent FREE & More*
      </div>
      <nav
        className={`ul-navbar ${isTransparent ? "" : "static-nav"}`}
        style={
          isTransparent
            ? { background: "transparent", padding: "16px 0", transition: "all 0.3s" }
            : {
                background: "#fff",
                borderBottom: "1px solid #eee",
                padding: "12px 0",
                transition: "all 0.3s",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
              }
        }
      >
        <div className="container d-flex align-items-center justify-content-between">
          <Link
            to="/"
            className="brand d-flex align-items-center"
            style={
              isTransparent
                ? { color: "#fff", textDecoration: "none" }
                : { color: "var(--ul-primary)", textDecoration: "none" }
            }
          >
            <img
              src={logoSrc}
              alt="Room Scholars"
              className="brand-logo"
              style={{ 
                height: "60px", 
                transition: "all 0.3s",
                filter: isTransparent ? "brightness(0) invert(1)" : "brightness(0)" 
              }}
            />
          </Link>
          
          {/* Sticky Search Bar */}
          {!isTransparent && (
            <div className="sticky-search-bar mx-4 d-none d-md-flex align-items-center" style={{ flex: 1, maxWidth: "480px", border: "1px solid #ddd", borderRadius: "8px", padding: "8px 16px" }}>
              <i className="bi bi-search text-muted me-2"></i>
              <input type="text" placeholder="Search for City, University, Prope..." style={{ border: "none", outline: "none", width: "100%", fontSize: "14px" }} />
            </div>
          )}

          <div className="d-none d-lg-flex align-items-center" style={{ gap: "24px" }}>
            <a
              className="nav-link"
              style={{ color: isTransparent ? "#fff" : "#1b1b3a", fontWeight: "600", fontSize: "13px", textDecoration: "none" }}
              href="#"
            >
              My Kinda Room
            </a>
            <a
              className="nav-link position-relative"
              style={{ color: isTransparent ? "#fff" : "#1b1b3a", fontWeight: "600", fontSize: "13px", textDecoration: "none" }}
              href="#"
            >
              Group Booking
              <span className="badge-new" style={{ position: "absolute", top: "-10px", right: "-20px", background: "#ff5a5f", color: "#fff", padding: "2px 4px", borderRadius: "8px", fontSize: "9px", fontWeight: "700" }}>New</span>
            </a>
            <div className="dropdown">
              <a
                className="nav-link dropdown-toggle"
                style={{ color: isTransparent ? "#fff" : "#1b1b3a", fontWeight: "600", fontSize: "13px", textDecoration: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }}
                data-bs-toggle="dropdown"
              >
                Services <i className="bi bi-chevron-down" style={{ fontSize: "11px" }}></i>
              </a>
            </div>
            <div className="dropdown">
              <a
                className="nav-link dropdown-toggle"
                style={{ color: isTransparent ? "#fff" : "#1b1b3a", fontWeight: "600", fontSize: "13px", textDecoration: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }}
                data-bs-toggle="dropdown"
              >
                Contact Us <i className="bi bi-chevron-down" style={{ fontSize: "11px" }}></i>
              </a>
            </div>
            <button className="btn-login" style={{ background: "transparent", color: isTransparent ? "#fff" : "#1b1b3a", border: isTransparent ? "1px solid #fff" : "1px solid #1b1b3a", padding: "6px 20px", borderRadius: "30px", fontWeight: "600", fontSize: "13px", marginLeft: "4px" }}>
              Login
            </button>
          </div>
          <button className="d-lg-none btn btn-light">
            <i className="bi bi-list"></i>
          </button>
        </div>
      </nav>
    </header>
  );
}
