import React from 'react';
import { Title } from '../componentes/Title';
import { Formulario } from '../componentes/Formulario';
import clavitoFormulario from '../assets/contacto-formulario.jpg';
import '../styles/Contact.css'

export const Contact = () => {
  return (
    <>
      <section className='contact-tittle'>
        <Title
          text='Contáctenos'
        />
        <p>Si quieres cumplir tus sueños y comenzar por el cambio. Escribenos para que puedas formar de nuestra escuela. Una vez recibamos tu solicitud, te enviaremos de vuelta un plan
            de entrenamiento con nuestros horarios, categorias y torneos en los que participamos. </p>
      </section>
      <section className='contact-escribenos'>
        <div className='escribenos-imagen'>
          <img src={clavitoFormulario} alt='Imagen de Clavito Godoy explicando'></img>
        </div>
        <div className='escribenos-formulario'>
        <Formulario />
        </div>
      </section> 
    </>
  )
}