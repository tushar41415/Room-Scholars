import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import { PROPERTIES } from '../data/locations'

export default function CityListing(){
  const { city } = useParams()
  const cityName = decodeURIComponent(city || '').replace(/\b\w/g, c=>c.toUpperCase())
  const [tab, setTab] = useState('housing')
  const [view, setView] = useState('grid')
  const properties = PROPERTIES.default

  return (
    <>
      <Navbar transparent={false} />

      <div className="container">
        <div className="crumb">
          <Link to="/">Home</Link> &nbsp;›&nbsp; <Link to="/">United Kingdom</Link> &nbsp;›&nbsp; <span>Student Accommodation {cityName}</span>
        </div>

        <div className="listing-toolbar mb-4">
          <button className={`toggle-btn ${tab==='housing'?'active':''}`} onClick={()=>setTab('housing')}>
            <i className="bi bi-house-door-fill"></i> Student Housing
          </button>
          <button className={`toggle-btn ${tab==='private'?'active':''}`} onClick={()=>setTab('private')}>
            <i className="bi bi-building"></i> Private Apartment
          </button>
          <div className="ms-auto d-flex gap-2 flex-wrap">
            <button className="filter-chip text-ul-primary"><i className="bi bi-stars"></i> Smart filter</button>
            <button className="filter-chip"><i className="bi bi-bank"></i> University <i className="bi bi-chevron-down"></i></button>
            <button className="filter-chip"><i className="bi bi-door-open"></i> Room Type <i className="bi bi-chevron-down"></i></button>
            <div className="filter-chip p-1 gap-0">
              <button className={`btn btn-sm ${view==='grid'?'btn-ul-primary text-white':''}`} onClick={()=>setView('grid')} style={view==='grid'?{background:'var(--ul-orange)', color:'#fff'}:{}}><i className="bi bi-grid-fill"></i> Grid</button>
              <button className={`btn btn-sm ${view==='list'?'btn-ul-primary text-white':''}`} onClick={()=>setView('list')}><i className="bi bi-list-ul"></i> List</button>
            </div>
            <button className="filter-chip">Sort By <i className="bi bi-chevron-down"></i></button>
          </div>
        </div>

        <div className="row">
          <aside className="col-lg-3 mb-4">
            <div className="map-card">
              <img src="https://maps.googleapis.com/maps/api/staticmap?center=London&zoom=11&size=400x300&maptype=roadmap" alt="map"
                onError={(e)=>{ e.target.src='https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&q=80' }} />
              <button className="view-map-btn">View on Map</button>
            </div>

            <div className="filter-card">
              <h6>Move-in & Move-out <i className="bi bi-chevron-down"></i></h6>
              <input type="text" className="form-control mt-2" placeholder="Move-in - Move-out" />
            </div>

            <div className="filter-card">
              <h6>Distance (in miles) <i className="bi bi-chevron-down"></i></h6>
              <div className="d-flex justify-content-between mt-2 small text-muted"><span>0.39</span><span>19.41</span></div>
              <input type="range" className="form-range" min="0" max="20" defaultValue="20" />
            </div>

            <div className="filter-card">
              <h6>Price (£) <i className="bi bi-chevron-down"></i></h6>
              <div className="d-flex justify-content-between mt-2 small text-muted"><span>160</span><span>1599</span></div>
              <input type="range" className="form-range" min="160" max="1599" defaultValue="1599" />
              <div className="row mt-2 g-2">
                <div className="col-6"><input className="form-control form-control-sm" defaultValue="160" /></div>
                <div className="col-6"><input className="form-control form-control-sm" defaultValue="1599" /></div>
              </div>
            </div>

            <div className="filter-card">
              <h6>Tenancy <i className="bi bi-chevron-down"></i></h6>
            </div>
          </aside>

          <main className="col-lg-9">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <h3 className="fw-bold mb-1">Student Accommodation {cityName}</h3>
                <small className="text-muted"><i className="bi bi-volume-up"></i> Our student accommodation in {cityName} are close to major universities. <a href="#" className="text-ul-primary">Read More!</a></small>
              </div>
              <div className="text-muted small">{properties.length * 42} results</div>
            </div>

            <div className="row g-4">
              {properties.map((p,i)=>(
                <div key={i} className={view==='grid' ? 'col-md-6 col-xl-4' : 'col-12'}>
                  <div className="property-card">
                    <div className="img" style={{backgroundImage:`url(${p.img})`}}>
                      <span className={`cashback-tag ${p.tag.type==='green'?'green':p.tag.type==='orange'?'orange':''}`}>{p.tag.text}</span>
                      <button className="heart-btn"><i className="bi bi-heart"></i></button>
                      <span className="rating-badge"><i className="bi bi-star-fill text-warning"></i> {p.rating}</span>
                    </div>
                    <div className="property-body">
                      <h5>{p.name}</h5>
                      <div className="addr"><i className="bi bi-geo-alt"></i> {p.address}<br/><span className="text-muted">{p.distance}</span></div>
                      <div className="feature-pills">
                        {p.features.map(f=> <span key={f} className="pill"><i className="bi bi-check-circle"></i> {f}</span>)}
                      </div>
                      <div className="amenity-pills">
                        {p.amenities.map(a=> <span key={a} className="pill">{a}</span>)}
                      </div>
                      <div className="price-row">
                        <div>
                          <div className="from">From £{p.from}</div>
                          <div className="now">£{p.now} <small>/wk</small></div>
                        </div>
                        <button className="btn-enquire">Enquire</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      <footer className="py-5 mt-5" style={{background:'#071d49', color:'#fff'}}>
        <div className="container text-center">
          <p className="mb-1 fw-bold">Room Scholars</p>
          <small className="text-muted">© 2026 Room Scholars. All rights reserved.</small>
        </div>
      </footer>
    </>
  )
}
