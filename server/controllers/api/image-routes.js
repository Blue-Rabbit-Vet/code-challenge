const router = require("express").Router();
const sequelize = require("../../config/connection");

router.get("/image/:key", (req, res) => {
  // get data stream
  res.status(200).json({ message: "Getting single image" });
});

module.exports = router;
