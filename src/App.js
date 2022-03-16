import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Comptador from "./pages/Comptador";
import Toggle from "./pages/Toggle";
import Graella from "./pages/Graella";
import Rellotge from "./pages/Rellotge";
import Acordio from "./pages/Acordio";
import TresEnRatall from "./pages/TresEnRatlla";
import Carrusel from "./pages/Carrusel";
import Calculadora from "./pages/Calculadora";

export default function App() {
  return (
    <BrowserRouter basename="/reactrouter">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="comptador" element={<Comptador />} />
          <Route path="toggle" element={<Toggle />} />
          <Route path="graella" element={<Graella />} />
          <Route path="rellotge" element={<Rellotge />} />
          <Route path="acordio" element={<Acordio />} />
          <Route path="tres-en-ratlla" element={<TresEnRatall />} />
          <Route path="carrusel" element={<Carrusel />} />
          <Route path="calculadora" element={<Calculadora />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
