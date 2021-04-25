import React, { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import avatar from "../assets/images/avatar.jpg";
import UserApi from "./api/UserApi"
import { getUserName }  from "./utils/getUserName"

let crypto = 220;
let INR = 147;
let USD = 233;

const Profile = () =>  {

  const [userdata, setUserdata] = useState();
  
  useEffect(() => {
    UserApi.getUserDetails()
        .then((res) => {
            console.log(res.data);
            setUserdata(res.data)            
        })
        .catch((err) => console.log(err));
  }, [])

  if(userdata)
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
        <h1 className="display-4 pt-3 text-warning">{userdata.name}</h1>        
        <h3 className="font-weight-light pt-3">Account Details</h3>
        <div className="container text-left">
          <h4 className="font-weight-light pt-5">
            Username : <span className="pl-3 text-warning"> {getUserName(userdata.name)} </span>
          </h4>
          <h4 className="font-weight-light pt-4">
            Email : <span className="pl-3 text-warning">{userdata.email}</span>
          </h4>
          <h4 className="font-weight-light pt-4">
            Password : <span className="pl-3 text-warning">************</span>
          </h4>
          <h4 className="font-weight-light pt-4">
            Wallet Balance :-
            <span className="pl-3 text-warning">$ {userdata.wallet.toFixed(2)} coins</span>
          </h4>
          <h4 className="font-weight-light pt-4">
            Holdings:
            <span className="pl-3 text-warning">{userdata.stocksBucket.length} cryptos</span>
          </h4>
        </div>
      </div>
    </div>
  );
  else
      return <Spinner />
}

export default Profile;
