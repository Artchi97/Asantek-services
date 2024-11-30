import "../styles/Contact.css";
import mail from "../assets/mail-icon.svg";
import phone from "../assets/phone-icon.svg";
import location from "../assets/location-icon.svg";
import PropTypes from "prop-types";

export default function Contact({ id }) {
  return (
    <div className="contact-container" id={id}>
      <h2 className="contact-h2">Kontakt</h2>
      <h3 className="contact-h3">
        Potrzebujesz pomocy hydraulicznej lub elektrycznej? Skontaktuj się z
        nami!
      </h3>
      <div className="contact-details">
        <div className="telmail-contact-container">
          <img src={phone} alt="phone icon" />
          <p>
            <a href="tel:+48451186146">+48 451 186 146</a>
          </p>
        </div>
        <div className="telmail-contact-container">
          <img src={mail} alt="mail icon" />
          <p>
            <a href="mailto:asantekuslugi@gmail.com">asantekuslugi@gmail.com</a>
          </p>
        </div>
      </div>
      <h3 className="contact-h3">Tu nas znajdziesz:</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.0199958472485!2d21.129157275396622!3d52.27933895402111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ece17a14ac331%3A0x51a7c1a5d4e6b819!2zUG93c3RhxYRjw7N3IDYwLzEwMywgMDUtMDkxIFrEhWJraQ!5e0!3m2!1spl!2spl!4v1732878732709!5m2!1spl!2spl"
        className="google-map"
        loading="lazy"
      ></iframe>
      <div className="contact-details">
        <div className="telmail-contact-container">
          <img src={location} alt="location icon" />
          <p>05-091 Ząbki, ul Powstańców 60/103</p>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  id: PropTypes.string,
};
