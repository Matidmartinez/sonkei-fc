import React from 'react';
import { Title } from '../componentes/Title';
import { Carousel } from '../componentes/Carousel';
import { Header } from '../componentes/Header';
import reviewData from '../data/reviewData.json';

const Home = () => {
  return (
    <div className="home-container">
      <Header text='Bienvenido a Sonkei FC' />
      <div className="home-content">
        <Title text='Jugadores del Mes' />
        <div className="carouselSection">
          <Carousel data={reviewData.slides} />
        </div>
      </div>
    </div>
  );
};

export default Home;
