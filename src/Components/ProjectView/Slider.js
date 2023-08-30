import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import img1 from "./img/slider1.png"
import img2 from "./img/slider2.png"
import img3 from "./img/slider3.png"
import img4 from "./img/slider4.png"
import img5 from "./img/slider5.png"
import "./Slider.css"
import React from 'react'

function Slider() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide projectSlider" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img5} className="d-block w-100  carousel-img" alt="..."/>
      <div className="carousel-caption d-none d-md-block carousel-text">
        <p>Ecommerce profesional con todas las características necesarias para potenciar tu negocio.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img1} className="d-block w-100 carousel-img" alt="..."/>
      <div className="carousel-caption d-none d-md-block carousel-text">
        <p>Mas de 200 productos en base de datos.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100  carousel-img" alt="..."/>
      <div className="carousel-caption d-none d-md-block carousel-text">
        <p>Carrito de compras.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100  carousel-img" alt="..."/>
      <div className="carousel-caption d-none d-md-block carousel-text">
        <p>Compra con Mercado Pago.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img4} className="d-block w-100  carousel-img" alt="..."/>
      <div className="carousel-caption d-none d-md-block carousel-text">
        <p>Filtra los productos por nombre y categoría.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Slider