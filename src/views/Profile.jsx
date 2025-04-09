import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';


function Profile() {
    return (
        <div className=''>
            <Navbar className="justify-content-between py-0 profile" bg="light" data-bs-theme="light" background-color="#fff">
                <Form inline>
                <Navbar.Text className='login'>
                    Bienvenido: <a href="#login">daniela.cocio@gmail.com</a>
                </Navbar.Text>
                </Form>
            </Navbar>
        </div>
        )
}

export default Profile