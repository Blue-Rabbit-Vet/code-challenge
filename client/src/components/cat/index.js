import React from "react";

//images
import christmas from "../../assets/christmas.jpg";
import coffeeTable from "../../assets/coffee_table.jpg";
import bed from "../../assets/in_bed.jpg";
import sink from "../../assets/in_sink.jpg";
import pounce from "../../assets/ready_to_pounce.jpg";
import lap from "../../assets/sitting_on_lap.jpg";
function Cat() {
  return (
    <div>
      <div className="container">
        <h1>Enjoy pictures of my cat, Kash!</h1>
      </div>
      <div className="row-2">
        <div className="col">
          <img src={christmas} alt="Christmas kitty!" />
        </div>
        <div className="col">
          <img src={coffeeTable} alt="Kitty just chillin'" />
        </div>
      </div>
      <div className="row-2">
        <div className="col">
          <img src={bed} alt="sleepy kitty!" />
        </div>
        <div className="col">
          <img src={sink} alt="Kitty just chillin' in a sink" />
        </div>
      </div>
      <div className="row-2">
        <div className="col">
          <img src={pounce} alt="Kitty ready to pounce!" />
        </div>
        <div className="col">
          <img src={lap} alt="Kitty in my lap!" />
        </div>
      </div>
    </div>
  );
}

export default Cat;
