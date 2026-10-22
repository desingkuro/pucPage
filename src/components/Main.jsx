import { useEffect, useRef } from 'react'
import '../styles/main.css'
import { Header } from './Header'
import imagen from '../assets/celPuc.jpg'
import { BtnDownload } from './BtnDownload'
import { FaCheckCircle, FaWifi, FaMobileAlt } from 'react-icons/fa'

export function Main() {
    const heroImage = useRef(null)

    // React 18 no reconoce fetchPriority como prop: se aplica por ref.
    useEffect(() => {
        heroImage.current?.setAttribute('fetchpriority', 'high')
    }, [])

    return(
        <main className='hero' id='inicio'>
            <Header />
            <div className='hero__inner container'>
                <div className='hero__content' data-reveal="left">
                    <span className='eyebrow'>App gratuita para Android</span>
                    <h1 className='hero__title'>
                        <span className='hero__brand'>PUC App</span>
                        <span className='hero__sub'>Plan Único de Cuentas</span>
                    </h1>
                    <p className='hero__lead'>
                        Consulta cuentas, códigos y movimientos del PUC desde tu
                        celular. Rápida, gratuita y disponible incluso sin conexión.
                    </p>
                    <div className='hero__actions'>
                        <BtnDownload />
                        <a className='btn-ghost' href='#caracteristicas'>
                            Ver características
                        </a>
                    </div>
                    <ul className='hero__meta'>
                        <li><FaCheckCircle aria-hidden="true" /> 100% gratis</li>
                        <li><FaWifi aria-hidden="true" /> Funciona offline</li>
                        <li><FaMobileAlt aria-hidden="true" /> Android</li>
                    </ul>
                </div>
                <div className='hero__visual' data-reveal="right">
                    <div className='hero__glow' aria-hidden="true" />
                    <div className='hero__phone'>
                        <img
                          ref={heroImage}
                          src={imagen}
                          alt="Interfaz de la app PUC Mobile mostrando cuentas contables"
                          width="1284"
                          height="2778"
                        />
                        <span className='hero__chip hero__chip--top'>110505 · Caja general</span>
                        <span className='hero__chip hero__chip--bottom'>
                            <FaWifi aria-hidden="true" /> Sin conexión
                        </span>
                    </div>
                </div>
            </div>
            <svg className='hero__wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M0,64L48,69.3C96,75,192,85,288,112C384,139,480,181,576,202.7C672,224,768,224,864,186.7C960,149,1056,75,1152,53.3C1248,32,1344,64,1392,80L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </main>
    )
}
