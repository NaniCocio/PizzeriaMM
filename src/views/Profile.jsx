import React , { useEffect}from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { useUser } from '../context/UserContext'


function Profile() {
    const {profile, getProfile, logout} = useUser()

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                await getProfile(); // Obtener el perfil cuando el componente se monta
            } catch (error) {
                console.error("Error al obtener el perfil:", error);
            }
        };

        fetchProfile();
    }, [getProfile]); // Dependencia para volver a ejecutar si getProfile cambia

    if (!profile) {
        return <div>Cargando perfil...</div>; // Mostrar un mensaje mientras se carga el perfil
    }

    return (
        <div>
            <Form inline className='profile'>
                <Navbar.Text className='profile'>
                    Bienvenido: <a href="#profile" > {profile.email}</a>
                </Navbar.Text>
            </Form>
        </div>
        )
}

export default Profile