import React from 'react';
import '../styles/Entrenamientos.css';
import { Title } from '../componentes/Title'; 

function Entrenamientos() {
  const entrenamientos = [
    { fecha: '2024-06-17', hora: '08:00 AM', lugar: 'Cancha 1' },
    { fecha: '2024-06-19', hora: '06:30 PM', lugar: 'Gimnasio Municipal' },
    { fecha: '2024-06-22', hora: '10:00 AM', lugar: 'Cancha 3' },
  ];

  return (
    <div className="entrenamientos-container">
      <div className="titulo-container">
        <Title text="Entrenamientos" />
      </div>
      <div className="calendario">
        {entrenamientos.map((entrenamiento, index) => (
          <div key={index} className="evento">
            <div className="fecha">{entrenamiento.fecha}</div>
            <div className="hora">{entrenamiento.hora}</div>
            <div className="lugar">{entrenamiento.lugar}</div>
          </div>
        ))}
      </div>
      <button className="btn-entrenar">ENTRENAR</button> 
    </div>
  );
}

export default Entrenamientos;

