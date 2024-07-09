import "../styles/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="border-top">
        <div className="col-md-4">
          <p className="m-0 text-white">© 2024 Bits & Bots</p>
        </div>

        <ul className="nav col-md-4 list-unstyled">
          <li className="linkedin">
            <a aria-label="Twitter">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </li>
          <li className="ms-4 instagram">
            <a aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </li>
          <li className="ms-4 facebook">
            <a aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
