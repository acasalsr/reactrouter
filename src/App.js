import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Comptador from "./pages/Comptador";
import Toggle from "./pages/Toggle";
import Graella from "./pages/Graella";
import Rellotge from "./pages/Rellotge";
import Acordio from "./pages/Acordio";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
