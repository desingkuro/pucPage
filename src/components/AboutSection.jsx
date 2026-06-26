import '../styles/AboutSection.css';
import pucImagen from '../assets/pucImagen.png';
import { FaMobileAlt, FaSearch, FaSync, FaWifi, FaUserTie, FaSmile } from 'react-icons/fa';
import { AboutInem } from './AboutInem';

const features = [
  {
    id: 'rapido',
    Icon: FaMobileAlt,
    title: 'Acceso Rápido al PUC:',
    description: 'Explora una amplia gama de cuentas, categorías y códigos del PUC directamente desde tu dispositivo móvil.',
    alignRight: true,
  },
  {
    id: 'busqueda',
    Icon: FaSearch,
    title: 'Búsqueda Eficiente:',
    description: 'Encuentra fácilmente cuentas específicas o categorías utilizando nuestra función de búsqueda avanzada.',
    alignRight: true,
  },
  {
    id: 'actualizada',
    Icon: FaSync,
    title: 'Información Actualizada:',
    description: 'Mantenemos nuestro contenido actualizado para que siempre tengas acceso a la información más reciente del PUC.',
    alignRight: true,
  },
  {
    id: 'offline',
    Icon: FaWifi,
    title: 'Sin Necesidad de Conexión:',
    description: 'Puedes utilizar nuestra aplicación sin conexión a Internet, lo que la hace perfecta para situaciones en las que no tienes acceso a la web.',
    alignRight: false,
  },
  {
    id: 'profesional',
    Icon: FaUserTie,
    title: 'Ideal para Profesionales:',
    description: 'Si eres contable, auditor o estudiante de contabilidad, esta aplicación te será de gran utilidad en tu trabajo diario.',
    alignRight: false,
  },
  {
    id: 'intuitiva',
    Icon: FaSmile,
    title: 'Interfaz Intuitiva:',
    description: 'Navega por la aplicación de manera sencilla gracias a nuestra interfaz amigable y fácil de usar.',
    alignRight: false,
  },
];

export function AboutSection() {
    const tamañoIcono=45;
    const colorIcono='#872341';
    const leftFeatures = features.filter(f => f.alignRight);
    const rightFeatures = features.filter(f => !f.alignRight);

    return (
        <section className="about-section">
            <header className='headerCaracteristicas' data-reveal>
                <h2>Bienvenido a PUC</h2>
                <p>La herramienta definitiva para acceder a información clave del Plan Único de Cuentas (PUC) de manera rápida y sencilla. Nuestra aplicación está diseñada para profesionales, estudiantes y cualquier persona interesada en el PUC.</p>
                <h3>Características Principales:</h3>
            </header>
            <section className='containerPrincipalCaracteristicas'>
                <div className='containerCaracteristicas' data-reveal="left">
                    <ul className='ulLista'>
                        {leftFeatures.map(f => (
                            <li key={f.id} className='itemList itemListIzquierda'>
                                <f.Icon size={tamañoIcono} color={colorIcono}/>
                                <span>{f.title}</span>
                                {f.description}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='containerImagen containerCaracteristicas' data-reveal="scale">
                    <img
                      src={pucImagen}
                      alt="Pantalla de la aplicación PUC Mobile mostrando cuentas contables"
                      loading="lazy"
                    />
                </div>
                <div className='containerCaracteristicas' data-reveal="right">
                    <ul className='ulLista'>
                        {rightFeatures.map(f => (
                            <li key={f.id} className='itemList'>
                                <f.Icon size={tamañoIcono} color={colorIcono}/>
                                <span>{f.title}</span>
                                {f.description}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <AboutInem />
        </section>
    );
}
