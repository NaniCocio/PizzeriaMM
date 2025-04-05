import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import { ContentContext } from '../context/ContentContext';
import { useParams } from 'react-router-dom';
import { usePizzaContext } from '../context/PizzaContext';

const Pizza = () => {
    const { id } = useParams(); // ← obtiene el ID dinámico desde la URL
    const { pizzas, loading } = useContext(ContentContext);
    const { agregarAlCarrito } = usePizzaContext();
  
    if (loading) return <p>Cargando pizza...</p>;
  
    const pizza = pizzas.find((p) => p.id === id);
  
    if (!pizza) return <p>Pizza no encontrada 😢</p>;
  
    return (
      <div className='contenedor-pizza'>
        <h2 className='titulo-pizza'>Descubre la pizza que más te guste</h2>
        <div className='contenedor-card'>
          <div className="card card-pizza mb-3" style={{ width: '90%', maxWidth: '400px' }}>
            <img src={pizza.img} className="card-img-top" alt={pizza.name} />
            <div className="card-body">
              <h5 className="card-title">{pizza.name}</h5>
              <p className="card-text">{pizza.desc}</p>
              <p className="card-text">
                <small className="text-body-secondary">Precio: ${pizza.price}</small>
              </p>
            </div>
            <Button variant="dark" className="float-end" onClick={() => agregarAlCarrito(pizza)}>Añadir 🛒</Button>
          </div>
        </div>
      </div>
    );
};

  export default Pizza;