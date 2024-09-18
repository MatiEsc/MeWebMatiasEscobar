import React from "react";
import { useParams } from "react-router-dom";
import { promociones } from "../Promocion/Promocion"; // Ajusta esta importación según donde tengas los datos
import "./PromocionDetalle.css";
import {
  FaCheck,
  FaWhatsapp,
  FaServer,
  FaLock,
  FaChartLine,
  FaTools,
  FaHeadset,
} from "react-icons/fa";
import { SiMercadopago } from "react-icons/si";
import { FaMoneyBillTransfer } from "react-icons/fa6";

const PromocionDetalle = () => {
  const { id } = useParams();
  const promo = promociones.find((p) => p.id === parseInt(id));

  // Función para obtener la fecha actual en formato 'DD de MMMM de YYYY'
  const getFormattedDate = () => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date().toLocaleDateString("es-ES", options);
  };

  if (!promo) return <div>Promoción no encontrada</div>;

  return (
    <section className="promocion-detalle">
      <h2>{promo.titulo}</h2>
      <h3>{promo.descripcion1}</h3>
      <div className="detalles-container">
        <div className="detalle-izquierda">
          <div className="caracteristicas">
            <ul>
              <li>
                <FaCheck /> {promo.diseño}
              </li>
              <li>
                <FaCheck /> {promo.opcion1}
              </li>
              <li>
                <FaCheck /> {promo.opcion2}
              </li>
              <li>
                <FaCheck /> {promo.opcion3}
              </li>
              <li>
                <FaCheck /> {promo.opcion4}
              </li>
              <li>
                <FaCheck /> Contenido que quieras mostrar
              </li>
              <li>
                <FaCheck /> Botón de WhatsApp
              </li>
              <li>
                <FaCheck /> Enlace a Redes Sociales
              </li>
              <li>
                <FaCheck /> Optimización para todos los dispositivos
              </li>
              <li>
                <FaCheck /> Mail corporativo (ejemplo@marca.com.ar)
              </li>
              <li>
                <FaCheck /> Optimización para Google
              </li>
              <li>
                <FaCheck /> Certificación de Seguridad (SSL)
              </li>
            </ul>
            <p className="parrafoDetalle">
              ¿Necesitás algo más y no está en el listado? Consultame!
            </p>
          </div>
        </div>

        <div className="detalle-derecha">
          <div className="cuadro-inversion">
            <h3>Inversión Final</h3>
            <div className="info-inversion">
              <p>
                Desarrollo web <span>{promo.precio}</span>
              </p>
              <p>
                Abono mensual <span>{promo.abono}</span>
              </p>
              <p>
                Contratación de dominio y Hosting <span>Gratis por un año</span>
              </p>
            </div>
            <div className="medios-pago">
              <p>Medios de Pago:</p>
              <div className="logos-pago">
                <div className="logo">
                  <SiMercadopago />
                  <p> Mercado Pago</p>
                </div>
                <div className="logo">
                  <FaMoneyBillTransfer />
                  <p> Transferencia Bancaria/Depósito Bancario</p>
                </div>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/1234567890"
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> Contáctame por WhatsApp
          </a>
        </div>
      </div>
      <p className="parrafoFinal">Precios de Argentina actualizados al {getFormattedDate()}</p>

      <div className="abono-mensual">
        <h3>¿Qué incluye el abono mensual?</h3>
        <ul>
          <li>
            <FaServer className="icono-abono" />
            <strong>Hosting en Argentina: </strong> Alojamos tu página web para que esté 24/7
            activa.
          </li>
          <li>
            <FaChartLine className="icono-abono" />
            <strong>Monitoreo 24hs: </strong> Monitoreamos la página web las 24 hs, para prevenir
            posibles caídas o hackeos.
          </li>
          <li>
            <FaTools className="icono-abono" />
            <strong>Mantenimiento de sitio web: </strong> Actualizamos la página para mantener un
            rendimiento óptimo.
          </li>
          <li>
            <FaHeadset className="icono-abono" />
            <strong>Soporte Técnico: </strong> En caso que surja algún inconveniente técnico, lo
            resolveré.
          </li>
          <li>
            <FaLock className="icono-abono" />
            <strong>Seguridad del sitio web: </strong> Tu página web contará con certificación SSL y
            back-ups de respaldo.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PromocionDetalle;
