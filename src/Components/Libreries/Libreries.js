import React from 'react'
import "./Libreries.css"
import js from "./images/js.png"
import css from "./images/css.png"
import react from "./images/react.png"
import node from "./images/node.png"
import mongo from "./images/mongo.png"
import git from "./images/git.png";
import html from "./images/html.png";
import bootstrap from "./images/bootstrap.png"
import mercadopago from "./images/mercadopago.png"

function Libreries() {
  return (
    <div>
        <h2 className='libreries-title'>Frameworks and Libraries</h2>
        <div className='img-container' >
        <div>
        <img src={js} alt="js"/>
      </div>
      <div>
        <img src={css} alt="css"/>
      </div>
      <div>
        <img src={html} alt="css"/>
      </div>
      <div>
        <img src={react} alt="react"/>
      </div>
      <div>
        <img src={mongo} alt="mongo"/>
      </div>
      <div>
        <img src={node} alt="node"/>
      </div>
      <div>
        <img src={git} alt="git"/>
      </div>
      <div>
        <img src={bootstrap} alt="git"/>
      </div>
      <div>
        <img src={mercadopago} alt="git"/>
      </div>
        </div>
    </div>
  )
}

export default Libreries