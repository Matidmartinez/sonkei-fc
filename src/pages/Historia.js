import React from 'react';
import '../styles/Historia.css';
import fondoNosotros from '../assets/nosotrosimg.jpg';
import { Title } from '../componentes/Title';

export const Historia = () => {
  return (
    <div className="text-about">
      <div className="section">
        <Title text="NUESTRA HISTORIA" />
        <p>Esta idea, nace entre un grupo de entrenadores que vieron la necesidad de entregar un espacio de entrenamiento futbolístico a los amantes de 
            este deporte que quieren seguir aprendiendo y desarrollándose deportivamente además de pasar un buen rato jugando este hermoso deporte.</p>
      </div>
      <img src={fondoNosotros} alt="fondoNosotros" className="FondoUs" />
    </div>
  );
}

export default Historia;
