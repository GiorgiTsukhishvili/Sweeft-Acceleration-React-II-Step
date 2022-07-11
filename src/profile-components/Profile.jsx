import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Profile.css";
import Friends from "./Friends";
import PreviousUsers from "./PreviousUsers";

function Profile() {
  const [user, setUser] = useState([]);
  const [userAdress, setUserAdress] = useState([]);

  const params = useParams();

  useEffect(() => {
    async function getData() {
      const data = await axios.get(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${params.userId}`
      );

      setUser(data.data);
      setUserAdress(data.data.address);
    }

    getData();
  }, [params.userId]);

  return (
    <div className="profile-main-div">
      <div className="main-header">
        <img src={user.imageUrl} alt={user.title} />
        <div className="left-info">
          <span>Info</span>
          <div className="left-info-top">
            <strong>
              {user.prefix} {user.name} {user.lastName}
            </strong>
            <i>{user.title}</i>
          </div>
          <div className="left-top-bottom">
            <p>
              <u>Email</u>: {user.email}
            </p>
            <p>
              <u>Ip Address</u>: {user.ip}
            </p>
            <p>
              <u>Ip Address</u>: {user.ip}
            </p>
            <p>
              <u>Job Area</u>: {user.jobArea}
            </p>
            <p>
              <u>Job Type</u>: {user.jobType}
            </p>
          </div>
        </div>
        <div className="right-info">
          <span>Adress</span>
          <div className="right-info-top">
            <strong>Stokes, Hermann and Hackett and Sons</strong>
          </div>
          <p>
            <u>City</u>: {userAdress.city}
          </p>
          <p>
            <u>Country</u>: {userAdress.country}
          </p>
          <p>
            <u>State</u>: {userAdress.state}
          </p>
          <p>
            <u>Street Address</u>: {userAdress.streetAddress}
          </p>
          <p>
            <u>ZIP</u>: {userAdress.zipCode}
          </p>
        </div>
      </div>
      <PreviousUsers />
      <Friends />
    </div>
  );
}

export default Profile;
