import React from "react";
import Slider from "./Slider";
import "./ProjectView.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { Link } from 'react-router-dom';

function ProjectView() {
  return (
    <div className="projectView-container">
      <Slider />
      <div className="buttons">
        <a
          href="https://casa-qwcy.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button-slider">
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front text">
              {" "}
              <LanguageIcon /> Project View
            </span>
          </button>
        </a>

        <a
          href="https://github.com/gatowaton/Casa-Diaz-Project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button-slider">
            <span className="shadow"></span>
            <span className="edge2"></span>
            <span className="front2 text">
              <GitHubIcon /> Project Code
            </span>
          </button>
        </a>
      </div>

      <div className="projectView-text">
        <h1>Casa diaz SPA Ecommerce</h1>
        <p>
          A nuestro equipo se le dio el trabajo de crear un Ecommerce para un
          emprendedor que vende productos eléctricos industriales y nuestro
          objetivo era hacer una herramienta que le ayudara a alcanzar a más
          clientes y exhibir sus productos.</p><p> Para construir este proyecto se
          utilizaron las tecnologías más demandadas del área de la programación.</p>
          <p>Este Ecommerce cuenta con características que lo hacen una herramienta
          muy útil para si negocio, tales como creación de productos y gestión
          de inventario, autentificación de usuarios para guardar las ordenes de
          sus clientes, pasarela de pago para realizar compras online, filtrar
          productos por categorías y se le dio un diseño intuitivo y acorde al
          público objetivo.</p>
        
      </div>
      <Link to="/qr"><button className='button-29'>QR Code</button></Link>
    </div>
  );
}

export default ProjectView;
