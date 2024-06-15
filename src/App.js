import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Equipo } from './pages/Equipo';
import { Historia } from './pages/Historia';
import { Entrenamientos } from './pages/Entrenamientos';
import { Contact } from './pages/Contact';
import { Footer } from './componentes/Footer';



const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  /**
   * Cambia el estado de false a true y viceversa para mostrar u ocultar el menú lateral en dispositivos pequeños
   */
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div className="container">
        <header className="header">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <HamburgerButton className='hamburger' onClick={toggleMenu}/>
          {/* Nav para el menu de pantallas grandes*/}
          <nav className="navigation">
            <ul>
              <li>
                <NavLink exact to="/" activeClassName="active" className="nav-link">Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/Equipo" activeClassName="active" className="nav-link">Equipo</NavLink>
              </li>
              <li>
                <NavLink to="/nuestra-historia" activeClassName="active" className="nav-link">Nuestra Historia</NavLink>
              </li>
              <li>
                <NavLink to="/testimonios" activeClassName="active" className="nav-link">Testimonios</NavLink>
              </li>
              <li>
                <NavLink to="/contacto" activeClassName="active" className="nav-link">Contacto</NavLink>
              </li>
            </ul>
          </nav>
        </header>

        {/* Side menu para dispositivos de pantallas pequeñas */}
        <div className={`overlay-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
        <nav className={`side-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active" className="nav-link" onClick={toggleMenu}>Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/equipo" activeClassName="active" className="nav-link" onClick={toggleMenu}>Equipo</NavLink>
            </li>
            <li>
              <NavLink to="/nuestra-historia" activeClassName="active" className="nav-link" onClick={toggleMenu}>Nuestra Historia</NavLink>
            </li>
            <li>
              <NavLink to="/entrenamientos" activeClassName="active" className="nav-link" onClick={toggleMenu}>Entrenamientos</NavLink>
            </li>
            <li>
              <NavLink to="/contacto" activeClassName="active" className="nav-link" onClick={toggleMenu}>Contacto</NavLink>
            </li>
          </ul>
        </nav>
        <main className='pagesContainer'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/equipo" element={<Equipo />} />
            <Route path="/nuestra-historia" element={<Historia />} />
            <Route path="/entrenamientos" element={<Entrenamientos />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

