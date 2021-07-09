import React, {useEffect, useState} from 'react';
import {Link, useHistory } from 'react-router-dom';
import './style.css';

import Power from '../../assets/icons/power.svg';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import Trash2 from '../../assets/icons/trash-2.svg'

  export default function Profile() {
    const [incidents, setIncidents] = useState([]);

    const history = useHistory();

    const ongID = localStorage.getItem('ongID');
    const OngName = localStorage.getItem('ongName');

   

    useEffect(() => {
      api.get('profile', {
        headers: {Authorization: ongID,}
      }).then(response => {
          setIncidents(response.data)
      })
    }, [ongID]);

    async function handleDeleteIncident(id) {
      try{
          await api.delete(`incidents/${id}`, {
            headers: {
              Authorization: ongID,
            }
          });

      
        setIncidents(incidents.filter(incident => incident.id !== id));
      }
        catch (err){
        alert('Erro ao deletar o caso, tente novamente mais tarde.');
      }
    }

    function handleLogout(){

      localStorage.clear();


     history.push('/');
    }

    return(
      <div className="profile-container">
       <header>
          <img src={logoImg} alt="The Be Hero" />
          <span>Bem vinda, {OngName}</span>

          <Link className="button" to="/incidents/new/" >Cadastrar novo caso</Link>
          <button onClick={handleLogout} type="button"><img src={Power} alt="Power" />
          </button>
       </header>

       <h1>Casos Cadastrados</h1>

      <ul>
        {incidents.map(incident => (
           <li key={incident.id}>
           <strong>Caso:</strong>
             <p>{incident.title}</p>
 
             <strong>Descrição:</strong>
             <p>{incident.description}</p>
 
             <strong>Valor:</strong>
             <p>{Intl.NumberFormat('pt-BR', 
             {style: 'currency', currency: 'BRL'})
             .format(incident.value)}</p>
 
             <button onClick={() => handleDeleteIncident(incident.id)} type="button">
               <img src={Trash2} alt="Lixeira" />
              </button>
          </li>
        ))}
      
      </ul>
       

      </div>
  );
}

