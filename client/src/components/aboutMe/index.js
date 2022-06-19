import React, { useEffect, useState } from "react";

import axios from "axios";

import profilePic from "../../assets/profile-pic.jpg";

function AboutMe() {
  const [myInfo, setMyInfo] = useState({});

  const retrieveInfo = async () => {
    const response = await axios.get("/api/me/info");
    if (!response) {
      return false;
    }
    setMyInfo(response.data);
  };

  useEffect(() => {
    if (!myInfo) {
      console.log("No Info Found");
    }
  }, [myInfo]);

  retrieveInfo();

  return (
    <div className="container">
      <h1>Welcome</h1>

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
