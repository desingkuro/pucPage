import React from 'react';
import '../styles/AboutSection.css';
import pucImagen from '../assets/pucImagen.png';
import { FaMobileAlt, FaSearch, FaSync, FaWifi, FaUserTie, FaSmile } from 'react-icons/fa';
import { AboutInem } from './AbautInem';

const AboutSection = () => {
    const tamañoIcono=45;
    const colorIcono='#872341';
    return (
        <section className="about-section">
            <header className='headerCaracteristicas'>
                <h2>Bienvenido a PUC</h2>
                <p>La herramienta definitiva para acceder a información clave del Plan Único de Cuentas (PUC) de manera rápida y sencilla. Nuestra aplicación está diseñada para profesionales, estudiantes y cualquier persona interesada en el PUC.</p>
                <h3>Características Principales:</h3>
            </header>
            <section className='containerPrincipalCaracteristicas'>
                <div className='containerCaracteristicas'>
                    <ul className='ulLista'>
                        <li className='itemList itemListIzquierda' >
                            <FaMobileAlt size={tamañoIcono} color={colorIcono}/> {/* Icono para "Acceso Rápido al PUC" */}
                            <span>Acceso Rápido al PUC:</span>
                            Explora una amplia gama de cuentas, categorías y códigos del PUC directamente desde tu dispositivo móvil.
                        </li>
                        <li className='itemList itemListIzquierda' >
                            <FaSearch  size={tamañoIcono} color={colorIcono}/> {/* Icono para "Búsqueda Eficiente" */}
                            <span>Búsqueda Eficiente:</span>
                            Encuentra fácilmente cuentas específicas o categorías utilizando nuestra función de búsqueda avanzada.
                        </li>
                        <li className='itemList itemListIzquierda' >
                            <FaSync size={tamañoIcono} color={colorIcono}/> {/* Icono para "Información Actualizada" */}
                            <span>Información Actualizada:</span>
                            Mantenemos nuestro contenido actualizado para que siempre tengas acceso a la información más reciente del PUC.
                        </li>
                    </ul>
                </div>
                <div className='containerImagen containerCaracteristicas'>
                    <img src={pucImagen} alt="" />
                </div>
                <div className='containerCaracteristicas'>
                    <ul className='ulLista'>
                        <li className='itemList'>
                            <FaWifi  size={tamañoIcono} color={colorIcono}/> 
                            <span>Sin Necesidad de Conexión:</span>
                            Puedes utilizar nuestra aplicación sin conexión a Internet, lo que la hace perfecta para situaciones en las que no tienes acceso a la web.
                        </li>
                        <li className='itemList'>
                            <FaUserTie  size={tamañoIcono} color={colorIcono}/> {/* Icono para "Ideal para Profesionales" */}
                            <span>Ideal para Profesionales:</span>
                            Si eres contable, auditor o estudiante de contabilidad, esta aplicación te será de gran utilidad en tu trabajo diario.
                        </li>
                        <li className='itemList'>
                            <FaSmile  size={tamañoIcono} color={colorIcono} /> {/* Icono para "Interfaz Intuitiva" */}
                            <span>Interfaz Intuitiva:</span>
                            Navega por la aplicación de manera sencilla gracias a nuestra interfaz amigable y fácil de usar.
                        </li>
                    </ul>
                </div>
            </section>
            <AboutInem />
        </section>
    );
};

export default AboutSection;
