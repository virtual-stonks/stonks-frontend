import { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Signin() {
  const emailRef = useRef();
  const passwordRef = useRef();  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setError('');
    setLoading(true);

    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);

    setLoading(false);
  }

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ minHeight: '70vh' }}
    >
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Log In</h2>
        {error && (
          <div class="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
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
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
