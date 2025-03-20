import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function Pizza() {  
  const [info, setInfo]= useState([])

  useEffect(() => { 
      consultaApi()  
  }, [])


  //Funcion consulta
  const consultaApi = async () => {
      const url = "http://localhost:5001/api/pizzas/P001"
      const response = await fetch(url)
      const data = await response.json()

      setInfo(`${data.name} - ${data.price} - ${data.ingredients} - ${data.img} - ${data.desc}`) // nombre del pokemon

      console.log(data, "<-- data en la consulta")
  }
return (
    <div>
      <h1>VER INFO</h1>
      <p>{info}</p>
 
      
    </div>
)};

export default Pizza