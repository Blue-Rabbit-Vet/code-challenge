const router = require("express").Router();
const sequelize = require("../../config/connection");

router.get("/", (req, res) => {
  // get all users (names submitted through form) stream
  res.status(200).json({ message: "Getting all users" });
  res.send("users");
});

router.get("/:id", (req, res) => {
  // get  single user
  res.status(200).json({ message: "Getting One User" });
  res.send("Success");
});

module.exports = router;
