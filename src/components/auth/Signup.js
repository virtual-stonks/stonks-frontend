import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Signup = ({ signUp, uid }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    switch (e.target.id) {
      case "name":
        setName(e.target.value);
        return;
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
    // console.log({ email, password });
    signUp({ email, password });
  };

//   if (uid) return <Redirect to="/about" />;
//   else
    return (
      <form
        className="container text border border-light p-5 mt-2 text-white"
        autoComplete="off"
        onSubmit={handleSubmit}
        style={{width: "50%", backgroundColor: "#0c2d1c"}}
      >
        <label>
          <h4>Sign Up</h4>
        </label>
        <div className="form-group">
          <label htmlFor="name">Name </label>
          <input
            type="name"
            className="form-control"
            id="name"
            value={name}
            onChange={handleChange}
          />
        </div>
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
        <button type="submit" className="btn btn-dark" style={{backgroundColor: "#7289DA", color: "white"}}>
          Register
        </button>
      </form>
    );
};


export default Signup;