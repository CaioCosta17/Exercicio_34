import React from 'react'
// Importando BrowserRouter e Route/Routes para simular o roteamento
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RestaurantProfile from './pages/RestaurantProfile'
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<RestaurantProfile />} />
      </Routes>
    </Router>
  )
}

export default App
