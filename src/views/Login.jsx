import React from 'react'
import { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')
    const [validated, setValidated] = useState(false);
    const { login , error, isLoading } = useUser();
    const navigate = useNavigate()

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget; 
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/;
        if (!passwordRegex.test(password)) {
            alert('La contraseña debe tener al menos 6 caracteres, un número y un carácter especial (!@#$%^&*).')
            e.stopPropagation()
            return;
        }
        if (form.checkValidity() === false || password === '' ) {
            e.stopPropagation()
            alert('Todos los campos son obligatorios')    
        }else {
            setValidated(true);
            try {
                await login (email, password);
                alert('Felicidades acabas de iniciar sesión')
                setEmail('')
                setPassword('')
                navigate('/profile')
            } catch (err) {
                console.error("error inicio de sesion" , err)
                alert ('Error en el inicio de sesión. Intenta de nuevo')
            }
        }
    }

    return (
        <div className='form'>

            <form noValidate validated={validated} onSubmit={handleSubmit} >
                <h2>Inicia Sesión</h2>
                <br />
                <div className="mb-3">
                    <label className='label'>Email</label>
                    <input required type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="tuemail@ejemplo.com" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label className='label'>Password</label>
                    <input required type="password" className="form-control" 
                    minLength={6} pattern='^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$' value={password} onChange={handlePasswordChange} 
                    id="Password" placeholder="Contraseña" title='Debe tener al menos 6 caracteres, un número y un carácter especial (!@#$%^&*).' />
                </div>
                <div className="d-grid mx-auto">
                    <button type="submit" className="btn btn-success" disabled={isLoading}>{isLoading ? 'Cargando...' : 'Enviar'}</button>
                </div>
            </form>

            {error && <div className='alert alert-danger mt-3'>{error}</div>}
    </div>

    )
}

export default Login