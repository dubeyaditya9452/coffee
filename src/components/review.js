import React from "react";
import "./review.css";

const Review = () => {
  return (
    <>
    <section className="review">
      <div className="heading">
        <h1>Customer's Review</h1>
      </div>
      <div className="cart">
        <div className="cart-image">
          <img
            src="https://github.com/rohitbhadane310/landing-pages/blob/main/coffee-web/src/assets/img/pic3.png?raw=true"
            height="300px"
            alt="Espresso"
          />
          <div className="content">
          <h3>Sofia Zeo</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit enim delectus perspiciatis voluptatum aliquam placeat voluptates ipsum iure sunt, animi modi corrupti magnam. Hic sit soluta magnam exercitationem animi? Cupiditate.</p>
          </div>
        </div>

        <div className="cart-image">
          <img
            src="https://github.com/rohitbhadane310/landing-pages/blob/main/coffee-web/src/assets/img/pic2.png?raw=true"
            height="300px"
            
          />
          <div className="content">
            <h3>John Deo</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit enim delectus perspiciatis voluptatum aliquam placeat voluptates ipsum iure sunt, animi modi corrupti magnam. Hic sit soluta magnam exercitationem animi? Cupiditate.</p>
          </div>
        </div>

        <div className="cart-image">
          <img
            src="https://github.com/rohitbhadane310/landing-pages/blob/main/coffee-web/src/assets/img/pic1.png?raw=true"
            height="300px"
            alt="Espresso"
          />
          <div className="content">
          <h3>Olivia Ava</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit enim delectus perspiciatis voluptatum aliquam placeat voluptates ipsum iure sunt, animi modi corrupti magnam. Hic sit soluta magnam exercitationem animi? Cupiditate.</p>
          </div>
          </div>
        </div>
        </section>  
    </>
  );
};

export default Review;
