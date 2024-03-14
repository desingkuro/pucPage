import React from 'react';
import '../styles/Footer.css'; // Asegúrate de crear este archivo CSS en la misma carpeta que tu componente Footer
import logo from '../assets/icon.jpg'
import { FaEnvelope, FaLinkedin, FaInstagram, FaGithub, FaGlobe } from 'react-icons/fa';

const Footer = () => {
    const tamañoIcono=40
  return (
    <footer className="footer">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <p>Desarrollado por @KuroDev</p>
      <p>Todos los derechos reservados</p>
      <ul className="social-links">
        <li>
          <a href="mailto:desingkuro@gmail.com">
            <FaEnvelope size={tamañoIcono}/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/andr%C3%A9s-licona-machado">
            <FaLinkedin size={tamañoIcono}/>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/and_licona">
            <FaInstagram size={tamañoIcono}/>
          </a>
        </li>
        <li>
          <a href="https://github.com/desingkuro">
            <FaGithub size={tamañoIcono}/>
          </a>
        </li>
        <li>
          <a href="https://andreslicona.netlify.app/">
            <FaGlobe size={tamañoIcono}/>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
