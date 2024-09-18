// src/componentes/Promocion/Promocion.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaLaptop, FaTools, FaShoppingCart, FaEdit } from "react-icons/fa";
import "./Promocion.css";

export const promociones = [
  {
    id: 1,
    titulo: "Diseño Web para Emprendedores",
    descripcion:
      "Ideal para quienes están comenzando y necesitan una presencia web efectiva y asequible.",
    precio: "$300.000",
    abono: "$20.000",
    descripcion1:
      "Una página web económica es una One Page (también conocida como Landing Page), que consta de una única página donde las secciones se ven a medida que se hace scroll (deslizar hacia abajo)",
    diseño: "Diseño 100% personalizado",
    opcion1: "Asesoramiento personalizado",
    opcion2: "Soporte personalizado",
    opcion3: "Optimización SEO Básica para mejorar la visibilidad en motores de búsqueda.",
    opcion4: "Capacitación básica para el uso del sitio web",
  },
  {
    id: 2,
    titulo: "Diseño Web Autogestionable",
    descripcion:
      "Para quienes desean tener control total sobre su sitio web con la capacidad de actualizar y gestionar contenido por sí mismos.",
    precio: "$400.000",
    abono: "$20.000",
    descripcion1:
      "Es una página web con páginas internas. Se utiliza para sitios personales o para empresas, a modo institucional o de mostrar los servicios que se ofrecen. Se recomienda para emprendedores y/o PyMEs que quieran digitalizar su negocio, y a su vez, autoadministrar la página web en WordPress y subir contenidos.",
    diseño: "Personalización estándar",
    opcion1: "Hasta 8 Páginas internas",
    opcion2: "Sitio Autogestionable",
    opcion3: "Formulario de contacto",
    opcion4: "Capacitación básica para el uso del sitio web",
  },
  {
    id: 3,
    titulo: "Tienda Online para Emprendedores",
    descripcion:
      "Para aquellos que buscan establecer una tienda en línea con funcionalidad completa y fácil de usar.",
    precio: "$550.000",
    abono: "$45.000",
    descripcion1:
      "Es una página web con páginas internas y con plataforma para vender tus servicios/productos y generar ingresos sin comisiones.",
    diseño: "Personalización estándar",
    opcion1: "Hasta 8 Páginas internas",
    opcion2: "Elegí las formas de pago (Mercado Pago / Transferencia / Efectivo)",
    opcion3: "Formulario de contacto",
    opcion4: "Optimización SEO Básica para mejorar la visibilidad en motores de búsqueda.",
  },
  {
    id: 4,
    titulo: "Tienda Online Autogestionable",
    descripcion: "Para quienes quieren gestionar su tienda online con facilidad y autonomía total.",
    precio: "$690.000",
    abono: "$35.000",
    descripcion1:
      "Es una página web con páginas internas y con plataforma para vender tus servicios/productos y generar ingresos sin comisiones. Se recomienda para emprendedores y/o PyMEs que quieran digitalizar su negocio, y a su vez, autoadministrar la página web en WordPress y subir contenidos.",
    diseño: "Personalización estándar",
    opcion1: "Hasta 8 Páginas internas",
    opcion2: "Sitio Autogestionable",
    opcion3: "Formulario de contacto",
    opcion4: "Elegí las formas de pago (Mercado Pago / Transferencia / Efectivo)",
  },
];

const Promocion = () => {
  return (
    <section id="planes" className="planes">
      <div className="planes-container">
        <h2 className="planes-titulo">Planes de Diseño Web en Argentina</h2>
        <p className="planes-subtitulo">
          Elige el plan que mejor se adapte a las necesidades de tu negocio.
        </p>
        <div className="planes-lista">
          {promociones.map((promo) => (
            <div key={promo.id} className="plan-card">
              <div className="plan-icono">
                {promo.id === 1 && <FaLaptop className="icono" />}
                {promo.id === 2 && <FaTools className="icono" />}
                {promo.id === 3 && <FaShoppingCart className="icono" />}
                {promo.id === 4 && <FaEdit className="icono" />}
              </div>
              <h3 className="plan-titulo">{promo.titulo}</h3>
              <p className="plan-descripcion">{promo.descripcion}</p>
              <p className="plan-precio">{promo.precio}</p>
              <Link to={`/promocion/${promo.id}`} className="botonReserva">
                Más Información
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promocion;
