import '../styles/header.css'
import logo from '../assets/icon.jpg'
import { BtnDownload } from './BtnDownload'

export function Header() {
    return(
        <header className="header">
            <div className="header__inner container">
                <a className="header__brand" href="#inicio" aria-label="PUC Mobile, ir al inicio">
                    <img src={logo} alt="" aria-hidden="true" width="36" height="36" />
                    <span>PUC <strong>Mobile</strong></span>
                </a>
                <nav className="header__nav" aria-label="Secciones del sitio">
                    <a href="#caracteristicas">Características</a>
                    <a href="#inem">INEM</a>
                    <a href="#informacion">Información</a>
                </nav>
                <div className="header__actions">
                    <BtnDownload />
                </div>
            </div>
        </header>
    )
}
