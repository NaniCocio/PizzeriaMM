import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navegacion from './components/Navbar'
import Registro from './components/Registro'
import Login from './components/Login'
import Carrito from './components/Cart'


function App() {

  return (
    <div className='page-container'>
      <Navegacion />
      {/*<Home />*/}
      {/*<Registro/>*/}
      {/*<Login />*/}
      <Carrito/>
      <Footer />
    </div>
  )
}

export default App
