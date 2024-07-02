import "../styles/Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container p-5">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-5 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <p className="m-0 text-white">© 2024 Bits & Bots</p>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a href="/">
              <svg
                className="bi"
                width="24"
                height="24"
                alt="Twitter-logo"
                aria-label="Twitter"
                fill="white"
              >
                <use xlinkHref="#twitter"></use>
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a href="/">
              <svg
                className="bi"
                width="24"
                height="24"
                alt="Instagram-logo"
                aria-label="Instagram"
                fill="white"
              >
                <use xlinkHref="#instagram"></use>
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a href="/">
              <svg
                className="bi"
                width="24"
                height="24"
                alt="Facebook-logo"
                aria-label="Facebook"
                fill="white"
              >
                <use xlinkHref="#facebook"></use>
              </svg>
            </a>
          </li>
        </ul>
      </footer>

      {/* Include SVG symbols for Bootstrap, Twitter, Instagram, and Facebook */}
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol id="bootstrap" viewBox="0 0 16 16">
          <path d="M5.062 3.296h2.47c.889 0 1.357.413 1.357 1.136 0 .682-.51 1.136-1.357 1.136H5.063V3.296zm0 4.636h2.56c.995 0 1.494.44 1.494 1.23 0 .812-.594 1.23-1.494 1.23H5.062V7.932zM0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4.062 1v12h4.397c2.244 0 3.541-1.166 3.541-3.06 0-1.407-.862-2.416-2.116-2.623v-.083c1.165-.234 1.86-1.02 1.86-2.21C11.744 3.26 10.327 2 8.26 2H4.062z" />
        </symbol>
        <symbol id="twitter" viewBox="0 0 16 16">
          <path d="M5.026 15c6.038 0 9.341-5 9.341-9.334v-.422A6.68 6.68 0 0 0 16 3.542a6.56 6.56 0 0 1-1.889.518 3.301 3.301 0 0 0 1.443-1.817 6.533 6.533 0 0 1-2.084.794A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.766-3.429 3.289 3.289 0 0 0 1.017 4.384A3.323 3.323 0 0 1 .64 6.575v.041a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.615-.057 3.283 3.283 0 0 0 3.067 2.281A6.588 6.588 0 0 1 0 13.026 9.29 9.29 0 0 0 5.026 15z" />
        </symbol>
        <symbol id="instagram" viewBox="0 0 16 16">
          <path d="M8 0C5.745 0 5.486.01 4.675.05 3.865.09 3.27.215 2.765.42a5.37 5.37 0 0 0-1.95 1.27A5.37 5.37 0 0 0 .42 3.94c-.205.505-.33 1.1-.37 1.91C0 6.665 0 6.925 0 9.18c0 2.255.01 2.515.05 3.325.04.81.165 1.405.37 1.91.205.505.48.96.83 1.35a5.37 5.37 0 0 0 1.27 1.95c.39.35.845.625 1.35.83.505.205 1.1.33 1.91.37.81.04 1.07.05 3.325.05s2.515-.01 3.325-.05c.81-.04 1.405-.165 1.91-.37.505-.205.96-.48 1.35-.83a5.37 5.37 0 0 0 1.95-1.27c.35-.39.625-.845.83-1.35.205-.505.33-1.1.37-1.91.04-.81.05-1.07.05-3.325s-.01-2.515-.05-3.325c-.04-.81-.165-1.405-.37-1.91a5.37 5.37 0 0 0-1.27-1.95 5.37 5.37 0 0 0-1.35-.83c-.505-.205-1.1-.33-1.91-.37C10.515.01 10.255 0 8 0zm0 1.46c2.2 0 2.45.01 3.3.05.8.04 1.24.175 1.53.29.39.15.665.33.96.62.29.295.47.57.62.96.115.29.25.73.29 1.53.04.85.05 1.1.05 3.3s-.01 2.45-.05 3.3c-.04.8-.175 1.24-.29 1.53-.15.39-.33.665-.62.96-.295.29-.57.47-.96.62-.29.115-.73.25-1.53.29-.85.04-1.1.05-3.3.05s-2.45-.01-3.3-.05c-.8-.04-1.24-.175-1.53-.29a3.545 3.545 0 0 1-.96-.62 3.545 3.545 0 0 1-.62-.96c-.115-.29-.25-.73-.29-1.53-.04-.85-.05-1.1-.05-3.3s.01-2.45.05-3.3c.04-.8.175-1.24.29-1.53.15-.39.33-.665.62-.96.295-.29.57-.47.96-.62.29-.115.73-.25 1.53-.29.85-.04 1.1-.05 3.3-.05zm0 2.55a4.1 4.1 0 1 0 0 8.2 4.1 4.1 0 0 0 0-8.2zm0 1.45a2.65 2.65 0 1 1 0 5.3 2.65 2.65 0 0 1 0-5.3zm5.2-.84a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
        </symbol>
        <symbol id="facebook" viewBox="0 0 16 16">
          <path d="M12.82 0H3.18A3.18 3.18 0 0 0 0 3.18v9.64A3.18 3.18 0 0 0 3.18 16h5.19V9.8H6.15V7.56h2.22V5.91c0-2.2 1.33-3.4 3.29-3.4.938 0 1.749.07 1.985.1v2.3h-1.36c-1.07 0-1.276.507-1.276 1.253v1.64h2.55l-.33 2.24h-2.22V16h4.35A3.18 3.18 0 0 0 16 12.82V3.18A3.18 3.18 0 0 0 12.82 0z" />
        </symbol>
      </svg>
    </div>
  );
};

export default Footer;
