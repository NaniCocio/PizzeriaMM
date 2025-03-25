import React from 'react'
import Header from '../components/Header'
import CardPizza from '../components/CardPizza'
import { useEffect } from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


function Home () {
    const [data, setData] = useState([]);
    const url = "http://localhost:5001/api/pizzas"

    useEffect(() => {
        consultarApi();
    }, []);

    const consultarApi= async ()=>{
        const response = await fetch(url);
        const data = await response.json();
        setData(data);  
    };

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