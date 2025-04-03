import React, { useEffect, useState } from 'react';
import CardPizza from '../components/CardPizza';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/Header'

const Home = () => {
    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPizzas = async () => {
            try {
                const response = await fetch('http://localhost:5001/api/pizzas');
                if (!response.ok) throw new Error('Error al cargar las pizzas');
                const data = await response.json();
                setPizzas(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPizzas();
    }, []);

    if (loading) return <p>Cargando pizzas...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
    <div className='home'>
        <Header />
        <div className='container'>
            <Row>
                {pizzas.map((pizza) => (
                    <Col key={pizza.id} md={4} sm={6} xs={12}>
                        <CardPizza pizza={pizza} />
                    </Col>
                ))}
            </Row>
        </div>

    </div>

    );
};

export default Home;
