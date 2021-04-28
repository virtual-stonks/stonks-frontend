import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setLoading(true);

    // console.log(nameRef.current.value);
    // console.log(emailRef.current.value);
    // console.log(passwordRef.current.value);

    try {

      await axios
        .post("http://localhost:5000/api/user/signup", {
          name: nameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
        .then(
          result => {
            localStorage.setItem("auth-token", result.data.token);
            // console.log(result);
            // history.push('/');
          }
        );
    } catch (err) { err.response.data.message && setError(err.response.data.message) }


    setLoading(false);
  }

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ minHeight: "70vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Sign Up</h2>
        {error && (
          <div class="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group text-left">
            <label for="name">Full Name</label>
            <input
              type="name"
              className="form-control"
              id="name"
              placeholder="Enter Full Name"
              ref={nameRef}
              required
            />
          </div>
          <div className="form-group text-left">
            <label for="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              ref={emailRef}
              required
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group text-left">
            <label for="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              ref={passwordRef}
              required
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button disabled={loading} type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Sign In</Link>
        </div>
      </div>
    </div>
  );
}
