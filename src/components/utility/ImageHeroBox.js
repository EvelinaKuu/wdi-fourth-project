import React from 'react';

const ImageHeroBox = () => {
  return (
    <section className="hero" style={{ backgroundImage: 'url("../assets/images/hero.jpg")'}}>
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1 herotitle">
            Pre-loved
          </h1>
          <h2 className="subtitle is-3 herotitle">
            Pre-loved fashion items for sale in West London
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ImageHeroBox;
