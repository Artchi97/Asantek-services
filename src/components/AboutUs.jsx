import "../styles/AboutUs.css";
import plumber from "../assets/plumber.webp";
import PropTypes from "prop-types";

export default function AboutUs({ id }) {
  return (
    <div className="about-us-container" id={id}>
      <h2 className="about-us-h2">O nas</h2>
      <p className="about-us-p">
        W naszej firmie łączymy wiedzę, doświadczenie i pasję do szybkiego
        rozwiązywania problemów hydraulicznych i elektrycznych. Niezależnie od
        skali awarii, jesteśmy gotowi, by działać natychmiast - w każdych
        warunkach. Zaufaj Nam - skutecznie poradzimy sobie z każdą awarią,
        przywracając komfort i bezpieczeństwo. Działamy bez zbędnej zwłoki, bo
        Twoje problemy to nasza priorytetowa sprawa!
      </p>

      <img className="plumber-img" loading="lazy" src={plumber} alt="plumber" />
    </div>
  );
}

AboutUs.propTypes = {
  id: PropTypes.string,
};
