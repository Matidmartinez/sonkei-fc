import React from 'react';

export function Card({ id, nombre, posicion, profesion, redsocial, foto }) {
  return (
    <div key={id} className="card">
      <div className="image">
        <img src={foto} alt={nombre} />
      </div>
      <div className="description">
        <h1>{nombre}</h1>
        <h3>Posición: {posicion}</h3>
        <h4>Profesión: {profesion}</h4>
        <p>Red Social: <a href={redsocial} target="_blank" rel="noopener noreferrer">{redsocial}</a></p>
      </div>
    </div>
  );
}
