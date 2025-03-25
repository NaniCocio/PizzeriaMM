import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Footer from './components/Footer'
import Home from './views/Home'
import Navegacion from './views/Navbar'
import Registro from './views/Registro'
import Login from './views/Login'
import Carrito from './views/Cart'
import Pizza from './components/Pizza'
import { Routes, Route } from'react-router-dom'


function App() {

  return (
    <div className='page-container'>
      <Navegacion />

      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/registro' element={<Registro />}/>
        <Route path='/cart' element={<Carrito />}/>
        <Route path='/pizza' element={<Pizza />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
