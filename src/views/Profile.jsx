import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Profile() {
    return (
        <div className=''>
            <Navbar className="justify-content-between py-0 profile" bg="light" data-bs-theme="light" background-color="#fff">
                <Form inline>
                <Navbar.Text className='login'>
                    Bienvenido: <a href="#login">daniela.cocio@gmail.com</a>
                </Navbar.Text>
                </Form>
                <Form inline>
                    <Row>
                    <Col xs="auto">
                        <Button type="submit" className='cierre' variant='dark'>Cerrar Sesión</Button>
                    </Col>
                    </Row>
                </Form>
            </Navbar>
        </div>
  )
}

export default Profile