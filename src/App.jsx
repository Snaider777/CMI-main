import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Dimencion1 from './pages/D1_page'
import Dimencion2 from './pages/D2_page'
import LoginComponent from './components/LoginComponent'

function App() {
  return (
    <div className="Home">
        <Routes>
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/d1" element={<Dimencion1 />} />
          <Route path="/d2" element={<Dimencion2 />} />
        </Routes>
    </div>
  )
}

export default App
