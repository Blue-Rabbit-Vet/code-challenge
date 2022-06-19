import React, { useState, useEffect } from "react";
import axios from "axios";

function UsernameForm() {
  const [formState, setFormState] = useState({
    username: "",
  });

  const [lastMadeUser, setLastMadeUser] = useState(0);

  const [errorMessage, setErrorMessage] = useState("");

  async function loadNewUser(username) {
    const response = await axios.get(`/api/users/${username}`);
    if (!response) {
      setLastMadeUser(null);
    }
    setLastMadeUser(response.data);
  }

  function handleChange(e) {
    if (e.target.id === "username") {
      const { name, value } = e.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let username;
    // create user first
    const userData = { username: formState.username };

    const response = await axios.post("/api/users/", userData);
    if (!response) {
      console.log("Error, no response made");
      setErrorMessage("Error creating user!");
    } else {
      username = response.data.username;
      loadNewUser(username);
      return;
    }
  }
  return (
    <div className="container">
      <div>
        <h1>Username ONLY Form</h1>
        <p className="contain-width padx-5">
          This form allows you to create ONLY a username!
        </p>
      </div>
      <div className="row-2">
        <div className="col">
          <div className="row-2">
            <form className="col">
              <div className="input">
                <label htmlFor="username">Username:</label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  onChange={handleChange}
                />
              </div>
              <div id="button-submit">
                <button onClick={handleSubmit}>
                  <p>Submit</p>
                </button>
              </div>
            </form>
          </div>
          <div className="row-2"></div>
        </div>

        <div className="col">
          {lastMadeUser?.id ? (
            <>
              <h2>Username: {lastMadeUser.username}</h2>
            </>
          ) : (
            <h2>
              {" "}
              Your newly created username will display here when created!
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default UsernameForm;
