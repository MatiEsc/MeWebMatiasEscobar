import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";
import "./Portafolio.css";

function Portafolio() {
  const [modalData, setModalData] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  const proyectos = [
    {
      id: 1,
      imagen: "img/DinaTransfers.webp",
      titulo: "Transfers Dina",
      descripcion:
        "Desarrolle una página web a medida para Dina Transfers, diseñada para presentar de manera efectiva los servicios de su empresa en línea. La plataforma proporciona a los visitantes toda la información necesaria sobre los servicios ofrecidos, permitiendo una navegación intuitiva y la capacidad de realizar reservas fácilmente. La solución incluye un diseño atractivo y una interfaz de usuario amigable, optimizada para mejorar la experiencia del cliente y facilitar la conversión de visitantes en clientes.",
      url: "https://dina-transfers.vercel.app/",
    },
    {
      id: 2,
      imagen: "img/amara.webp",
      titulo: "Amara",
      descripcion:
        "Desarrolle una página web para Amara con el objetivo de mostrar sus productos y servicios de manera efectiva. La plataforma está diseñada para proporcionar a los visitantes toda la información necesaria sobre la oferta de Amara, incluyendo detalles sobre sus productos y servicios. Además, se integraron funcionalidades de contacto para facilitar la comunicación directa con la empresa, permitiendo a los usuarios obtener información adicional y realizar consultas. La web no solo optimiza la visibilidad de Amara en línea, sino que también mejora la accesibilidad de su oferta a potenciales clientes.",
      url: "https://amara-steel.vercel.app/",
    },
    {
      id: 3,
      imagen: "img/motz.webp",
      titulo: "Motz-Regaleria",
      descripcion:
        "Desarrollé una tienda en línea personalizada para Motz- Regaleria, especializada en ropa infantil. La plataforma presenta un diseño moderno y fácil de usar, optimizado para móviles y escritorio. Incluye un sistema de gestión de stock en tiempo real que previene compras de artículos agotados. La integración con una base de datos externa asegura una actualización constante del inventario. Con una navegación intuitiva, la tienda ofrece una experiencia de compra confiable y conveniente.",
      url: "https://proyecto3.com",
    },
    {
      id: 5,
      imagen: "img/francisco-alvarez.webp",
      titulo: "Francisco Alvarez",
      descripcion:
        "Desarrollé una página web personalizada para el Dr. Francisco Alvarez, diseñada para proporcionar a los pacientes una experiencia en línea intuitiva y profesional. La plataforma facilita la búsqueda de información sobre los servicios oftalmológicos ofrecidos, incluyendo consultas, tratamientos y procedimientos especializados. Además, la web incorpora una sección de contacto detallada para responder a preguntas y solicitudes. El diseño elegante y funcional está optimizado para dispositivos móviles y de escritorio, asegurando que los pacientes puedan acceder a la información y servicios de manera fácil y cómoda en cualquier momento.",
      url: "https://dr-francisco-alvarez.vercel.app/",
    },
    // Añadir más proyectos aquí
  ];

  const openModal = (proyecto) => {
    setModalData(proyecto);
    setActiveProject(proyecto.id);
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const closeModal = () => {
    setModalData(null);
    setActiveProject(null);
  };

  return (
    <section id="proyectos" className="portafolio">
      <div className="portafolio-container">
        <h2 className="portafolio-titulo h2Portfolio">Algunos proyectos</h2>
        <div
          className={`portafolio-lista ${inView ? "animate__animated animate__backInUp" : ""}`}
          ref={ref}
        >
          {proyectos.map((proyecto) => (
            <div
              key={proyecto.id}
              className={`proyecto ${activeProject === proyecto.id ? "active" : ""}`}
              onClick={() => openModal(proyecto)}
            >
              <img src={proyecto.imagen} alt={proyecto.titulo} className="proyecto-imagen" />
              {activeProject === proyecto.id && (
                <>
                  <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
                  <p className="proyecto-descripcion">{proyecto.descripcion}</p>
                </>
              )}
            </div>
          ))}
        </div>

        {modalData && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={modalData.imagen} alt={modalData.titulo} className="modal-imagen" />
              <div className="modal-detalles">
                <h3 className="modal-titulo">{modalData.titulo}</h3>
                <p className="modal-descripcion">{modalData.descripcion}</p>
                <a
                  href={modalData.url}
                  className="modal-url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ir al sitio
                </a>
              </div>
              <button className="modal-close" onClick={closeModal}>
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Portafolio;
