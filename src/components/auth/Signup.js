import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useHistory, Link } from "react-router-dom";
import { Alert } from 'reactstrap';

import AuthApi from "../api/AuthApi"

const Signup = ({isAuth, setIsAuth}) => {  
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  let history = useHistory();

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
    console.log({ name, email, password });

    AuthApi.signUpUser({ name, email, password })
      .then((res) => {
        console.log(res.data);
        const token = res.data.token;
        localStorage.setItem('token', token);
        setIsAuth(true);
        history.push(history.push(
          {
            pathname: `/dashboard`,
          }
        ));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
          setErrors([...err.response.data.errors]);
        } else {
          setErrors([err.message])
        }
      });
  };

    
  return (
    <>
      <div className="container" style={{ width: "50%" }}>
        {errors.length > 0 && errors.map((err, idx) => {          
          return <Alert key={idx} color="danger" className="mt-1">
            {err.msg}
          </Alert>
        })}
      </div>
      <form
        className="container text border border-light p-5 mt-2 text-white"
        autoComplete="off"
        onSubmit={handleSubmit}
        style={{ width: "50%", backgroundColor: "#0c2d1c" }}
      >
        
          <h1 style={{alignContent: "center"}}>Virtual Stonks</h1>
        
        <label>
          <h4>Sign Up</h4>
        </label>
        <div className="form-group">
          <label htmlFor="name">Username </label>
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
        <button type="submit" className="btn btn-dark" style={{ backgroundColor: "#7289DA", color: "white" }}>
          Register
        </button>        
          <p className="m-1">Already a user ? <Link to="/login">Sign In!</Link></p>        
      </form>
    </>
  );
};


export default Signup;