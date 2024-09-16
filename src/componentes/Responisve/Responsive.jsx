import { useInView } from "react-intersection-observer";
import "animate.css";
import "./Responsive.css";

const Responsive = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="fondoResponsive">
      <div ref={ref} className={`texto ${inView ? "animate__animated animate__slideInLeft" : ""}`}>
        <h2>Diseños totalmente responsive</h2>
        <h3>Adaptable a todo tipo de dispositivos</h3>
        <p>
          Descubre la versatilidad de nuestros diseños que se adaptan perfectamente a cualquier
          dispositivo.
        </p>
      </div>
      <div className={`imagen ${inView ? "animate__animated animate__slideInRight" : ""}`}>
        <img src="/img/responsive.webp" alt="diseño responsive" />
      </div>
    </div>
  );
};

export default Responsive;
