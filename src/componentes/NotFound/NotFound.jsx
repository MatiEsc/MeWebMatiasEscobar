// src/componentes/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Página No Encontrada</h2>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <Link to="/" className="home-link">
        Volver a la Página Principal
      </Link>
    </div>
  );
};

export default NotFound;
