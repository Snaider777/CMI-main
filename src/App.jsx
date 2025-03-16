import '../src/styles/App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Dimencion1 from './pages/D1_page'
import Dimencion2 from './pages/D2_page'
import LoginPage from './pages/LoginPage'
import PrivateRoute from './router/PrivateRoute'

function App() {
  return (
    <div className="Home">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          {/* Rutas protegidas */}
        <Route 
          path="/" 
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/d1" 
          element={
            <PrivateRoute>
              <Dimencion1 />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/d2" 
          element={
            <PrivateRoute>
              <Dimencion2 />
            </PrivateRoute>
          } 
        />
        </Routes>
    </div>
  )
}

export default App
