import { FaEnvelope, FaGithub, FaGlobe, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/icon.jpg';
import '../styles/Footer.css';

const developers = [
  {
    name: 'Andrés Licona (@KuroDev)',
    links: [
      { icon: FaEnvelope, href: 'mailto:desingkuro@gmail.com', label: 'Email' },
      { icon: FaLinkedin, href: 'https://www.linkedin.com/in/andr%C3%A9s-licona-machado', label: 'LinkedIn' },
      { icon: FaInstagram, href: 'https://www.instagram.com/and_licona', label: 'Instagram' },
      { icon: FaGithub, href: 'https://github.com/desingkuro', label: 'GitHub' },
      { icon: FaGlobe, href: 'https://andreslicona.netlify.app/', label: 'Portfolio' },
    ],
  },
  {
    name: 'Yeiler Simons Romero (@yeiler2111)',
    links: [
      { icon: FaEnvelope, href: 'mailto:yeiler2209@gmail.com', label: 'Email' },
      { icon: FaLinkedin, href: 'https://www.linkedin.com/in/yeiler-andres-simons-romero-86b578261', label: 'LinkedIn' },
      { icon: FaGithub, href: 'https://github.com/yeiler2111', label: 'GitHub' },
      { icon: FaGlobe, href: 'https://portfolio-yeiler.netlify.app', label: 'Portfolio' },
    ],
  },
];

export function Footer() {
  const tamañoIcono = 40;

  return (
    <footer className="footer">
      <div className="logo" data-reveal="scale">
        <img src={logo} alt="Logo PUC Mobile" />
      </div>

      <div className="footer-content">
        {developers.map((dev, i) => (
          <div key={dev.name} className="developer-section" data-reveal data-delay={i}>
            <h4>{dev.name}</h4>
            <ul className="social-links">
              {dev.links.map(link => (
                <li key={link.label}>
                  <a href={link.href} aria-label={link.label}>
                    <link.icon size={tamañoIcono} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p>Desarrollado por @KuroDev y @yeiler2111</p>
      <p>Todos los derechos reservados</p>
    </footer>
  );
}
