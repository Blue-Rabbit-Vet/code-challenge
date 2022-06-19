import React, { useEffect, useState } from "react";

import axios from "axios";

import profilePic from "../../assets/profile-pic.jpg";

function AboutMe() {
  const [myInfo, setMyInfo] = useState({});
  const [myName, setMyName] = useState("");
  const retrieveInfo = async () => {
    const response = await axios.get("/api/me/info");
    if (!response) {
      return false;
    }
    setMyInfo(response.data);
  };

  async function displayName() {
    const response = await axios.get("/api/me/name");
    if (!response) {
      return false;
    }
    setMyName(response.data.myName);
  }

  useEffect(() => {
    if (!myInfo) {
      //do something
    }
    if (!myName) {
      //do something
    }
  }, [myInfo, myName]);

  retrieveInfo();

  return (
    <div className="container">
      <div>
        {myName ? (
          <h1>Welcome, my name is {myName}</h1>
        ) : (
          <h1>Welcome, my name is</h1>
        )}
      </div>
      <div id="button-submit">
        <button onClick={displayName}>Click to reveal my name!</button>
      </div>

      <div className="row-2">
        <div className="col">
          <h2>About Me</h2>
          <div>
            {myInfo?.generalInfo ? (
              <p>{myInfo.generalInfo}</p>
            ) : (
              <p>Retrieving Info.</p>
            )}
          </div>
        </div>
        <div className="col">
          <img
            src={profilePic}
            alt="A portrait of Dominic Misasi, looking up to the camera"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
