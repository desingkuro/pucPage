import '../styles/header.css'
import logo from '../assets/icon.jpg'
import { BtnDownload } from './BtnDownload'

export function Header() {
    return(
        <header className="cabecera">
            <div>
                <img src={logo} alt="Logo PUC Mobile" />
                <p>Puc movil</p>
            </div>
            <BtnDownload/>
        </header>
    )
}
