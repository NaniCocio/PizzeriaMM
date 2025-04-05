import React, { useContext } from 'react';
import CardPizza from '../components/CardPizza';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/Header';
import { ContentContext } from '../context/ContentContext';

const Home = () => {
    const { pizzas, loading, error } = useContext(ContentContext);

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