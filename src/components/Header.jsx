import "../styles/Header.css";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <header>
      <h1>ASANTEK USŁUGI</h1>
      <p>Pogotowie hydrauliczne i elektryczne</p>

      <nav>
        <ul className="nav-ul">
          <Link to="about-us" smooth={true} duration={500}>
            <li>O nas</li>
          </Link>
          <Link to="services" smooth={true} duration={500}>
            <li>Usługi</li>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <li>Kontakt</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
