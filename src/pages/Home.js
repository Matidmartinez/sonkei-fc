import React, { useState, useEffect } from 'react';


const Home = () => {
  return (
    <div className="home-container">
      {/* Sección de héroe */}
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenido a Sonkei FC</h1>
          <p>Tu camino hacia el éxito futbolístico</p>
          <button className="cta-button">Únete a nosotros</button>
        </div>
      </section>

      {/* Otras secciones */}
      <section className="about-us">
        <h2>Sobre Nosotros</h2>
        {/* ... contenido sobre la historia del club ... */}
      </section>

      <section className="training-programs">
        <h2>Nuestros Entrenamientos</h2>
        {/* ... información sobre los programas de entrenamiento ... */}
      </section>

      <section className="testimonials">
        <h2>Testimonios</h2>
        {/* ... testimonios de jugadores y padres ... */}
      </section>

      {/* ... otras secciones que quieras incluir ... */}
    </div>
  );
};

export default Home;


