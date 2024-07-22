import "../styles/BtnDowload.css";
import { MdOutlineDownload } from "react-icons/md";
import axios from "axios";

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
          "https://dl.dropbox.com/scl/fi/w85a2tdujpz1dcjg0h69f/pucApk2.2.apk?rlkey=i4cxd1shmf71tbjqmmbcz2veu&st=ni7qw4sv&dl=0"
        }
      >
        Descargar
      </a>
    </button>
  );
}
