import { MdOutlineDownload } from "react-icons/md";
import "../styles/BtnDowload.css";

export function BtnDowload() {
  return (
    <button>
      <div className="svg-wrapper-1">
        <div className="svg-wrapper">
          <MdOutlineDownload className="svgDownload" />
        </div>
      </div>
      <a
        href="https://play.google.com/store/apps/details?id=com.yeiler2209.puc&hl=es_CO"
        target="_blank"
      >
        Descargar
      </a>
    </button>
  );
}
