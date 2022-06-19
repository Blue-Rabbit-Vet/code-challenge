const router = require("express").Router();
const sequelize = require("../../config/connection");

router.get("/users", (req, res) => {
  // get all users (names submitted through form) stream
  res.status(200).json({ message: "Getting all users" });
});

router.get("/user/:id", (req, res) => {
  // get  single user
  res.status(200).json({ message: "Getting One User" });
});

module.exports = router;
