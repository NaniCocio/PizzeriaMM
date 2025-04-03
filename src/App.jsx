import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Footer from './components/Footer'
import Home from './views/Home'
import Navegacion from './components/Navbar'
import Registro from './views/Registro'
import Login from './views/Login'
import Carrito from './views/Cart'
import Pizza from './views/Pizza'
import NotFound from './views/NotFound'
import Profile from './views/Profile'
import { Routes, Route } from'react-router-dom'
import { PizzaProvider } from './context/PizzaContext'


function App() {

  return (
    <div className='page-container'>
      <PizzaProvider>
        <Navegacion />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/registro' element={<Registro />}/>
          <Route path='/cart' element={<Carrito />}/>
          <Route path='/pizza/p001' element={<Pizza />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </PizzaProvider>
      
      <Footer />
    </div>
  )
}

export default App
