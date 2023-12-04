import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h2>Coffee.co</h2>
        
       
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque ea soluta maxime eius voluptatem accusantium neque architecto perspiciatis, dignissimos iusto quas exercitationem </p>
      </div>
      <div className="footer-column">
        <h2>Links</h2>
        
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Blog</a>
      </div>
      
      <div className="footer-column">
        <h2>Menu</h2>  
        <a href="#">Macchiato</a>
        <a href="#">Doppio</a>
        <a href="#">Americano</a>
      </div>
      <div className="footer-column">
        <h2>Contact</h2>
        <p>980032555</p>
        <p>Coffee.co@gmail.com</p>
        
      </div>
      
    </footer>
   
  );
};

export default Footer;
