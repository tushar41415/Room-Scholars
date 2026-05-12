import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'

export default function Home(){
  return (
    <>
      <section className="hero">
        <Navbar transparent />
        <div className="container text-center">
          <h1>Safe Home For Every Student</h1>
          <p className="lead mt-2">Find your perfect student accommodation, close to university & close to life</p>
          <div className="hero-features">
            <div className="hero-feature"><i className="bi bi-shield-check"></i> 100% Safe and Verified Properties</div>
            <div className="hero-feature"><i className="bi bi-headset"></i> 24x7 Assistance</div>
            <div className="hero-feature"><i className="bi bi-cash-coin"></i> No Hidden Charges</div>
          </div>
          <SearchBar />
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container text-center">
          <div className="d-inline-flex align-items-center gap-3">
            <span className="fw-bold">G</span>
            <span className="text-warning">★★★★★</span>
            <span className="fw-bold text-ul-primary">4.6/5</span>
            <span className="text-muted">(1387)</span>
          </div>
          <p className="mt-3 text-muted" style={{maxWidth:720, margin:'18px auto'}}>
            "Booking my student accommodation through Room Scholars was the best choice I made before moving abroad."
          </p>
        </div>
      </section>

      <section className="py-5" style={{background:'#fff5ed'}}>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-md-7">
              <h2 className="fw-bold">WE HIT 10 YEARS!</h2>
              <p className="text-ul-orange fw-bold mb-3">🎉 10 Weeks Rent Free</p>
              <button className="btn btn-warning fw-bold px-4 py-2 rounded-pill text-white" style={{background:'var(--ul-orange)', border:'none'}}>
                Participate Now <i className="bi bi-arrow-right"></i>
              </button>
            </div>
            <div className="col-md-5 text-center">
              <div style={{fontSize:120, fontWeight:900, color:'var(--ul-primary)', lineHeight:1}}>10</div>
              <div className="fw-bold text-ul-orange">HAPPY YEARS</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-5" style={{background:'#071d49', color:'#fff'}}>
        <div className="container text-center">
          <p className="mb-1 fw-bold">Room Scholars</p>
          <small className="text-muted">© 2026 Room Scholars. All rights reserved.</small>
        </div>
      </footer>
    </>
  )
}
