import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Dimencion1 from './pages/D1_page'


function App() {
  return (
    <div className="Home">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/d1" element={<Dimencion1 />} />
      </Routes>
    </div>
  )
}

export default App
