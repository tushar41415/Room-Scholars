import { Link } from 'react-router-dom'

export default function Navbar({ transparent = true }){
  return (
    <>
      <div className="promo-bar">Our 10th Birthday Rewards! Unlock 10 Weeks of Rent FREE & More*</div>
      <nav className={`ul-navbar ${transparent ? '' : 'static-nav'}`} style={transparent ? {} : {position:'static', background:'#fff', borderBottom:'1px solid #eee', padding:'14px 0'}}>
        <div className="container d-flex align-items-center justify-content-between">
          <Link to="/" className="brand" style={transparent ? {} : {color:'var(--ul-primary)'}}>
            <span className="logo-mark"></span>
            ROOM <span style={{fontWeight:400}}>SCHOLARS</span>
          </Link>
          <div className="d-none d-lg-flex align-items-center">
            <a className="nav-link" style={transparent ? {} : {color:'#1b1b3a'}} href="#">My Kinda Room</a>
            <a className="nav-link" style={transparent ? {} : {color:'#1b1b3a'}} href="#">Group Booking <span className="badge-new">New</span></a>
            <a className="nav-link" style={transparent ? {} : {color:'#1b1b3a'}} href="#">Services <i className="bi bi-chevron-down small"></i></a>
            <a className="nav-link" style={transparent ? {} : {color:'#1b1b3a'}} href="#">Contact Us <i className="bi bi-chevron-down small"></i></a>
          </div>
          <button className="btn-login" style={transparent ? {} : {borderColor:'var(--ul-primary)', color:'var(--ul-primary)'}}>Login</button>
        </div>
      </nav>
    </>
  )
}
