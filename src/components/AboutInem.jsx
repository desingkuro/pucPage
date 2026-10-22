import '../styles/AboutInem.css'
import { FaExternalLinkAlt, FaCheckCircle, FaSync } from "react-icons/fa";

export function AboutInem() {
  return (
    <section className="inem" id="inem" data-reveal>
        <div className="inem__brand">
            <img
              className="inem__logo"
              src="https://www.inemsimonbolivarsm.edu.co/wp-content/uploads/2024/02/cropped-logo_workspace.png"
              alt="Logo del INEM Simón Bolívar"
              loading="lazy"
              width="64"
              height="64"
            />
            <h2 className="inem__title">INEM Simón Bolívar</h2>
            <p className="inem__city">Santa Marta, Colombia</p>
            <a
              className="btn-link"
              href="https://www.inemsimonbolivarsm.edu.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
                Página oficial <FaExternalLinkAlt size={13} aria-hidden="true" />
            </a>
            <ul className="inem__badges">
                <li>
                    <FaCheckCircle size={16} aria-hidden="true" />
                    En uso activo en la institución
                </li>
                <li>
                    <FaSync size={16} aria-hidden="true" />
                    Actualizada constantemente
                </li>
            </ul>
        </div>
        <div className="inem__body">
            <p>
                La aplicación de contabilidad PUC App Mobile del INEM Simón
                Bolívar es una herramienta digital innovadora, diseñada
                específicamente para la institución educativa INEM Simón
                Bolívar. Esta aplicación es el resultado de un esfuerzo
                concertado para digitalizar y simplificar la gestión contable
                dentro del área comercial de la institución.
            </p>
            <p>
                Permite a estudiantes, profesores y personal administrativo
                acceder a todas las cuentas del Plan Único de Cuentas. Cada
                cuenta se presenta con su nombre y código correspondiente,
                proporcionando una visión clara y ordenada de la estructura
                contable, además de rastrear los movimientos de cada cuenta al
                debitar o acreditar.
            </p>
            <p>
                Más allá de ser una herramienta de consulta, se ha convertido
                en un recurso educativo invaluable que ayuda a los estudiantes a
                entender los principios de la contabilidad de manera práctica y
                accesible. Actualmente está en uso activo dentro de la
                institución y contribuye al avance educativo del INEM Simón
                Bolívar.
            </p>
        </div>
    </section>
  );
}
