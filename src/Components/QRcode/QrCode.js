import React from 'react'
import qr from "./qrTeam6.png"
import "./Qr.css"

function QrCode() {
  return (
    <div className='qr-code-page'>
        <div className='qr-code'>
            <img src={qr} alt={qr} />
            <h1>¡Conocenos!</h1>
        </div>
        <div>
            
        </div>

    </div>
  )
}

export default QrCode