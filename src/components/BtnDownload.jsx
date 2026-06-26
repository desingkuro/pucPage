import { MdOutlineDownload } from "react-icons/md";
import "../styles/BtnDownload.css";

export function BtnDownload() {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.yeiler2209.puc&hl=es_CO"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-download"
    >
      <div className="svg-wrapper-1">
        <div className="svg-wrapper">
          <MdOutlineDownload className="svgDownload" />
        </div>
      </div>
      <span>Descargar</span>
    </a>
  );
}
