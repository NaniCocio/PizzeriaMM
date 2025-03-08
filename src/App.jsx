import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navegacion from './components/Navbar'
import Registro from './components/Registro'
import Login from './components/Login'


function App() {

  return (
    <>
      <Navegacion/>
      <Login />
      {/*<Home />*/}
      {/*<Registro/>*/}
      <Footer />
    </>
  )
}

export default App
