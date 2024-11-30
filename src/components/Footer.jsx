import "../styles/Footer.css";
import mail from "../assets/mail-icon-footer.svg";
import phone from "../assets/phone-icon-footer.svg";

export default function Footer() {
  return (
    <footer>
      <div>
        <h2 className="asantek-h2">ASANTEK USŁUGI</h2>
        <p>Pogotowe hydrauliczne i elektryczne</p>
        <h3>Godziny otwarcia:</h3>
        <p>Pon - So 6:00 - 20:00</p>
      </div>
      <div className="contact-details">
        <div className="telmail-contact-container">
          <img src={phone} alt="phone icon" />
          <p>
            <a className="footer-a" href="tel:+48451186146">
              +48 451 186 146
            </a>
          </p>
        </div>
        <div className="telmail-contact-container">
          <img src={mail} alt="mail icon" />
          <p>
            <a className="footer-a" href="mailto:asantekuslugi@gmail.com">
              asantekuslugi@gmail.com
            </a>
          </p>
        </div>
      </div>
      <p className="all-rights-reserved">
        &copy; Copyright 2024 - all rights reserved
      </p>
    </footer>
  );
}
