import React from 'react';
import '../styles/Testimonios.css';
import playerImage1 from '../assets/fototesti1.jpg';
import playerImage2 from '../assets/fototesti2.jpg';
import playerImage3 from '../assets/fototesti3.jpg';
import playerImage4 from '../assets/fototesti4.jpg';
import { Title } from '../componentes/Title';

const testimoniosData = [
  {
    id: 1,
    image: playerImage1,
    text: "Jugar en Sonkei FC ha sido una experiencia increíble. He mejorado mis habilidades y he conocido a muchos amigos nuevos. Los entrenadores son muy profesionales y siempre están dispuestos a ayudar.",
    author: "Ronaldiño"
  },
  {
    id: 2,
    image: playerImage2,
    text: "Sonkei FC me ha dado la oportunidad de crecer como jugador y persona. El ambiente es muy acogedor y siempre nos motivan a dar lo mejor de nosotros mismos.",
    author: "Neymar"
  },
  {
    id: 3,
    image: playerImage3,
    text: "Estoy muy agradecido por formar parte de Sonkei FC. Los entrenamientos son intensivos pero divertidos, y he aprendido mucho desde que me uní.",
    author: "Keylor Navas"
  },
  {
    id: 4,
    image: playerImage4,
    text: "Sonkei FC es más que un equipo, es una familia. Me encanta la camaradería y el espíritu de equipo que tenemos. Recomendaría este club a cualquiera.",
    author: "Dario Osorio"
  }
];

const Testimonios = () => {
  return (
    <div className="testimonios-container">
        <Title 
            text='Testimonios'/>
      {testimoniosData.map((testimonio, index) => (
        <div key={testimonio.id} className={`testimonial ${index % 2 === 0 ? 'left' : 'right'}`}>
          <img src={testimonio.image} alt={`Player ${testimonio.id}`} className="player-image" />
          <div className="testimonial-text">
            <p>"{testimonio.text}"</p>
            <p><strong>- {testimonio.author}</strong></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonios;

