import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Dimencion1 from './pages/D1_page'


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/d1" element={<Dimencion1 />} />
    </Routes>
  )
}

export default App
