import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';


function Profile() {
    return (
        <div>
            <Form inline className='profile'>
                <Navbar.Text className='profile'>
                    Bienvenido: <a href="#login" > daniela.cocio@gmail.com</a>
                </Navbar.Text>
            </Form>
        </div>
        )
}

export default Profile