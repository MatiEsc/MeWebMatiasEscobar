import React from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";
import "./SobreMi.css";

function SobreMi() {
  // Hook de observación para detectar cuando el componente entra en vista
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo activa la animación una vez cuando el componente entra en vista
    threshold: 0.8, // Define cuánto del componente debe ser visible para activar la animación
  });
  const scrollToContacto = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div id="home" className="sobre-mi-container">
      <div className="imagen-container">
        <img src="img/SinFondo1.webp" alt="Matias Escobar" className="imagenPersonal" />
      </div>
      <div className="texto-container">
        <h2 className="nombre">Matías Escobar</h2>

        <h1 className="titulo">
          Diseño Web Profesional <br />
          Mantenimiento Técnico <br />
          Todo para Impulsar tú Presencia Online
        </h1>
        <p className="descripcion">
          ¿Te gustaría <strong>destacar en el mercado digital</strong> <br />
          pero no sabes por dónde empezar?
        </p>
        <p className="descripcion1">
          No estás solo. Muchos de mis clientes también se encontraron en esta situación. Mientras
          tú te enfocas en <strong>fortalecer tu marca</strong>, yo me encargaré de{" "}
          <strong>crear tu página web atractiva y funcional </strong> que te permita sobresalir en
          un <strong>mercado de constante crecimiento.</strong>
        </p>
        <button className="botonReserva" onClick={scrollToContacto}>
          QUIERO CONOCER LOS SERVICIOS
        </button>
      </div>
    </div>
  );
}

export default SobreMi;
