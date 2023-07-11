import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            doloremque aliquid, earum magni incidunt, provident, repudiandae
            reprehenderit nobis minus vel temporibus odio omnis laboriosam sit
            dolor eum nesciunt. Velit, est!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
