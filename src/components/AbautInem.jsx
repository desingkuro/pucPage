import '../styles/AboutInem.css'
import { FaExternalLinkSquareAlt } from "react-icons/fa";

export function AboutInem() {
  return (
    <section className="aboutInem">
        <img src="https://www.inemsimonbolivarsm.edu.co/wp-content/uploads/2024/02/cropped-logo_workspace.png" alt="Inem Simón Bolívar logo" />
        <h2 className='tituloInem'>INEM Simón Bolívar</h2>
        <p className='descripcionInem'>
            La aplicación de contabilidad PUC App Mobile del INEM Simón
            Bolívar es una herramienta digital innovadora, diseñada
            específicamente para la institución educativa INEM Simón
            Bolívar, situada en el corazón de Santa Marta, Colombia. Esta aplicación
            es el resultado de un esfuerzo concertado para digitalizar y simplificar
            la gestión contable dentro del área comercial de la institución. La
            aplicación permite a los usuarios, ya sean estudiantes, profesores o
            personal administrativo, acceder a todas las cuentas del Plan Único de
            Cuentas de Contabilidad. Cada cuenta se presenta con su nombre y código
            correspondiente, proporcionando una visión clara y ordenada de la
            estructura contable. Además, la aplicación ofrece la posibilidad de
            rastrear los movimientos de cada cuenta, mostrando cuándo se debita o se
            acredita. Esta funcionalidad permite a los usuarios seguir la pista de
            las transacciones y entender mejor el flujo de recursos dentro de la
            institución.
        </p>
        <p className="descripcionInem">
            Pero la aplicación PUC App Mobile va más allá de ser una simple herramienta de consulta. También se ha convertido en un recurso educativo invaluable, ayudando a los
            estudiantes a entender los principios de la contabilidad de una manera
            práctica y accesible. Actualmente, la aplicación está en uso activo
            dentro de la institución, demostrando ser una herramienta esencial para
            la gestión contable y la educación. Estamos orgullosos de que nuestra
            aplicación esté contribuyendo al avance educativo en INEM Simón Bolívar
            y esperamos seguir apoyando su misión de excelencia educativa.
        </p>
        <div className='linkInem'>
            <p>
                Link de la Institución 
            </p>
            <a href="https://www.inemsimonbolivarsm.edu.co/" target="_blank">
                Pagina Oficial <FaExternalLinkSquareAlt />
            </a>
        </div>
    </section>
  );
}
