import React from 'react'
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';
import { useState } from 'react';

function Pizza() {  
  const [info, setInfo]= useState([])
  const url = "http://localhost:5001/api/pizzas/P001"

  useEffect(() => { 
      consultaApi()  
  }, [])


  //Funcion consulta
  const consultaApi = async () => {
      const response = await fetch(url)
      const info = await response.json()
      setInfo(info);  
  }

return (
    <div className='contenedor-pizza'>
      <h2 className='titulo-pizza'>Descubre la pizza que más te guste</h2>
      <div className='contenedor-card'>
        <div className="card card-pizza mb-3" style={{width:'90%',maxWidth: '400px'}}>
            <img src={info.img} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{info.name}</h5>
            <p className="card-text">{info.desc}</p>
            <p className="card-text"><small className="text-body-secondary">Precio: ${info.price}</small></p>
          </div>
          <Button variant="dark" className="float-end">Añadir 🛒</Button>
        </div>
      </div>
        
    </div>


)};

export default Pizza