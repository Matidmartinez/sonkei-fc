import React, { useState, useEffect } from 'react';
import { Card } from '../componentes/Card';
import { Title } from '../componentes/Title';
import '../styles/Card.css';
const Equipo = () => {
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    fetch('http://localhost/sonkeifc-backend/Controller/EquipoController.php')
      .then((response) => response.json())
      .then((data) => {
        setJugadores(data);
      })
      .catch((err) => {
        console.error('Error al obtener los datos de los jugadores:', err.message); 
      });
  }, []);

  return (
    <>
      <section className="equipoSection"> 
        <Title text="Nuestro Equipo" /> 
        <div className="cardContainer"> 
          {jugadores.map((jugador) => (
            <Card
              id={Card.jugador.id}
              nombre={Card.jugador.nombre}
              posicion={Card.jugador.posicion}
              profesion={Card.jugador.profesion}
              redsocial={Card.jugador.redsocial}
              foto={Card.jugador.foto}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Equipo;

