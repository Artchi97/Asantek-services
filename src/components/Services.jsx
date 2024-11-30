import "../styles/Services.css";
import icon from "../assets/repair-svgrepo-com (1).svg";
import serviceImg from "../assets/service-img.webp";
import PropTypes from "prop-types";

export default function Services({ id }) {
  const services = [
    "Usuwanie awarii hydraulicznych",
    "Montaż armatury sanitarnej, intalacji wodno-kanalizacyjnych oraz systemów grzewczych",
    "Montaż urządzeń AGD",
    "Przepychanie i czyszczenie kanalizacji",
    "Modernizacja instniejących instalacji wodnych i grzewczych",
    "Naprawa pękniętych rur",
    "Usuwanie wycieków i przecieków w instalacjach wodnych",
    "Odpowietrzanie instalacji grzewczych",
    "Naprawa zapchanych odpływów i rur kanalizacyjnych",
    "Wymiana uszkodzonych zaworów, uszczelek i innych elementów instalacji",
    "Usuwanie awarii elektrycznej w domach i mieszkaniach",
    "Naprawa i wymiana pieca gazowego",
  ];

  return (
    <div className="services-container" id={id}>
      <h2 className="services-h2">Usługi</h2>
      <p className="services-p">
        W naszym pogotowiu hydraulicznym i elektrycznym stawiamy na szybkość,
        skuteczność i pełne bezpieczeństwo.
      </p>
      <p className="services-header">Nasze usługi:</p>
      <ul className="service-items">
        {" "}
        {services.map((service, index) => (
          <li key={index}>
            <img src={icon} alt="repair icon" />
            {service}
          </li>
        ))}
      </ul>
      <img
        className="service-img"
        loading="lazy"
        src={serviceImg}
        alt="hydraulical service"
      />
    </div>
  );
}

Services.propTypes = {
  id: PropTypes.string,
};
