import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () =>{
  
  return(
    <>
    <nav>
        <label for="" class="logo">Coffee.co</label>
        
        <ul>
            <li><a href='#' >Home</a></li>
            <li><a href='#' >Product</a></li>
            <li><a href='#' >Blog</a></li>
            <li><a href="./signup" className='button'>Sign Up</a></li>
            
        </ul>

    </nav>
    </>
  );
};

export default Navbar;