import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../home.css";

export default function CityListing() {
  const { city } = useParams();
  const cityName = decodeURIComponent(city || "").replace(/\b\w/g, (c) => c.toUpperCase());
  const [tab, setTab] = useState("housing");

  // Mock properties matching the screenshot exactly
  const properties = [
    {
      id: 1,
      name: "iQ Sterling Court",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80",
      rating: "3.9",
      address: "6 Lakeside Way, Wembley Park, Wembley HA9 0BU, United Kingdom",
      distance: "7.34 miles from city centre",
      cashback: "Up to £550 Cashback",
      tagColor: "#5d3eff", // purple
      badges: [
        { icon: "bi-graph-up-arrow", text: "Trending", color: "#f07b65" },
        { icon: "bi-person", text: "International Guarantor Accepted", color: "#5d3eff" },
        { icon: "bi-tools", text: "Recently Refurbished", color: "#5d3eff" }
      ],
      amenities: ["Common Area", "Table Tennis", "Outdoor Courtyard", "Bicycle Storage"],
      fromPrice: "£260",
      nowPrice: "265"
    },
    {
      id: 2,
      name: "Wick Park",
      image: "https://images.unsplash.com/photo-1502672260266-1c1de2d9d00c?auto=format&fit=crop&w=600&q=80",
      rating: "4.8",
      address: "1 Stour Rd, Bow, London E3 2EQ, United Kingdom",
      distance: "5.70 miles from city centre",
      cashback: "Price Drop",
      tagColor: "#25d366", // green
      badges: [
        { icon: "", text: "No Visa No Pay", color: "#888" },
        { icon: "", text: "No Place No Pay", color: "#888" }
      ],
      amenities: ["Furnished", "Karaoke Room", "Outdoor Courtyard", "Cinema"],
      fromPrice: "£379",
      nowPrice: "353"
    },
    {
      id: 3,
      name: "Mannequin House",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80",
      rating: "4.8",
      address: "5 Blackhorse Ln, London E17 6DS, United Kingdom",
      distance: "8.10 miles from city centre",
      cashback: "Save up to £1,880",
      tagColor: "#ff5a5f", // red
      badges: [
        { icon: "bi-calendar", text: "Monthly Installment Plan", color: "#d5a63c" },
        { icon: "bi-person", text: "International Guarantor Accepted", color: "#5d3eff" }
      ],
      amenities: ["Air Conditioner", "BBQ", "Bicycle storage", "Car-Parking"],
      fromPrice: "£279",
      nowPrice: "275"
    },
    {
      id: 4,
      name: "Chapter Old street",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&q=80",
      rating: "4.2",
      address: "18 Paul St, London EC2A 4JH, United Kingdom",
      distance: "2.40 miles from city centre",
      cashback: "Up to £350 Cashback",
      tagColor: "#5d3eff", 
      badges: [
        { icon: "bi-person", text: "International Guarantor Accepted", color: "#5d3eff" },
        { icon: "bi-stars", text: "Free Bi-weekly Cleaning Service", color: "#25d366" }
      ],
      amenities: ["Games Room", "Lounge Area", "Communal Area", "Gym"],
      fromPrice: "£319",
      nowPrice: "289"
    },
    {
      id: 5,
      name: "Arch View House",
      image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
      rating: "5",
      address: "First Way, Wembley HA9 0JD, United Kingdom",
      distance: "7.01 miles from city centre",
      cashback: "Save up to £130",
      tagColor: "#ff5a5f",
      badges: [
        { icon: "bi-graph-up-arrow", text: "Trending", color: "#f07b65" },
        { icon: "bi-person", text: "International Guarantor Accepted", color: "#5d3eff" }
      ],
      amenities: ["Furnished", "Laundry", "Bicycle Storage", "Gym"],
      fromPrice: "£210.40",
      nowPrice: "189.40"
    },
    {
      id: 6,
      name: "Spring Mews",
      image: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=600&q=80",
      rating: "4.7",
      address: "10 Tinworth St, London SE11 5AL, United Kingdom",
      distance: "1.50 miles from city centre",
      cashback: "Save up to £130",
      tagColor: "#ff5a5f",
      badges: [
        { icon: "bi-person", text: "International Guarantor Accepted", color: "#5d3eff" }
      ],
      amenities: ["Swimming Pool", "Cinema", "Study Room", "Games Room"],
      fromPrice: "£385",
      nowPrice: "385" // from price and now price identical in screenshot
    }
  ];

  return (
    <div style={{ background: "#f7f6f3", minHeight: "100vh", paddingTop: "120px" }}>
      <Navbar transparent={false} />

      {/* Listing Header Toolbar */}
      <div style={{ background: "#fff", borderBottom: "1px solid #eee", padding: "12px 0", position: "sticky", top: "120px", zIndex: 10 }}>
        <div className="container d-flex align-items-center justify-content-between flex-wrap gap-3">
          <div className="d-flex align-items-center gap-2">
            <button 
              onClick={() => setTab("housing")}
              style={{ background: tab === "housing" ? "#4a3b8c" : "#fff", color: tab === "housing" ? "#fff" : "#444", border: "1px solid #ddd", padding: "8px 16px", borderRadius: "30px", fontWeight: "600", fontSize: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="bi bi-house-door-fill"></i> Student Housing
            </button>
            <button 
              onClick={() => setTab("private")}
              style={{ background: tab === "private" ? "#4a3b8c" : "#fff", color: tab === "private" ? "#fff" : "#444", border: "1px solid #ddd", padding: "8px 16px", borderRadius: "30px", fontWeight: "600", fontSize: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="bi bi-building"></i> Private Apartment
            </button>
          </div>

          <div className="d-flex align-items-center gap-2 flex-wrap">
            <button style={{ background: "#fff", color: "#ff5a5f", border: "1px solid #ff5a5f", padding: "6px 16px", borderRadius: "30px", fontWeight: "600", fontSize: "13px", display: "flex", alignItems: "center", gap: "6px" }}>
              <i className="bi bi-stars"></i> Smart filter <i className="bi bi-chevron-right" style={{fontSize:"10px"}}></i>
            </button>
            <button style={{ background: "#fff", color: "#444", border: "1px solid #ddd", padding: "6px 16px", borderRadius: "30px", fontWeight: "600", fontSize: "13px", display: "flex", alignItems: "center", gap: "6px" }}>
              <i className="bi bi-bank"></i> University <i className="bi bi-chevron-down" style={{fontSize:"10px"}}></i>
            </button>
            <button style={{ background: "#fff", color: "#444", border: "1px solid #ddd", padding: "6px 16px", borderRadius: "30px", fontWeight: "600", fontSize: "13px", display: "flex", alignItems: "center", gap: "6px" }}>
              <i className="bi bi-door-open"></i> Room Type <i className="bi bi-chevron-down" style={{fontSize:"10px"}}></i>
            </button>
            
            <div style={{ background: "#fff", border: "1px solid #ddd", borderRadius: "30px", padding: "4px", display: "flex", gap: "4px" }}>
              <button style={{ background: "#ff5a5f", color: "#fff", border: "none", padding: "4px 12px", borderRadius: "20px", fontWeight: "600", fontSize: "13px", display: "flex", alignItems: "center", gap: "6px" }}>
                <i className="bi bi-grid-fill"></i> Grid
              </button>
              <button style={{ background: "transparent", color: "#444", border: "none", padding: "4px 12px", borderRadius: "20px", fontWeight: "600", fontSize: "13px", display: "flex", alignItems: "center", gap: "6px" }}>
                <i className="bi bi-list-ul"></i> List
              </button>
            </div>

            <button style={{ background: "#fff", color: "#444", border: "1px solid #ddd", padding: "6px 16px", borderRadius: "30px", fontWeight: "600", fontSize: "13px", display: "flex", alignItems: "center", gap: "6px" }}>
              Sort By <i className="bi bi-chevron-down" style={{fontSize:"10px"}}></i>
            </button>
          </div>
        </div>
      </div>

      <div className="container mt-4 mb-5">
        <div className="row">
          {/* Sidebar Filters */}
          <aside className="col-lg-3 pe-lg-4">
            <div style={{ fontSize: "12px", color: "#666", marginBottom: "24px" }}>
              <Link to="/" style={{ color: "#5d3eff", textDecoration: "none" }}>Home</Link> &nbsp;›&nbsp;
              <Link to="/" style={{ color: "#5d3eff", textDecoration: "none" }}>United Kingdom</Link> &nbsp;›&nbsp;
              <span style={{ color: "#888" }}>Student Accommodation {cityName}</span>
            </div>

            <div style={{ background: "#fff", borderRadius: "12px", padding: "8px", border: "1px solid #eee", marginBottom: "24px", position: "relative" }}>
              <img src="https://maps.googleapis.com/maps/api/staticmap?center=London&zoom=11&size=400x150&maptype=roadmap" alt="Map" style={{ width: "100%", borderRadius: "8px", opacity: 0.6 }} />
              <button style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: "#fff", color: "#ff5a5f", border: "1px solid #ff5a5f", padding: "8px 20px", borderRadius: "6px", fontWeight: "600", fontSize: "14px" }}>
                View on Map
              </button>
            </div>

            {/* Accordions */}
            <div className="filter-sidebar">
              <div className="filter-block">
                <div className="filter-header d-flex justify-content-between align-items-center">
                  <span>Move-in & Move-out</span>
                  <i className="bi bi-chevron-up"></i>
                </div>
                <div className="filter-content mt-3">
                  <div style={{ border: "1px solid #ddd", padding: "12px 16px", borderRadius: "8px", color: "#666", fontSize: "13px", display: "flex", justifyContent: "space-between" }}>
                    <span>Move-in - Move-out</span>
                    <i className="bi bi-calendar3"></i>
                  </div>
                </div>
              </div>

              <hr className="my-3 text-muted" style={{opacity: 0.1}}/>

              <div className="filter-block">
                <div className="filter-header d-flex justify-content-between align-items-center">
                  <span>Distance (in miles)</span>
                  <i className="bi bi-chevron-up"></i>
                </div>
                <div className="filter-content mt-3">
                  <div style={{ position: "relative", height: "4px", background: "#ddd", borderRadius: "2px", margin: "32px 12px 16px" }}>
                    <div style={{ position: "absolute", left: "0", right: "0", height: "100%", background: "#5d3eff", borderRadius: "2px" }}></div>
                    <div style={{ position: "absolute", left: "-12px", top: "-12px", width: "28px", height: "28px", background: "#5d3eff", borderRadius: "50%", color: "#fff", fontSize: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>0.39</div>
                    <div style={{ position: "absolute", right: "-12px", top: "-12px", width: "28px", height: "28px", background: "#5d3eff", borderRadius: "50%", color: "#fff", fontSize: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>19.41</div>
                  </div>
                </div>
              </div>

              <hr className="my-3 text-muted" style={{opacity: 0.1}}/>

              <div className="filter-block">
                <div className="filter-header d-flex justify-content-between align-items-center">
                  <span>Price (£)</span>
                  <i className="bi bi-chevron-up"></i>
                </div>
                <div className="filter-content mt-3">
                  <div style={{ position: "relative", height: "4px", background: "#ddd", borderRadius: "2px", margin: "32px 12px 16px" }}>
                    <div style={{ position: "absolute", left: "0", right: "0", height: "100%", background: "#5d3eff", borderRadius: "2px" }}></div>
                    <div style={{ position: "absolute", left: "-16px", top: "-12px", width: "32px", height: "32px", background: "#5d3eff", borderRadius: "50%", color: "#fff", fontSize: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>160</div>
                    <div style={{ position: "absolute", right: "-16px", top: "-12px", width: "32px", height: "32px", background: "#5d3eff", borderRadius: "50%", color: "#fff", fontSize: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>1599</div>
                  </div>
                  <div className="d-flex gap-2">
                    <div style={{ flex: 1, border: "1px solid #ddd", borderRadius: "8px", padding: "8px 12px" }}>
                      <div style={{ fontSize: "10px", color: "#888" }}>Minimum</div>
                      <div style={{ fontSize: "13px", fontWeight: "600" }}>160</div>
                    </div>
                    <div style={{ flex: 1, border: "1px solid #ddd", borderRadius: "8px", padding: "8px 12px" }}>
                      <div style={{ fontSize: "10px", color: "#888" }}>Maximum</div>
                      <div style={{ fontSize: "13px", fontWeight: "600" }}>1599</div>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="my-3 text-muted" style={{opacity: 0.1}}/>

              <div className="filter-block">
                <div className="filter-header d-flex justify-content-between align-items-center">
                  <span>Tenancy</span>
                  <i className="bi bi-chevron-up"></i>
                </div>
                <div className="filter-content mt-3">
                  {['All', '0-25 Weeks', '25-40 Weeks', '40-45 Weeks', '45+ Weeks'].map((t, idx) => (
                    <label key={t} className="d-flex align-items-center gap-3 mb-3" style={{ cursor: "pointer" }}>
                      <div style={{ width: "20px", height: "20px", borderRadius: "50%", border: idx === 0 ? "6px solid #ff5a5f" : "2px solid #aaa", background: "#fff" }}></div>
                      <span style={{ fontSize: "14px", color: "#333", fontWeight: idx === 0 ? "600" : "400" }}>{t}</span>
                    </label>
                  ))}
                </div>
              </div>

              <hr className="my-3 text-muted" style={{opacity: 0.1}}/>

              <div className="filter-block">
                <div className="filter-header d-flex justify-content-between align-items-center mb-3">
                  <span>Room Type <i className="bi bi-info-circle ms-1 text-muted" style={{fontSize: "12px"}}></i></span>
                  <div className="d-flex gap-2 align-items-center">
                    <span style={{ color: "#ff5a5f", fontSize: "12px", fontWeight: "600" }}>Clear All</span>
                    <i className="bi bi-chevron-up"></i>
                  </div>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {['Studio', 'Apartments', 'Ensuite', 'Shared', 'Non Ensuite'].map(r => (
                    <button key={r} style={{ border: "1px solid #ddd", background: "#fff", color: "#444", padding: "6px 12px", borderRadius: "20px", fontSize: "13px", display: "flex", alignItems: "center", gap: "6px" }}>
                      <i className="bi bi-plus" style={{fontSize: "16px"}}></i> {r}
                    </button>
                  ))}
                </div>
              </div>

              <hr className="my-3 text-muted" style={{opacity: 0.1}}/>

              <div className="filter-block">
                <div className="filter-header d-flex justify-content-between align-items-center mb-3">
                  <span>Bathroom Type</span>
                  <div className="d-flex gap-2 align-items-center">
                    <span style={{ color: "#ff5a5f", fontSize: "12px", fontWeight: "600" }}>Clear All</span>
                    <i className="bi bi-chevron-up"></i>
                  </div>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {['No preference', 'Shared', 'Bathroom - Shared between 2', 'Private'].map(b => (
                    <button key={b} style={{ border: "1px solid #ddd", background: "#fff", color: "#444", padding: "6px 12px", borderRadius: "20px", fontSize: "13px", display: "flex", alignItems: "center", gap: "6px" }}>
                      <i className="bi bi-plus" style={{fontSize: "16px"}}></i> {b}
                    </button>
                  ))}
                </div>
              </div>

              <hr className="my-3 text-muted" style={{opacity: 0.1}}/>

              <div className="filter-block">
                <div className="filter-header d-flex justify-content-between align-items-center mb-3">
                  <span>Months</span>
                </div>
                <div className="d-flex flex-wrap gap-2 mb-2">
                  {['March', 'April', 'May'].map(m => (
                    <button key={m} style={{ border: "1px solid #ddd", background: "#fff", color: "#444", padding: "6px 12px", borderRadius: "20px", fontSize: "13px", display: "flex", alignItems: "center", gap: "6px" }}>
                      <i className="bi bi-plus" style={{fontSize: "16px"}}></i> {m}
                    </button>
                  ))}
                </div>
                <div style={{ color: "#ff5a5f", fontSize: "13px", fontWeight: "600", padding: "4px" }}>+8 more</div>
              </div>

              <hr className="my-3 text-muted" style={{opacity: 0.1}}/>

              <div className="filter-block">
                <div className="filter-header d-flex justify-content-between align-items-center mb-3">
                  <span>Amenities</span>
                  <div className="d-flex gap-2 align-items-center">
                    <span style={{ color: "#ff5a5f", fontSize: "12px", fontWeight: "600" }}>Clear All</span>
                    <i className="bi bi-chevron-up"></i>
                  </div>
                </div>
                <div className="d-flex flex-wrap gap-2 mb-2">
                  {['Washing Machine', '24/7 Assistance', 'Smart TV', 'Air Conditioner', 'Outdoor Balcony'].map(a => (
                    <button key={a} style={{ border: "1px solid #ddd", background: "#fff", color: "#444", padding: "6px 12px", borderRadius: "20px", fontSize: "13px", display: "flex", alignItems: "center", gap: "6px" }}>
                      <i className="bi bi-plus" style={{fontSize: "16px"}}></i> {a}
                    </button>
                  ))}
                </div>
                <div className="text-end" style={{ color: "#ff5a5f", fontSize: "13px", fontWeight: "600", padding: "4px" }}>+282 more</div>
              </div>

              <hr className="my-4 text-muted" style={{opacity: 0.1}}/>

              <div className="d-flex justify-content-between align-items-center mb-4">
                <span style={{ fontSize: "14px", fontWeight: "600", color: "#333" }}>Dual Occupancy</span>
                <div style={{ width: "40px", height: "24px", background: "#e0e0e0", borderRadius: "12px", position: "relative" }}>
                  <div style={{ width: "20px", height: "20px", background: "#fff", borderRadius: "50%", position: "absolute", top: "2px", left: "2px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}></div>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <span style={{ fontSize: "14px", fontWeight: "600", color: "#333" }}>Local Guarantor</span>
                <div style={{ width: "40px", height: "24px", background: "#e0e0e0", borderRadius: "12px", position: "relative" }}>
                  <div style={{ width: "20px", height: "20px", background: "#fff", borderRadius: "50%", position: "absolute", top: "2px", left: "2px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}></div>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span style={{ fontSize: "14px", fontWeight: "600", color: "#333" }}>Newly Added</span>
                <div style={{ width: "40px", height: "24px", background: "#e0e0e0", borderRadius: "12px", position: "relative" }}>
                  <div style={{ width: "20px", height: "20px", background: "#fff", borderRadius: "50%", position: "absolute", top: "2px", left: "2px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}></div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Grid */}
          <main className="col-lg-9 pt-2">
            <div className="d-flex justify-content-between align-items-start mb-4">
              <div>
                <h2 className="fw-bold mb-2" style={{ fontSize: "24px", color: "#1b1b3a" }}>Student Accommodation {cityName}</h2>
                <div style={{ color: "#666", fontSize: "13px" }}>
                  <i className="bi bi-volume-up-fill" style={{color: "#5d3eff"}}></i> Our student accommodation in {cityName} are close to major universities like <span className="fw-bold">Imperial College, University C...</span> <a href="#" style={{ color: "#5d3eff", textDecoration: "underline" }}>Read More!</a>
                </div>
              </div>
              <div style={{ color: "#666", fontSize: "13px", fontWeight: "500", marginTop: "4px" }}>251 results</div>
            </div>

            <div className="row g-4">
              {/* Properties 1-3 */}
              {properties.slice(0, 3).map(p => (
                <div className="col-md-4" key={p.id}>
                  <PropertyCard p={p} />
                </div>
              ))}

              {/* Inline Banner 1 */}
              <div className="col-12 mt-4 mb-2">
                <div style={{ background: "#2e1e5b", borderRadius: "16px", overflow: "hidden", display: "flex", alignItems: "center", position: "relative" }}>
                  <div style={{ width: "25%", height: "100%", position: "absolute", left: 0, top: 0, backgroundImage: "url('https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png')", backgroundSize: "cover", opacity: 0.8, clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)" }}></div>
                  <div style={{ marginLeft: "28%", flex: 1, padding: "32px 24px", color: "#fff", textAlign: "center" }}>
                    <div style={{ fontSize: "12px", letterSpacing: "1px", marginBottom: "8px" }}>OFFICIAL PARTNER</div>
                    <h3 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "24px" }}>Imperial College London</h3>
                    <div className="d-flex justify-content-center align-items-center gap-4">
                      <div style={{ fontSize: "20px", fontWeight: "bold", display: "flex", alignItems: "center", gap: "8px" }}>
                        <i className="bi bi-layers-fill"></i> UNIVERSITY<br/>LIVING
                      </div>
                      <i className="bi bi-x-lg" style={{opacity: 0.5}}></i>
                      <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                        Imperial College<br/>London
                      </div>
                    </div>
                  </div>
                  <div style={{ background: "#fff", padding: "40px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <h4 style={{ color: "#1b1b3a", fontWeight: "bold", marginBottom: "20px", fontSize: "24px", textAlign: "center" }}>Explore<br/>Properties</h4>
                    <button style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#e31837", color: "#fff", border: "none", fontSize: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <i className="bi bi-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* Everyone's Eyeing These */}
              <div className="col-12 mt-4 mb-2">
                <h5 style={{ fontWeight: "700", color: "#1b1b3a", fontSize: "18px", display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                  🔥 Everyone's Eyeing These
                </h5>
                <div className="d-flex gap-3" style={{ overflowX: "auto", paddingBottom: "12px" }}>
                  {/* Mini cards */}
                  {[
                    {name: "iQ Sterling Court", views: "4191", price: "265", img: properties[0].image, offer: "Offer upto £530", tag: "Hot Pick", tagColor: "#ff9800"},
                    {name: "Arbour House", views: "3549", price: "216.80", img: properties[1].image, offer: "Offer upto £380"},
                    {name: "Arch View House", views: "3326", price: "189.40", img: properties[4].image, offer: "Offer upto £130"}
                  ].map((mini, i) => (
                    <div key={i} style={{ minWidth: "320px", background: "#fff", borderRadius: "12px", padding: "12px", border: "1px solid #eee", display: "flex", gap: "16px", position: "relative", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
                      <div style={{ width: "100px", height: "100px", borderRadius: "8px", backgroundImage: `url(${mini.img})`, backgroundSize: "cover" }}>
                        <div style={{ background: "#22c55e", color: "#fff", fontSize: "10px", padding: "2px 6px", borderBottomRightRadius: "8px", display: "inline-block", fontWeight: "bold" }}>{mini.offer}</div>
                        {mini.tag && <div style={{ position: "absolute", bottom: "12px", left: "12px", background: mini.tagColor, color: "#fff", fontSize: "10px", padding: "2px 6px", borderRadius: "4px", fontWeight: "bold" }}>{mini.tag}</div>}
                      </div>
                      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                        <div style={{ fontWeight: "bold", fontSize: "14px", marginBottom: "4px", color: "#1b1b3a" }}>{mini.name}</div>
                        <div style={{ fontSize: "12px", color: "#666", marginBottom: "auto" }}>{mini.views} students viewed this property</div>
                        <div className="d-flex justify-content-between align-items-end mt-2">
                          <div style={{ fontSize: "12px", color: "#666" }}>From <br/><span style={{ color: "#d14138", fontWeight: "bold", fontSize: "15px" }}>£{mini.price}</span>/wk</div>
                          <button style={{ background: "#4a3b8c", color: "#fff", border: "none", padding: "6px 16px", borderRadius: "6px", fontSize: "12px", fontWeight: "600" }}>Enquire</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Properties 4-6 */}
              {properties.slice(3, 6).map(p => (
                <div className="col-md-4" key={p.id}>
                  <PropertyCard p={p} />
                </div>
              ))}
              
              {/* Inline Banner 2 */}
              <div className="col-12 mt-4 mb-2">
                <div style={{ background: "#f8f0d8", borderRadius: "16px", overflow: "hidden", display: "flex", alignItems: "center", position: "relative" }}>
                  <div style={{ width: "20%", height: "100%", position: "absolute", left: 0, top: 0, backgroundImage: "url('https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png')", backgroundSize: "cover", opacity: 0.8, clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)" }}></div>
                  <div style={{ marginLeft: "22%", flex: 1, padding: "32px 24px", color: "#333", textAlign: "center" }}>
                    <div style={{ fontSize: "12px", letterSpacing: "1px", marginBottom: "8px", fontWeight: "600" }}>OFFICIAL PARTNER</div>
                    <h3 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "24px" }}>School of Audio Engineering</h3>
                    <div className="d-flex justify-content-center align-items-center gap-4">
                      <div style={{ fontSize: "20px", fontWeight: "bold", display: "flex", alignItems: "center", gap: "8px", color: "#1b1b3a" }}>
                        <i className="bi bi-layers-fill" style={{color: "#5d3eff"}}></i> UNIVERSITY<br/>LIVING
                      </div>
                      <i className="bi bi-x-lg" style={{opacity: 0.5}}></i>
                      <div style={{ fontSize: "28px", fontWeight: "900", fontStyle: "italic", color: "#000" }}>
                        sae
                      </div>
                    </div>
                  </div>
                  <div style={{ background: "#fff", padding: "40px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <h4 style={{ color: "#1b1b3a", fontWeight: "bold", marginBottom: "20px", fontSize: "24px", textAlign: "center" }}>Explore<br/>Properties</h4>
                    <button style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#e31837", color: "#fff", border: "none", fontSize: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <i className="bi bi-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </main>
        </div>
      </div>

      {/* Floating Action Button */}
      <div style={{ position: "fixed", bottom: "32px", left: "50%", transform: "translateX(-50%)", background: "#111", color: "#fff", borderRadius: "30px", display: "flex", overflow: "hidden", zIndex: 100, boxShadow: "0 8px 24px rgba(0,0,0,0.2)" }}>
        <button style={{ background: "transparent", color: "#fff", border: "none", padding: "12px 24px", display: "flex", alignItems: "center", gap: "8px", fontWeight: "600", fontSize: "14px", borderRight: "1px solid #333" }}>
          <i className="bi bi-files"></i> Compare
        </button>
        <button style={{ background: "transparent", color: "#fff", border: "none", padding: "12px 24px", display: "flex", alignItems: "center", gap: "8px", fontWeight: "600", fontSize: "14px" }}>
          <i className="bi bi-heart-fill"></i> Wishlist
        </button>
      </div>

      <Footer />
    </div>
  );
}

function PropertyCard({ p }) {
  return (
    <div style={{ background: "#fff", borderRadius: "12px", overflow: "hidden", border: "1px solid #eee", height: "100%", display: "flex", flexDirection: "column", position: "relative", boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}>
      {/* Image Area */}
      <div style={{ position: "relative", height: "180px" }}>
        <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        
        {/* Cashback Tag */}
        <div style={{ position: "absolute", top: "12px", left: "12px", background: p.tagColor, color: "#fff", padding: "4px 8px", borderRadius: "6px", fontSize: "11px", fontWeight: "bold", zIndex: 2 }}>
          {p.cashback}
        </div>

        {/* Top Right Actions */}
        <div style={{ position: "absolute", top: "12px", right: "12px", display: "flex", gap: "8px", zIndex: 2 }}>
          <div style={{ width: "28px", height: "28px", background: "rgba(0,0,0,0.4)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
            <i className="bi bi-files"></i>
          </div>
          <div style={{ width: "28px", height: "28px", background: "rgba(0,0,0,0.4)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
            <i className="bi bi-heart"></i>
          </div>
        </div>

        {/* Rating */}
        <div style={{ position: "absolute", bottom: "12px", right: "12px", background: "#fff", padding: "2px 6px", borderRadius: "4px", fontSize: "11px", fontWeight: "bold", display: "flex", alignItems: "center", gap: "4px", zIndex: 2 }}>
          <i className="bi bi-star-fill text-warning"></i> {p.rating}
        </div>

        {/* Carousel Dots */}
        <div style={{ position: "absolute", bottom: "12px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "4px", zIndex: 2 }}>
          {[1,2,3,4,5].map(dot => (
            <div key={dot} style={{ width: "6px", height: "6px", borderRadius: "50%", background: dot === 1 ? "#fff" : "rgba(255,255,255,0.5)" }}></div>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div style={{ padding: "16px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h5 style={{ fontWeight: "700", fontSize: "16px", color: "#1b1b3a", marginBottom: "4px" }}>{p.name}</h5>
        <div style={{ color: "#666", fontSize: "11px", display: "flex", alignItems: "flex-start", gap: "4px", marginBottom: "12px" }}>
          <i className="bi bi-geo-alt-fill mt-1"></i> 
          <div>
            {p.address}<br/>
            <span style={{ color: "#888" }}>{p.distance}</span>
          </div>
        </div>

        {/* Badges */}
        <div className="d-flex flex-wrap gap-2 mb-3">
          {p.badges.map((b, i) => (
            <div key={i} style={{ color: b.color, background: `${b.color}15`, padding: "4px 8px", borderRadius: "4px", fontSize: "10px", fontWeight: "600", display: "flex", alignItems: "center", gap: "4px" }}>
              {b.icon && <i className={b.icon}></i>} {b.text}
            </div>
          ))}
        </div>

        {/* Amenities */}
        <div className="d-flex flex-wrap gap-2 mb-3">
          {p.amenities.map((a, i) => (
            <div key={i} style={{ border: "1px solid #eee", color: "#666", padding: "4px 8px", borderRadius: "4px", fontSize: "10px", display: "flex", alignItems: "center", gap: "4px" }}>
              <i className="bi bi-check2"></i> {a}
            </div>
          ))}
        </div>

        {/* Pricing & CTA */}
        <div className="mt-auto d-flex justify-content-between align-items-end pt-3" style={{ borderTop: "1px solid #eee" }}>
          <div>
            <div style={{ fontSize: "11px", color: "#888", textDecoration: "line-through" }}>From {p.fromPrice}</div>
            <div style={{ fontSize: "15px", fontWeight: "bold", color: "#d14138" }}>
              £{p.nowPrice}<span style={{ fontSize: "11px", color: "#666", fontWeight: "normal" }}>/wk</span>
            </div>
          </div>
          <button style={{ background: "#4a3b8c", color: "#fff", border: "none", padding: "8px 24px", borderRadius: "6px", fontWeight: "600", fontSize: "13px" }}>
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
}
