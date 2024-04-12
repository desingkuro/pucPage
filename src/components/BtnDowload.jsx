import '../styles/BtnDowload.css'
import { MdOutlineDownload } from "react-icons/md"; 
import axios from 'axios';

export function BtnDowload() {
   return (
      <button>
        <div className="svg-wrapper-1">
          <div className="svg-wrapper">
            <MdOutlineDownload className='svgDownload'/>
          </div>
        </div>
        <a href={'https://dl.dropboxusercontent.com/scl/fi/z1zp0g5uxwq256ji441k1/pucApkV_2.firmado.apk?rlkey=j23sgojkpkrjul78iy7nirdw4'}>
          Descargar
        </a>
      </button>

  );
}
