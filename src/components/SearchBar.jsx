import { useState, useMemo, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { COUNTRIES, DATA } from '../data/locations'

export default function SearchBar(){
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState('')
  const [country, setCountry] = useState('UK')
  const ref = useRef(null)
  const navigate = useNavigate()

  useEffect(()=>{
    const h = (e)=>{ if(ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', h)
    return ()=> document.removeEventListener('mousedown', h)
  },[])

  const matches = useMemo(()=>{
    if(!q.trim()) return null
    const term = q.toLowerCase()
    const out = []
    Object.entries(DATA).forEach(([code, d])=>{
      d.cities.forEach(c=>{
        if(c.toLowerCase().includes(term)) out.push({type:'city', name:c, country:COUNTRIES.find(x=>x.code===code).name, code})
      })
      d.universities.forEach(u=>{
        if(u.toLowerCase().includes(term)){
          // pick a city in same country to route
          out.push({type:'uni', name:u, country:COUNTRIES.find(x=>x.code===code).name, code, city:d.cities[0]})
        }
      })
    })
    return out.slice(0, 10)
  }, [q])

  const goCity = (city) => { navigate(`/city/${encodeURIComponent(city.toLowerCase())}`); setOpen(false); setQ('') }

  const cur = DATA[country]

  return (
    <div className="search-wrap" ref={ref}>
      <div className="search-box">
        <span className="ms-2 text-muted"><i className="bi bi-search fs-5"></i></span>
        <input
          value={q}
          onChange={e=>{ setQ(e.target.value); setOpen(true) }}
          onFocus={()=>setOpen(true)}
          placeholder="Search for City, University, Property..."
        />
        <button className="btn-go" onClick={()=> q ? goCity(q) : setOpen(true)}><i className="bi bi-arrow-right"></i></button>
      </div>

      {open && (
        <div className="search-dropdown">
          {!q && (
            <>
              <div className="country-tabs">
                {COUNTRIES.map(c=>(
                  <button key={c.code} className={`country-tab ${country===c.code?'active':''}`} onClick={()=>setCountry(c.code)}>
                    <span className="flag">{c.flag}</span> {c.code}
                  </button>
                ))}
              </div>
              <div className="row">
                <div className="col-12 mb-2">
                  <div className="section-title"><i className="bi bi-geo-alt-fill"></i> Popular Cities in {COUNTRIES.find(x=>x.code===country).name}</div>
                  <div className="list-grid">
                    {cur.cities.map(c=>(
                      <div key={c} className="item" onClick={()=>goCity(c)}>{c}</div>
                    ))}
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <div className="section-title"><i className="bi bi-mortarboard-fill"></i> Popular University in {COUNTRIES.find(x=>x.code===country).name}</div>
                  <div className="list-grid">
                    {cur.universities.map(u=>(
                      <div key={u} className="item" onClick={()=>goCity(cur.cities[0])}>{u}</div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {q && matches && matches.length === 0 && (
            <div className="text-muted p-3">No matches found.</div>
          )}

          {q && matches && matches.map((m,i)=>(
            <div key={i} className="suggestion-item" onClick={()=> goCity(m.type==='city' ? m.name : m.city)}>
              <i className={`bi ${m.type==='city'?'bi-geo-alt-fill':'bi-mortarboard-fill'} icon`}></i>
              <div>
                <div className="title">{m.name}</div>
                <div className="sub">{m.country}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
