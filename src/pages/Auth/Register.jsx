import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import './auth.css';

const Login = () => {
    let navigate = useNavigate()
    const [nom, setNom] = useState('')
    const [email, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [passwordconfirm, setPasswordConfirm] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
            navigate('/admin')
    }

    return (
        <div className="bordure">
        <form onSubmit={onSubmit} className='form'>
           <h3 className='seConnecter'>S'Inscrire</h3>
           <div className='group'>
               <label className='labelline'>Nom</label> 
               <input type='nom' name='nom' id='nom' value={nom} onChange={(e)=>setNom(e.target.value)}/> 
           </div>
           <div className='group'>
               <label className='labelline'>Email</label> 
               <input type='email' name='email' id='email' value={email} onChange={(e)=>setLogin(e.target.value)}/> 
           </div>
           <div className='group'>
               <label className='labelline'>Mot de passe</label>
               <input type='text' name='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
           </div>
           <div className='group'>
               <label className='labelline'>confirmer mot de passe</label>
               <input type='text' name='passwordconfirm' value={passwordconfirm} onChange={(e)=>setPasswordConfirm(e.target.value)}/>
           </div>
           <br />
           <div className='group'>
               <button className='button'>S'inscrire</button>
           </div>
           <p>Déjà un compte<Link to='/auth/login'>Se connecter</Link></p>
       </form>
      </div>
    );
};

export default Login;









