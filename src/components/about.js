import React from"react";
import "./about.css";
const About = ()=>{
    return(
        <>
         <div className="heading">
            <h1>About Us</h1>
        </div>
        <div className="abo">
            <div className="about-us">
                <img src="https://github.com/rohitbhadane310/landing-pages/blob/main/coffee-web/src/assets/img/about.jpg?raw=true" height="400px"></img>
            </div>
            <div className="content">
                <h2>What Makes Our Coffee Special?</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel facilis quos sit in adipisci deleniti, provident architecto voluptas accusantium libero quibusdam, delectus autem illo repellendus inventore aut accusamus facere reiciendis.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel doloremque sit et, cum fugit possimus eaque placeat totam. Sapiente recusandae blanditiis corporis nemo tempora at sequi, optio itaque porro impedit.</p>
                <button>Learn More</button>
            </div>
        </div>
        </>
    );
};

export default About;