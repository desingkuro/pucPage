import { MdOutlineDownload } from "react-icons/md";
import "../styles/BtnDownload.css";

export function BtnDownload({ variant = "primary" }) {
  const classes = `btn-download${variant === "light" ? " btn-download--light" : ""}`;
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.yeiler2209.puc&hl=es_CO"
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
    >
      <span className="svg-wrapper" aria-hidden="true">
        <MdOutlineDownload className="svgDownload" />
      </span>
      <span className="btn-download__label">Descargar</span>
    </a>
  );
}
