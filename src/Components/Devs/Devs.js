import React from 'react'
import "./Devs.css"
import devImg1 from './Dev-img/dev-img-1.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import pdf1 from "./Devs-CV/PabloCavada_CV.pdf";
import pdf2 from "./Devs-CV/JosefaLaporteCv.pdf";
import pdf3 from "./Devs-CV/JesusRojasCv.pdf";
import pdf4 from "./Devs-CV/EfrainCerdaCv.pdf";
import pdf5 from "./Devs-CV/GabrielFuentesCv.pdf";


function Devs() {
  return (
    <div className='dev-container'>
       <div className='dev-card'>
            <div className='dev-card-img-container'>
                <img src={devImg1} alt={devImg1} />
            </div> 
            <div className='dev-info'>
                <h2>Pablo Cavada</h2>
                <h3>Full Stack Developer</h3>
                <h4>Scrum Master</h4>
            </div>
            <div className='dev-btns'>
                <div className='dev-btns-1'>
                    <a href="https://www.linkedin.com/in/pablo-cavada/" target='_blank' rel="noopener noreferrer">
                    <button className='button-29'><LinkedInIcon/><span>LinkedIn</span></button>
                    </a>
                    <a href="https://github.com/gatowaton" target='_blank' rel="noopener noreferrer">
                    <button className='button-29'><GitHubIcon/><span>GitHub</span></button>
                    </a>
                </div>
                <a href={pdf1} target='_blank' rel="noopener noreferrer">
                <button className='button-29'><DownloadIcon/><span>Curriculum Vitae</span></button>
                </a>
            </div>
       </div>
       <div className='dev-card'>
            <div className='dev-card-img-container'>
                <img src={devImg1} alt={devImg1} />
            </div> 
            <div className='dev-info'>
                <h2>Gabriel Fuentes</h2>
                <h3>Full Stack Developer</h3>
            </div>
            <div className='dev-btns'>
                <div className='dev-btns-1'>
                    <a href="https://www.linkedin.com/in/gabriel-fuentes-vidal08/" target='_blank' rel="noopener noreferrer">
                    <button className='button-29'><LinkedInIcon/><span>LinkedIn</span></button>
                    </a>
                    <a href="https://github.com/GabrielFuentes1" target='_blank' rel="noopener noreferrer">
                    <button className='button-29'><GitHubIcon/><span>GitHub</span></button>
                    </a>
                </div>
                <a href={pdf5} target='_blank' rel="noopener noreferrer">
                <button className='button-29'><DownloadIcon/><span>Curriculum Vitae</span></button>
                </a>
            </div>
       </div> 
       <div className='dev-card'>
            <div className='dev-card-img-container'>
                <img src={devImg1} alt={devImg1} />
            </div> 
            <div className='dev-info'>
                <h2>Josefa Laporte</h2>
                <h3>Full Stack Developer</h3>
            </div>
            <div className='dev-btns'>
                <div className='dev-btns-1'>
                    <a href="https://www.linkedin.com/in/josefa-laporte-49a7b9284/" target='_blank' rel="noopener noreferrer">
                    <button className='button-29'><LinkedInIcon/><span>LinkedIn</span></button>
                    </a>
                    <a href="https://github.com/josefalaporte" target='_blank' rel="noopener noreferrer">
                    <button className='button-29'><GitHubIcon/><span>GitHub</span></button>
                    </a>
                </div>
                <a href={pdf2} target='_blank' rel="noopener noreferrer">
                <button className='button-29'><DownloadIcon/><span>Curriculum Vitae</span></button>
                </a>
            </div>
       </div>
       <div className='dev-card'>
            <div className='dev-card-img-container'>
                <img src={devImg1} alt={devImg1} />
            </div> 
            <div className='dev-info'>
                <h2>Jesús Rojas</h2>
                <h3>Full Stack Developer</h3>
            </div>
            <div className='dev-btns'>
                <div className='dev-btns-1'>
                    <a href="https://www.linkedin.com/in/jes%C3%BAs-enrique-rojas-nicotra-56656b240/" target='_blank' rel="noopener noreferrer">
                    <button className='button-29'><LinkedInIcon/><span>LinkedIn</span></button>
                    </a>
                    <a href="https://github.com/JesusRojasn" target='_blank' rel="noopener noreferrer">
                    <button className='button-29'><GitHubIcon/><span>GitHub</span></button>
                    </a>
                </div>
                <a href={pdf3} target='_blank' rel="noopener noreferrer">
                <button className='button-29'><DownloadIcon/><span>Curriculum Vitae</span></button>
                </a>
            </div>
       </div>
       <div className='dev-card'>
            <div className='dev-card-img-container'>
                <img src={devImg1} alt={devImg1} />
            </div> 
            <div className='dev-info'>
                <h2>Efrain Cerda</h2>
                <h3>Full Stack Developer</h3>
                <h4>Product Owner</h4>
            </div>
            <div className='dev-btns'>
                <div className='dev-btns-1'>
                    <a href="https://www.linkedin.com/in/efrain-cerda/" target='_blank' rel="noopener noreferrer">
                    <button className='button-29'><LinkedInIcon/><span>LinkedIn</span></button>
                    </a>
                    <a href="https://github.com/fukkona" target='_blank' rel="noopener noreferrer">
                    <button className='button-29'><GitHubIcon/><span>GitHub</span></button>
                    </a>
                </div>
                <a href={pdf4} target='_blank' rel="noopener noreferrer">
                <button className='button-29'><DownloadIcon/><span>Curriculum Vitae</span></button>
                </a>
            </div>
       </div>
    </div>
  )
}

export default Devs