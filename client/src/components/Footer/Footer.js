import React from "react";

import "./style.css";

const Footer = () => {
  return (
    <section className="footer-container text-light">
      <div className="container text-container">
        <p>
          Developed by{" "}
          <a
            className="links text-warning fw-bold"
            href="https://lucas-andrade.com/"
          >
            Lucas Andrade
          </a>
        </p>
        <p>
          Background customized at{" "}
          <a
            className="links text-warning fw-bold"
            href="https://www.svgbackgrounds.com/"
          >
            SVGBackgrounds.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
