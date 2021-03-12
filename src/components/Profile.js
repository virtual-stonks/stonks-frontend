import React from "react";
import avatar from "../assets/images/avatar.jpg";

let crypto = 220;
let INR = 147;
let USD = 233;

export function Profile(props) {
  return (
    <div className="bg-dark">
      <div className="jumbotron text-light bg-dark" style={{ height: "100vh" }}>
        <img
          src={avatar}
          alt="Failed to load"
          style={{
            verticalAlign: "left",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
          }}></img>
        <h1 className="display-4 pt-3">Varun Das</h1>
        <hr className="my-4" />
        <h3 className="font-weight-light pt-3">Account Details</h3>
        <div className="container text-left">
          <h4 className="font-weight-light pt-5">
            Username : <span className="pl-3">veedee2000</span>
          </h4>
          <h4 className="font-weight-light pt-4">
            Email : <span className="pl-3">dummy@gmail.com</span>
          </h4>
          <h4 className="font-weight-light pt-4">
            Password : <span className="pl-3">helloStonks</span>
          </h4>
          <h4 className="font-weight-light pt-4">
            Wallet Balance :-
            <div
              className="container row"
              style={{
                margin: "10px 20px 10px 250px",
                padding: "5px 20px 5px 20px",
              }}>
              <div className="col">CryptoCurrency</div>
              <div className="col">INR</div>
              <div className="col">USD</div>
              <div className="w-100"></div>
              <div className="col pt-3">{crypto}</div>
              <div className="col pt-3">{INR}</div>
              <div className="col pt-3">{USD}</div>
            </div>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Profile;
