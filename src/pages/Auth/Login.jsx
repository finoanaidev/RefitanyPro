import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './auth.css';

const Login = () => {
    let navigate = useNavigate()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
            navigate('/admin')
    }

    return (
       <div className="bordure">
         <form onSubmit={onSubmit} className='form'>
            <h3 className='seConnecter'>Se Connecter</h3>
            <div className='group'>
                <label className='labelline'>Email</label> 
                <input type='email' name='email' id='email' value={login} onChange={(e)=>setLogin(e.target.value)}/> 
            </div>
            <div className='group'>
                <label className='labelline'>Mot de passe</label>
                <input type='text' name='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <br />
            <div className='group'>
                <button className='button'>Connexion</button>
            </div>
        </form>
       </div>
    );
};

export default Login;









