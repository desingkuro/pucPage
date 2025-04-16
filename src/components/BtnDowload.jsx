import "../styles/BtnDowload.css";
import { MdOutlineDownload } from "react-icons/md";

export function BtnDowload() {
  return (
    <button>
      <div className="svg-wrapper-1">
        <div className="svg-wrapper">
          <MdOutlineDownload className="svgDownload" />
        </div>
      </div>
      <a
        href={
          'https://dl.dropbox.com/scl/fi/efcz4odas7xisejw0weut/puc1.0.0.apk?rlkey=er1y0mn4ov80407wprn1oblsa&e=1&st=dhwage0o&dl=0'
        }
      >
        Descargar
      </a>
    </button>
  );
}
