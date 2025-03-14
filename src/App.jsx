import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Dimencion1 from './pages/D1_page'
import Dimencion2 from './pages/D2_page'
import Dimencion3 from './pages/D3_page'
import Dimencion4 from './pages/D4_page'
import Dimencion5 from './pages/D5_page'
import Dimencion6 from './pages/D6_page'
import Dimencion7 from './pages/D7_page'
import config from './pages/ConfigPage'


function App() {
  return (
    <div className="Home">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/d1" element={<Dimencion1 />} />
        <Route path="/d2" element={<Dimencion2 />} />
        <Route path="/d3" element={<Dimencion3 />} />
        <Route path="/d4" element={<Dimencion4 />} />
        <Route path="/d5" element={<Dimencion5 />} />
        <Route path="/d6" element={<Dimencion6 />} />
        <Route path="/d7" element={<Dimencion7 />} />
        <Route path="/config" element={<config />} />
      </Routes>
    </div>
  )
}

export default App
