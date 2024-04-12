import '../styles/main.css'
import { Header } from './Header'
import imagen from '../assets/celPuc.jpg'
import { BtnDowload } from './BtnDowload'

export function Main() {
    return(
        <main className='containerPrincipal'>
            <Header />
            <main className='containerMain'>
                <div className='Titulo'>
                    <h1 data-meta="name"><span>PUC</span> App (Plan Unico De Cuentas)</h1>
                    <p>Obten al alcance de tu mano todo lo que necesitas para tus movimientos contables.</p>
                    <BtnDowload/>
                </div>
                <div className='imagenPrincipal'>
                    <img src={imagen} alt="" />
                </div>
            </main>
            <svg className='svgOla' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260">
                <path fill="#0099ff" fill-opacity="1" d="M0,64L48,69.3C96,75,192,85,288,112C384,139,480,181,576,202.7C672,224,768,224,864,186.7C960,149,1056,75,1152,53.3C1248,32,1344,64,1392,80L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </main>
    )
}