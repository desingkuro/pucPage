import '../styles/BtnDowload.css'
import { MdOutlineDownload } from "react-icons/md"; 
import axios from 'axios';

export function BtnDowload() {
  // Asegúrate de que la ruta al archivo .apk sea correcta
  function getApk(){
    const config = {
      responseType: 'blob', // Indica que esperas un archivo del servidor
    };

    axios.get('http://localhost:3000/download',config)
    .then(response=>{
      console.log('entro')
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('Download','Puc-App.apk');
      document.body.appendChild(link);
      link.click();
    })
    .catch(error=>console.log('hubo un error '+error))
  }

  return (
    
      <button onClick={getApk}>
        <div className="svg-wrapper-1">
          <div className="svg-wrapper">
            <MdOutlineDownload className='svgDownload'/>
          </div>
        </div>
        <span>Descargar</span>
      </button>

  );
}
