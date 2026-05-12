import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CityListing from './pages/CityListing.jsx'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/city/:city" element={<CityListing />} />
    </Routes>
  )
}
