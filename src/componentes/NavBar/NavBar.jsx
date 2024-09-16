import { useState, useEffect } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const toggleButton = document.getElementById("_toggle");
    const itemsContainer = document.getElementById("_items");

    const handleToggleClick = () => {
      itemsContainer.classList.toggle("open");
      toggleButton.classList.toggle("close");
    };

    toggleButton.addEventListener("click", handleToggleClick);

    return () => {
      toggleButton.removeEventListener("click", handleToggleClick);
    };
  }, []);

  const handleClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <p className="info">Diseño Web - Landing Page - Ecommerce - WordPress - Marketing Digital </p>
      <nav id="navbar">
        <div className="logo-container">
          <a href="#home" className="logoLink" onClick={(e) => handleClick(e, "home")}>
            {isMobile ? (
              <img src="/img/logoMobile.webp" alt="Logo Mobile" className="logoMobile" />
            ) : (
              <img src="/img/logoMobile.webp" alt="Logo Desktop" className="logo" />
            )}
          </a>
        </div>
        <ul className={`nav_items ${menuVisible ? "open" : ""}`} id="_items">
          <li>
            <a href="#servicios" onClick={(e) => handleClick(e, "servicios")}>
              Servicios
            </a>
          </li>
          <li>
            <a href="#portafolio" onClick={(e) => handleClick(e, "portafolio")}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contacto" onClick={(e) => handleClick(e, "contacto")}>
              Contacto
            </a>
          </li>
        </ul>

        <div
          className={`nav_toggle ${menuVisible ? "close" : ""}`}
          id="_toggle"
          onClick={() => setMenuVisible(!menuVisible)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
