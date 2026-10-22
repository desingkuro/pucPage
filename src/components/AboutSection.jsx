import '../styles/AboutSection.css';
import pucImagen from '../assets/pucImagen.png';
import { FaMobileAlt, FaSearch, FaSync, FaWifi, FaUserTie, FaSmile } from 'react-icons/fa';
import { AboutInem } from './AboutInem';

const features = [
  {
    id: 'rapido',
    Icon: FaMobileAlt,
    title: 'Acceso rápido al PUC',
    description: 'Explora cuentas, categorías y códigos del PUC directamente desde tu dispositivo móvil.',
    alignRight: true,
  },
  {
    id: 'busqueda',
    Icon: FaSearch,
    title: 'Búsqueda eficiente',
    description: 'Encuentra cuentas o categorías específicas con la función de búsqueda avanzada.',
    alignRight: true,
  },
  {
    id: 'actualizada',
    Icon: FaSync,
    title: 'Información actualizada',
    description: 'Mantenemos el contenido al día para que siempre tengas la información más reciente del PUC.',
    alignRight: true,
  },
  {
    id: 'offline',
    Icon: FaWifi,
    title: 'Sin necesidad de conexión',
    description: 'Funciona sin Internet, perfecta para cuando no tienes acceso a la web.',
    alignRight: false,
  },
  {
    id: 'profesional',
    Icon: FaUserTie,
    title: 'Ideal para profesionales',
    description: 'Si eres contable, auditor o estudiante de contabilidad, te será de gran utilidad en tu día a día.',
    alignRight: false,
  },
  {
    id: 'intuitiva',
    Icon: FaSmile,
    title: 'Interfaz intuitiva',
    description: 'Navega de manera sencilla gracias a una interfaz amigable y fácil de usar.',
    alignRight: false,
  },
];

function FeatureCard({ feature }) {
  const { Icon, title, description } = feature;
  return (
    <article className='feature-card'>
      <span className='feature-card__icon' aria-hidden="true">
        <Icon size={22} />
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export function AboutSection() {
    const leftFeatures = features.filter(f => f.alignRight);
    const rightFeatures = features.filter(f => !f.alignRight);

    return (
        <section className="features" id="caracteristicas">
            <div className="container">
                <header className='section-head' data-reveal>
                    <span className='eyebrow eyebrow--light'>Características</span>
                    <h2>Todo el PUC, sin complicaciones</h2>
                    <p>
                        La herramienta definitiva para acceder a la información clave del
                        Plan Único de Cuentas, diseñada para profesionales, estudiantes y
                        cualquier persona interesada en contabilidad.
                    </p>
                </header>

                <div className='bento'>
                    <div className='bento__col' data-reveal="left">
                        {leftFeatures.map(f => <FeatureCard key={f.id} feature={f} />)}
                    </div>
                    <figure className='bento__media' data-reveal="scale">
                        <img
                          src={pucImagen}
                          alt="Pantalla de la aplicación PUC Mobile mostrando cuentas contables"
                          loading="lazy"
                        />
                    </figure>
                    <div className='bento__col' data-reveal="right">
                        {rightFeatures.map(f => <FeatureCard key={f.id} feature={f} />)}
                    </div>
                </div>

                <AboutInem />
            </div>
        </section>
    );
}
