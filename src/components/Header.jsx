import '../styles/header.css'
import logo from '../assets/icon.jpg'
import { BtnDowload } from './BtnDowload'

export function Header() {
    return(
        <header className="cabecera">
            <div>
                <img src={logo} alt="logo Puc" />
                <p>Puc movil</p>
            </div>
            <BtnDowload/>
        </header>
    )
}