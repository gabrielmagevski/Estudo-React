import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api'

import './styles.css';

import logoOut from '../../assets/icons/log-out.svg'
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'


export default function Logon() {
  const [id, setID] = useState('');
  const history  = useHistory();

    async function handleLogin(e) {
       e.preventDefault();

        try {

          const response = await api.post('sessions', {id});

          localStorage.setItem('ongId', id);
          localStorage.setItem('ongName', response.data.name);
        
          history.push('/profile');
        }

        catch (err) {
          alert ('Login inválido, tente novamente.')
        };

    };


  return (
    <div className="logon-container">
      <section className="form">
      <img src={logoImg} alt="Be The Hero" />
      
      <form onSubmit={handleLogin}>
         <h1>Faça Seu Logon</h1>

         <input
          placeholder="Sua ID" 
          value={id}
          onChange={e => setID(e.target.value)}
          />

         <button className="button" type="submit">Entrar</button>

        <Link className="back-link" to="/register">
          <img src={logoOut} alt="Logo-Out" /> 
          Não tenho Cadastro
        </Link>
      </form>
      </section>

      <img className="logoOut" src={heroesImg} alt="Heroes" />
    </div>
  );
}