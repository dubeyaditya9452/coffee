import React from "react";
import "./product.css";

const Product = () =>{
    return(
        <>
        <div className="heading">
            <h1>Our Menu</h1>
        </div>
        <div className="cart">
            <div className="cart-image">
                <img src= "https://github.com/rohitbhadane310/landing-pages/blob/main/coffee-web/src/assets/img/menu1.jpg?raw=true" height="300px"></img>
            
            <div className="content">
                <h3>Espresso</h3>
                <button>Hot</button>
                <button>Cold</button>

            </div>
            </div>
            <div className="cart-image">
                <img src= "https://github.com/rohitbhadane310/landing-pages/blob/main/coffee-web/src/assets/img/menu3.jpg?raw=true" height="300px"></img>
            
            <div className="content">
                <h3>Latte</h3>
                <button>Hot</button>
                <button>Cold</button>

            </div>
            </div>
            <div className="cart-image">
                <img src= "https://github.com/rohitbhadane310/landing-pages/blob/main/coffee-web/src/assets/img/menu2.jpg?raw=true" height="300px"></img>
            
            <div className="content">
                <h3>Cappuiccno</h3>
                <button>Hot</button>
                <button>Cold</button>

            </div>
            </div>
            <div className="cart-image">
                <img src= "https://github.com/rohitbhadane310/landing-pages/blob/main/coffee-web/src/assets/img/menu4.jpg?raw=true" height="300px"></img>
            
            <div className="content">
                <h3>Americano</h3>
                <button>Hot</button>
                <button>Cold</button>

            </div>
            </div>
            <div className="cart-image">
                <img src= "https://github.com/rohitbhadane310/landing-pages/blob/main/coffee-web/src/assets/img/menu6.jpg?raw=true" height="300px"></img>
            
            <div className="content">
                <h3>Doppio</h3>
                <button>Hot</button>
                <button>Cold</button>

            </div>
            </div>
            <div className="cart-image">
                <img src= "https://github.com/rohitbhadane310/landing-pages/blob/main/coffee-web/src/assets/img/menu5.jpg?raw=true" height="300px"></img>
            
            <div className="content">
                <h3>Macchiato</h3>
                <button>Hot</button>
                <button>Cold</button>

            </div>
            </div>
        </div>
        </>
    );
};

export default Product;