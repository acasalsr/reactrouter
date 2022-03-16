import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div class="HolyGrail">
        <header>Exercicis React - Andreu Casals</header>
        <div class="HolyGrail-body">
          <main class="HolyGrail-content">
            <Outlet />
          </main>
          <nav class="HolyGrail-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/comptador">Comptador</Link>
              </li>
              <li>
                <Link to="/toggle">Toggle</Link>
              </li>
              <li>
                <Link to="/graella">Graella</Link>
              </li>
              <li>
                <Link to="/rellotge">Rellotge</Link>
              </li>
              <li>
                <Link to="/acordio">Acordio</Link>
              </li>
              <li>
                <Link to="/tres-en-ratlla">Tres en ratlla</Link>
              </li>
              <li>
                <Link to="/carrusel">Carrusel</Link>
              </li>
              <li>
                <Link to="/calculadora">Calculadora</Link>
              </li>
              <li>
                <Link to="/comptador-redux">Comptador Redux</Link>
              </li>
            </ul>
          </nav>
          <aside class="HolyGrail-ads">ads</aside>
        </div>
        <footer>I am the footer</footer>
      </div>
    </>
  );
}
