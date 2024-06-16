import React from 'react';
import { ReactComponent as WhatsApp} from '../assets/whatsApp.svg'
import '../styles/Footer.css';
import logofb from '../assets/Facebook icon.png';
import logoig from '../assets/Instagram icon.png';
import logo_v2 from '../assets/logo_v2.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo_v2} alt="Logo de Sonkei" /> 
      </div>
      <div className="footer-address">
       Av. América #670, San Bernardo, Santiago de Chile
      </div>
      <div className="footer-contact">
        <a href="https://wa.me/56950186583" target="_blank" rel="noopener noreferrer">
          <WhatsApp />
        </a>
        <p className="fab fa-whatsapp">+56 9 9758 4316</p>
      </div>
      <hr></hr>
      <div className="footer-logos">
        <a 
          href="https://www.facebook.com/tuparcelaenelsurdechile?mibextid=ZbWKwL" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Facebook de Terrasol"
        >
          <img src={logofb} alt="Facebook" />
        </a>
        <a 
          href="https://www.instagram.com/terrasol_parcelas/?igsh=eG51a2w4NGx5ODJu" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Instagram de Terrasol"
        >
          <img src={logoig} alt="Instagram" />
        </a>
      </div>
    </footer>
  );
};
