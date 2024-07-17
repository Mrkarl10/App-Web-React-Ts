//import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Componentes/Navegacion/NavBar';
import Inicio from './Componentes/Paginas/index';
import Diseños from './Componentes/Paginas/diseños';
import Formulario from './Componentes/Paginas/contacto';
import Shop from './Componentes/Paginas/shop';
import './shp.css'
import './contacto.css'; // Importa tu archivo CSS aquí


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/diseños" element={<Diseños />} />
          <Route path="/compra" element={<Shop />} />
          <Route path="/contacto" element={<Formulario />} />
        </Routes>
      </div>
    </Router>
    






  );
};




export default App;

