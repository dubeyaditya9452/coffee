import React from "react";
import "./signup.css";
const SignUp = () => {
    return (
      <>
        <section className="signup">
          <div class="container">
            <form id="signupForm" action="#">
              <h2>Signup</h2>
              <label for="username">Username</label>
              <input type="text" id="username" name="username" required />
        
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required />
        
              <label for="password">Password</label>
              <input type="password" id="password" name="password" required />
        
              <button type="submit">Signup</button>
            </form>
          </div>
        </section>
      </>
    );
  };
  
  export default SignUp;
  