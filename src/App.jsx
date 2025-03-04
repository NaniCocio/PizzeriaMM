import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navegacion from './components/Navbar'


function App() {

  return (
    <>
      <Navegacion/>
      <Home />
      <Footer />
    </>
  )
}

export default App
