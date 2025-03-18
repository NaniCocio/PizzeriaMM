import React from 'react'
import { useState } from 'react';


function Registro() {
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState('');

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
        
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        if (password && e.target.value === password) {
            setError('');
        }
    };
        
    const handleSubmit = (e) => {
        e.preventDefault()
        if (email.trim() === '' || password.trim() === '' ||  confirmPassword.trim () === '') {
            e.stopPropagation();
            alert('Completa todos los campos');
            return; }

        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;

        } else {   
        setError('')    
        alert('Felicidades acabas de crear tu cuenta')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    };
    }
    

  return (
    <div className='form'>
        <form onSubmit={handleSubmit} >
        <h2>Crea tu cuenta</h2>
        <br />
        <div className="mb-3">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="tuemail@ejemplo.com" value={email} onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <div class="mb-3">
                <input type="password" className="form-control" 
                minLength={6} title='Debe tener al menos 6 caracteres, un número y un carácter especial (!@#$%^&*).' pattern='^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$'
                id="password" placeholder="Contraseña" value={password}
                onChange={handlePasswordChange}/>
            </div>
            <div class="mb-3">
                <input type="password" className="form-control" id="exampleInputPassword1"
                minLength={6}
                placeholder="Confirma tu contraseña" value={confirmPassword}
                onChange={handleConfirmPasswordChange} />
            </div>
            {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
            <div className="d-grid mx-auto">
                <button type="submit" className="btn btn-success">Enviar</button>
            </div>
            <br />
        </form>
    </div>
  )
}

export default Registro