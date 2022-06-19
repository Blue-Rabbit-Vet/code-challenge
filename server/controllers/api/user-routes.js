const router = require("express").Router();
const sequelize = require("../../config/connection");
const User = require("../../models/User");

router.get("/", (req, res) => {
  // get all users (names submitted through form) stream
  User.findAll({})
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No users found!" });
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "An internal error occurred. Please try again later.",
      });
    });
});

router.get("/:userId", (req, res) => {
  // get  single user
  User.findOne({
    where: {
      id: req.params.userId,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with that id!" });
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      res
        .status(500)
        .json({
          message: "An internal error occurred. Please try again later.",
        });
    });
});

router.post("/", (req, res) => {
  //create new user
  User.create({
    username: req.body.username,
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(500).json({ message: "Error creating user" });
      }
      res.status(200).json({ message: "User Created" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "An internal error has occurred. Please try again later.",
      });
    });
});

module.exports = router;
