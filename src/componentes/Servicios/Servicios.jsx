import { useInView } from "react-intersection-observer";
import "animate.css";
import { FaDesktop, FaCogs, FaSearch } from "react-icons/fa";

import "./Servicios.css";

function Servicios() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="servicios" className="servicios">
      <div className="servicios-container">
        <h2 className="servicios-titulo h2Servicios">Servicios</h2>
        <div className="servicios-lista">
          <div
            ref={ref}
            className={`servicio ${inView ? "animate__animated animate__slideInLeft" : ""}`}
          >
            <div className="servicio-icono">
              <FaDesktop className="icono" />
            </div>
            <h3 className="servicio-titulo">Diseño Web Personalizado</h3>
            <p className="servicio-descripcion">
              ¿Buscas una presencia online que realmente refleje tu marca? Nuestro servicio de
              <strong> diseño web personalizado</strong> se enfoca en entender tus objetivos y crear
              un sitio web que no solo sea estéticamente atractivo, sino también funcional y
              alineado con tu identidad. Desde el concepto inicial hasta el lanzamiento, cada
              aspecto de tu sitio será diseñado para <strong>atraer a tu audiencia</strong> y
              convertir visitantes en clientes. Aprovecha las últimas tecnologías y tendencias en
              diseño para destacarte en el mercado digital.
            </p>
          </div>
          <div className={`servicio ${inView ? "animate__animated animate__slideInRight" : ""}`}>
            <div className="servicio-icono">
              <FaCogs className="icono" />
            </div>
            <h3 className="servicio-titulo">Mantenimiento Técnico Continuo</h3>
            <p className="servicio-descripcion">
              Mantener tu sitio web en perfecto estado es crucial para asegurar una experiencia de
              usuario fluida y segura. Con nuestro servicio de{" "}
              <strong>mantenimiento técnico continuo</strong>, te ofrecemos{" "}
              <strong>actualizaciones regulares</strong>, corrección de errores y mejoras
              constantes. Nos encargamos de todos los aspectos técnicos para que puedas concentrarte
              en <strong>hacer crecer tu negocio</strong>. Confía en nosotros para mantener tu sitio
              web actualizado y optimizado, protegiendo tu inversión a largo plazo.
            </p>
          </div>
          <div className={`servicio ${inView ? "animate__animated animate__slideInUp" : ""}`}>
            <div className="servicio-icono">
              <FaSearch className="icono" />
            </div>
            <h3 className="servicio-titulo">Optimización SEO Avanzada</h3>
            <p className="servicio-descripcion">
              ¿Quieres que tu sitio web sea encontrado por tus clientes potenciales? Nuestro
              servicio de <strong>optimización SEO avanzada</strong> está diseñado para mejorar tu
              visibilidad en los motores de búsqueda y atraer tráfico orgánico de alta calidad.
              Implementamos estrategias SEO basadas en <strong>análisis de palabras clave</strong>,
              <strong> optimización de contenido</strong> y{" "}
              <strong>técnicas de link building</strong>. Cada paso está enfocado en{" "}
              <strong>posicionar tu sitio en los primeros resultados</strong>
              de búsqueda, asegurando que tu negocio se destaque y llegue a quienes buscan tus
              servicios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servicios;
