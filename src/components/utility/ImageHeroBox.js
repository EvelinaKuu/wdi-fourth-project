import React from 'react';

const ImageHeroBox = () => {
  return (
    <section className="hero" style={{ backgroundImage: 'url("../assets/images/hero.jpg")'}}>
      <div className="hero-body">
        <div className="container is-widescreen">
          <h1 className="title">
            Pre-loved - West London
          </h1>
          <h2 className="subtitle">
            Pre-loved fashion pieces for sale in West London
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ImageHeroBox;
