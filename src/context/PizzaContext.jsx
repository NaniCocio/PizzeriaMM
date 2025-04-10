import { createContext, useState, useContext } from 'react';
import { pizzaCart } from '../utils/pizzas';

const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const actualizar = (id, delta) => {
        setCart(prevCart => prevCart.map(item =>
            item.id === id ? { ...item, count: Math.max(1, item.count + delta) } : item
        ));
    };

    const eliminar = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    const agregarAlCarrito = (pizza) => {
        setCart(prevCart => {
            const existe = prevCart.find(item => item.id === pizza.id);
            if (existe) {
                return prevCart.map(item =>
                    item.id === pizza.id ? { ...item, count: item.count + 1 } : item
                );
            } else {
                return [...prevCart, { ...pizza, count: 1 }];
            }
        });
    };


    return (
        <PizzaContext.Provider value={{ cart, actualizar, eliminar, agregarAlCarrito}}>
            {children}
        </PizzaContext.Provider>
    );
};

export const usePizzaContext = () => useContext(PizzaContext);
