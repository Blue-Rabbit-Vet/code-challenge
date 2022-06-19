import axios from "axios";
import React, { useState } from "react";

function FullUserForm() {
  const [formState, setFormState] = useState({
    username: "",
    avatar: null,
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

    if (e.target.id === "uploader") {
      const newVal = e.target.files[0];
      formState.avatar = newVal;
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
    }

    // now user is created, if we have an avatar file, upload it and add it to the user's "avatar" key
    if (formState.avatar === null) {
      loadNewUser(username);
      return;
    }

    const imageData = new FormData();
    imageData.append("file", formState.avatar);

    const uploaderResponse = await axios.put(
      `/api/images/uploadAvatar/${username}`,
      imageData
    );
    if (!uploaderResponse) {
      console.log("Error uploading");
      setErrorMessage("Error Uploading Avatar!");
      return;
    } else {
      loadNewUser(username);
      return;
    }
  }
  return (
    <div className="container">
      <div>
        <h1>Full User Form</h1>
        <p className="contain-width padx-5">
          This form allows you to create a username and upload an image to use
          as your your avatar! If you choose to skip the file upload, I will use
          a placeholder image instead that you can change later!
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
              <div className="input">
                <label htmlFor="avatar">Avatar:</label>
                <input
                  id="uploader"
                  type="file"
                  name="avatar"
                  accept=".png, .jpg, .jpeg"
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
              <img src={lastMadeUser.avatar} alt={lastMadeUser.username} />
            </>
          ) : (
            <h2> Your newly created user will display here when created!</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default FullUserForm;
