import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";

const SignIn = ({ signIn, uid }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        return;
      case "password":
        setPassword(e.target.value);
        return;
      default:
        return
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });    
  };

  // if (uid) return <Redirect to="/about" />;
  // else
    return (
      <div>
      <form
        className="container text border border-light p-5 mt-2 text-white"
        autoComplete="off"
        onSubmit={handleSubmit}
        style={{width: "50%", backgroundColor: "#0c2d1c"}}
      > 
      <h1 style={{alignContent: "center"}}>Virtual $tonks</h1>
        <label>
          <h4>Sign In</h4>
        </label>
        <div className="form-group">
          <label htmlFor="email">Email </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn" style={{backgroundColor: "#7289DA", color: "white"}}>
          Log In
        </button>

        <p className="m-1">New user ? <Link to="/">Sign Up!</Link></p>        
      </form>
      </div>
    );
};


export default SignIn;