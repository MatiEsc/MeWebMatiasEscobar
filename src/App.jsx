// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contacto from "./componentes/Contacto/Contacto";
import PreguntasFrecuentes from "./componentes/PreguntasFrecuentes/PreguntasFrecuentes";
import Footer from "./componentes/Footer/Footer";
import NavBar from "./componentes/NavBar/NavBar";
import Portafolio from "./componentes/Portafolio/Portafolio";
import Responsive from "./componentes/Responisve/Responsive";
import Servicios from "./componentes/Servicios/Servicios";
import SobreMi from "./componentes/SobreMi/SobreMi";
import Promocion from "./componentes/Promocion/Promocion";
import PromocionDetalle from "./componentes/PromocionDetalle/PromocionDetalle";
import NotFound from "./componentes/NotFound/NotFound";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/promocion/:id" element={<PromocionDetalle />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/responsive" element={<Responsive />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function Home() {
  return (
    <>
      <SobreMi />
      <Servicios />
      <Responsive />
      <Promocion />
      <Portafolio />
      <PreguntasFrecuentes />
      <Contacto />
    </>
  );
}

export default App;
