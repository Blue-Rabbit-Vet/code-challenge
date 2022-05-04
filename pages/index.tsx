import type { NextPage } from "next";
import { useEffect, useState } from "react";

import UserProfile from "../components/Home/UserProfile";
import { getName } from "../components/Common/CommonFunctions";
import UserEntryForm from "../components/Home/UserEntryForm";
import UserDatabaseView from "../components/Home/UserDatabaseView";
import HomeHeader from "../components/Home/HomeHeader";

const Home: NextPage = () => {
  const [name, setName] = useState("");
  const [route, setRoute] = useState("");

  useEffect(() => {
    getName(setName);
    setRoute(window.location.href);
  }, []);

  return (
    <div className="flex-fill d-flex flex-column">
      <HomeHeader name={name} />
      <div className="d-flex align-items-center justify-content-center">
        <small className="my-3 text-center">
          Check out more of my work at{" "}
          <a
            href="https://mclaindevelopment.com"
            target="_blank"
            rel="noreferrer"
          >
            www.mclaindevelopment.com
          </a>
        </small>
      </div>
      <div className="container mt-4 p-3">
        <div>
          <div className="row mt-3">
            <div className="col-md-6">
              <UserProfile name={name} avatar={"/images/me.jpg"} />
            </div>
            <div className="col-md-6">
              <h5 className="fw-bold">Steps 1-2:</h5>
              <small>
                Create an api with an endpoint that returns my name, and create
                a minimal frontend that displays my name.
              </small>
              <div className="card mt-3">
                <div className="card-header">
                  <div className="row">
                    <div className="col-md-6 mb-3 mb-md-0 d-flex align-items-center justify-content-center justify-content-md-start">
                      <a
                        href="/api/name"
                        target="_blank"
                        rel="noreferrer"
                        className={"btn btn-blue-rabbit"}
                      >
                        Test Api Endpoint!
                      </a>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center justify-content-md-end">
                      <p className="mb-0 fw-bold">{route}api/name</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="row">
            <div className="col-md-6">
              <h5 className="fw-bold">Steps 3-5:</h5>
              <span className="small">
                Create an API endpoint that takes a name and stores it. Add
                inputs to the frontend to allow for name and image submission.
              </span>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6 order-2 order-md-1">
              <UserEntryForm />
            </div>
            <div className="col-md-6 order-1 order-md-2 mb-3 mb-md-0 d-flex flex-column">
              <UserDatabaseView route={route} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
