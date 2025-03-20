import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import { useEffect } from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


function Home () {
    const [data, setData] = useState([]);
    const [loading,setLoading]= useState(true);
    const [error,setError]= useState(null);
    const url = "http://localhost:5001/api/pizzas"

    useEffect(() => {
        consultarApi();
    }, []);

    const consultarApi= async ()=>{
        try{
            const response = await fetch(url);
            const data = await response.json();
            setData(data);  
            setLoading(false);
        }catch(error){
            console.log('error---->', error);
            setError(error);
            setLoading(false);
        }    
    };


    //Página cargando datos
    if (loading){
        return (<div>Loading...</div>);
    }//Si hay error en cargar lista
    if (error){
        return (<div>ERROR: {error.message}</div>);
    }
    
    console.log("data recibida:" , data);
    return (
        <div className='home'>
            <Header />
            <div className="container">
                <div className='row row-cols-1 row-cols-md-4 g-2'>
                    {data.map((pizzas)=>(
                        <CardPizza key={pizzas.id}
                            name={pizzas.name} 
                            price={pizzas.price}
                            ingredientes={pizzas.ingredients} 
                            img = {pizzas.img}
                        />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Home