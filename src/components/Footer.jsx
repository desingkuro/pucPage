import { FaEnvelope, FaGithub, FaGlobe, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/icon.jpg';
import { BtnDownload } from './BtnDownload';
import '../styles/Footer.css';

const developers = [
  {
    name: 'Andrés Licona',
    handle: '@KuroDev',
    links: [
      { icon: FaEnvelope, href: 'mailto:desingkuro@gmail.com', label: 'Email de Andrés Licona' },
      { icon: FaLinkedin, href: 'https://www.linkedin.com/in/andr%C3%A9s-licona-machado', label: 'LinkedIn de Andrés Licona' },
      { icon: FaInstagram, href: 'https://www.instagram.com/and_licona', label: 'Instagram de Andrés Licona' },
      { icon: FaGithub, href: 'https://github.com/desingkuro', label: 'GitHub de Andrés Licona' },
      { icon: FaGlobe, href: 'https://andreslicona.netlify.app/', label: 'Portafolio de Andrés Licona' },
    ],
  },
  {
    name: 'Yeiler Simons',
    handle: '@yeiler2111',
    links: [
      { icon: FaEnvelope, href: 'mailto:yeiler2209@gmail.com', label: 'Email de Yeiler Simons' },
      { icon: FaLinkedin, href: 'https://www.linkedin.com/in/yeiler-andres-simons-romero-86b578261', label: 'LinkedIn de Yeiler Simons' },
      { icon: FaGithub, href: 'https://github.com/yeiler2111', label: 'GitHub de Yeiler Simons' },
      { icon: FaGlobe, href: 'https://portfolio-yeiler.netlify.app', label: 'Portafolio de Yeiler Simons' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <section className="cta" data-reveal>
          <div className="cta__text">
            <h2>Descarga PUC Mobile gratis</h2>
            <p>Disponible para Android en Google Play. Sin costo y sin conexión.</p>
          </div>
          <BtnDownload variant="light" />
        </section>

        <div className="footer__grid">
          <div className="footer__brand">
            <img src={logo} alt="" aria-hidden="true" width="44" height="44" />
            <div>
              <strong>PUC Mobile</strong>
              <p>Plan Único de Cuentas para INEM Simón Bolívar.</p>
            </div>
          </div>

          {developers.map(dev => (
            <div key={dev.name} className="footer__col">
              <h3>{dev.name} <span>{dev.handle}</span></h3>
              <ul className="social-links">
                {dev.links.map(link => (
                  <li key={link.label}>
                    <a href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer">
                      <link.icon size={18} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__legal">
          <p>Desarrollado por @KuroDev y @yeiler2111 · Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
