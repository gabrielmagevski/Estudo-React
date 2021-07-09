import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

import './style.css';
import ArrowLeft from '../../assets/icons/arrow-left.svg';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function NewIncident() {

  const history = useHistory(); 

  const ongID= localStorage.getItem('ongID')

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  async function handleNewIncident(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      value,
    }

    try {
        await api.post('incidents', data, {
          headers:{
             Authorization: ongID,
          }
        })
        history.push('/');

    } 
    catch (err) {
      alert ('Erro ao cadastrar caso, tente novamente mais tarde.')
    }
  }


 return(

      <div className="new-incident-container">
        <div className="content">
            <section>
               <img src={logoImg} alt="Be The Hero" />
  
               <h1>Cadastrar novo Caso</h1>
               <p>Descreva o caso detalhadamente para encontrar um herói para resolver.</p>
  
               <Link className="back-link" to="/profile">
                 <img src={ArrowLeft} alt="Saída" /> 
                    Voltar para home
                </Link>
            </section>
  
          <form action={handleNewIncident} >
            <input 
              placeholder="Título" 
              value={title}
              onChange={e => setTitle(e.target.value)}
              />
            <textarea 
              placeholder="Descrição" 
              value={description}
              onChange={e => setDescription(e.target.value)}
              />
            <input 
              placeholder="Valor em Reais" 
              value={value}
              onChange={e => setValue(e.target.value)}
              />
  
  
            <button className="button" type="submit">Cadastrar</button>
  
          </form>
        </div>
      </div>
  );
} 