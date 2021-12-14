import React from "react";

import "./style.css";
import Footer from "../Footer/Footer";

const Landing = () => {
  return (
    <section className="landing-container text-light">
      <div className="container home-container">
        <h1>Emaily</h1>
        <h3>Receive feedback to grow your business</h3>
        <p>
          Collect feedback from your users by e-mail to improve your products
          and services
        </p>
      </div>
      <Footer />
    </section>
  );
};

export default Landing;
