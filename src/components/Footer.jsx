import React from 'react';
import { FaEnvelope, FaGithub, FaGlobe, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/icon.jpg';
import '../styles/Footer.css';

const Footer = () => {
  const tamañoIcono = 40;

  return (
    <footer className="footer">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="footer-content">
        <div className="developer-section">
          <h4>Andrés Licona (@KuroDev)</h4>
          <ul className="social-links">
            <li>
              <a href="mailto:desingkuro@gmail.com">
                <FaEnvelope size={tamañoIcono} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/andr%C3%A9s-licona-machado">
                <FaLinkedin size={tamañoIcono} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/and_licona">
                <FaInstagram size={tamañoIcono} />
              </a>
            </li>
            <li>
              <a href="https://github.com/desingkuro">
                <FaGithub size={tamañoIcono} />
              </a>
            </li>
            <li>
              <a href="https://andreslicona.netlify.app/">
                <FaGlobe size={tamañoIcono} />
              </a>
            </li>
          </ul>
        </div>

        <div className="developer-section">
          <h4>Yeiler Simons Romero (@yeiler2111)</h4>
          <ul className="social-links">
            <li>
              <a href="mailto:yeiler2209@gmail.com">
                <FaEnvelope size={tamañoIcono} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/yeiler-andres-simons-romero-86b578261">
                <FaLinkedin size={tamañoIcono} />
              </a>
            </li>
            <li>
              <a href="https://github.com/yeiler2111">
                <FaGithub size={tamañoIcono} />
              </a>
            </li>
            <li>
              <a href="https://portfolio-yeiler.netlify.app">
                <FaGlobe size={tamañoIcono} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p>Desarrollado por @KuroDev y @yeiler2111</p>
      <p>Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;
