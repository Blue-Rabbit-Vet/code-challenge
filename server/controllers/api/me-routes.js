const router = require("express").Router();
const sequelize = require("../../config/connection");

// Pre made the myInfo object so the actual route code isn't clogged up with text.
myInfo = {
  myName: "Dominic Misasi",
  age: "29",
  stateResidence: "Idaho",
  petName: "Kash",
  generalInfo:
    "While growing up in Menomonee Falls, Wisonsin, I found myself always interested in technology. I participated in my high school's technology club and messed about with game modding with friends. When I went to college at the New England School of Communications (merged with Husson University while I was attending) in Bangor, Maine, I focused my studies on post production audio and computer science. My goal was to work in game audio design and implementation, and after graduating I worked a number of small freelance gigs ranging from sound design for small animations to audio programming and implementation in larger scale first person shooters. I'm even currently working on audio implementation for a virtual reality project, designing dynamic playback systems for player interactions. This past year I decided I wanted a more stable career and to work my audio projects on the side, so I decided to attend a Full Stack Development bootcamp through the University of Minnesota. That brings me to where I am now, creating this fun project for your team to view. I hope you enjoy this application, and I look forward to hearing all your feedback!",
};

// Return info about me. This is used to fill out the page! Not necessary but the idea
// popped into my head so I went along with it
router.get("/info", (req, res) => {
  res.status(200).json(myInfo);
});

// API route for getting only my name.
router.get("/name", (req, res) => {
  res.status(200).json({ myName: "Dominic W. Misasi" });
});

module.exports = router;
