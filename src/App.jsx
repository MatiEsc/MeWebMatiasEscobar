import "./App.css";
import Contacto from "./componentes/Contacto/Contacto";
import Footer from "./componentes/Footer/Footer";
import NavBar from "./componentes/NavBar/NavBar";
import Portafolio from "./componentes/Portafolio/Portafolio";
import Responsive from "./componentes/Responisve/Responsive";
import Servicios from "./componentes/Servicios/Servicios";
import SobreMi from "./componentes/SobreMi/SobreMi";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <SobreMi />
        <Servicios />
        <Responsive />
        <Portafolio />
        <Contacto />
        <Footer />
      </div>
    </>
  );
}

export default App;
