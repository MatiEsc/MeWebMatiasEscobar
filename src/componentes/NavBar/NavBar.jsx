import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    if (window.location.pathname === "/" && targetId) {
      event.preventDefault();
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <>
      <p className="info">Diseño Web - Landing Page - Ecommerce - WordPress - Marketing Digital</p>
      <nav id="navbar">
        <div className="logo-container">
          <Link to="/" className="logoLink" onClick={(e) => handleClick(e, "home")}>
            {isMobile ? (
              <img src="/img/logoMobile.webp" alt="Logo Mobile" className="logoMobile" />
            ) : (
              <img src="/img/logoMobile.webp" alt="Logo Desktop" className="logo" />
            )}
          </Link>
        </div>
        <ul className={`nav_items ${menuVisible ? "open" : ""}`} id="_items">
          <li>
            <Link to="/" onClick={(e) => handleClick(e, "servicios")}>
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/" onClick={(e) => handleClick(e, "planes")}>
              Planes
            </Link>
          </li>
          <li>
            <Link to="/" onClick={(e) => handleClick(e, "proyectos")}>
              Proyectos
            </Link>
          </li>
          <li>
            <Link to="/" onClick={(e) => handleClick(e, "contacto")}>
              Contacto
            </Link>
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
