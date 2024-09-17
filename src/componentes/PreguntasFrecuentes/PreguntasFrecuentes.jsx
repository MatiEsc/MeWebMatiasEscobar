import React, { useState } from "react";
import "./PreguntasFrecuentes.css"; // Asegúrate de crear este archivo CSS

const PreguntasFrecuentes = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const openWhatsAppChat = (message) => {
    const phoneNumber = "1167626764"; // Número de teléfono en formato internacional sin el signo +
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  const faqs = [
    {
      question: "¿Qué servicios ofreces en ME-WEB?",
      answer:
        "Ofrezco diseño web personalizado, desarrollo y mantenimiento de sitios web, eCommerce, optimización SEO y soporte técnico. Trabajo con plataformas como WordPress y ReactJS.",
    },
    {
      question: "¿Cómo puedo solicitar un presupuesto para un proyecto?",
      answer: (
        <div>
          Para solicitar un presupuesto, puedes completar el formulario en la sección de Contacto de
          nuestro sitio web, o enviarnos un mensaje haciendo clic{" "}
          <button
            className="link-consulta"
            onClick={() =>
              openWhatsAppChat(
                "Hola, estoy interesado en solicitar un presupuesto. Por favor, contáctenme con más detalles."
              )
            }
          >
            aquí
          </button>
          .
        </div>
      ),
    },
    {
      question: "¿Cuánto tiempo lleva completar un proyecto web?",
      answer:
        "El tiempo de entrega varía según la complejidad del proyecto. Generalmente, los proyectos simples toman entre 2 a 4 semanas, y los más complejos entre 1 a 3 meses.",
    },
    {
      question: "¿Ofrecen soporte técnico después de que el sitio esté en vivo?",
      answer:
        "Sí, ofrecemos soporte técnico continuo. Puedes contratar nuestros servicios de mantenimiento técnico para actualizaciones, corrección de errores y mejoras.",
    },
    {
      question: "¿Puedo cambiar el contenido de mi sitio web después de que esté terminado?",
      answer:
        "Sí, puedes cambiar el contenido de tu sitio web. Te proporcionamos acceso al panel de administración o podemos hacer los cambios por ti según el servicio contratado.",
    },
    {
      question: "¿Qué plataformas utilizas para desarrollar sitios web?",
      answer:
        "Utilizo WordPress, ReactJS y soluciones de eCommerce como Shopify o WooCommerce, dependiendo de las necesidades del proyecto.",
    },
    {
      question: "¿Cómo puedo hacer un seguimiento del progreso de mi proyecto?",
      answer:
        "Te mantendremos informado con actualizaciones periódicas por correo electrónico o reuniones. También puedes contactarnos en cualquier momento para obtener un estado actualizado.",
    },
    {
      question: "¿Cuál es el costo de tus servicios?",
      answer:
        "El costo varía según el tipo y la complejidad del servicio. Ofrecemos paquetes y opciones personalizadas. Contáctanos para una cotización específica.",
    },
    {
      question: "¿Qué hago si tengo problemas con mi sitio web?",
      answer: (
        <div>
          Si tienes problemas, puedes enviarnos un mensaje a través de nuestra sección de Contacto o
          haciendo clic{" "}
          <button
            className="link-consulta"
            onClick={() =>
              openWhatsAppChat(
                "Hola, tengo un problema con mi sitio web. Por favor, ayúdame a resolverlo."
              )
            }
          >
            aquí
          </button>
          .
        </div>
      ),
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faq" className="faq">
      <h2 className="faq-title">Preguntas Frecuentes</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => handleToggle(index)}>
              <h3>{faq.question}</h3>
              <span className="faq-toggle">{activeIndex === index ? "-" : "+"}</span>
            </div>
            <div className={`faq-answer ${activeIndex === index ? "open" : ""}`}>{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreguntasFrecuentes;
