import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div class="HolyGrail">
        <header>Exercics React - Andreu Casals</header>
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
            </ul>
          </nav>
          <aside class="HolyGrail-ads">ads</aside>
        </div>
        <footer>I am the footer</footer>
      </div>
    </>
  );
}
