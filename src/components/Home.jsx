import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import {pizzas} from '../utils/pizzas'
import 'bootstrap/dist/css/bootstrap.min.css'


const Home = () => {

    return (
        <div>
            <Header />
            <div className="container">
                <div className='row row-cols-1 row-cols-md-4 g-2'>
                    {pizzas.map((pizza)=>(
                        <CardPizza 
                            name={pizza.name} 
                            price={pizza.price}
                            ingredientes={pizza.ingredients} 
                            img = {pizza.img}
                        />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Home