const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const imageRoutes = require("./image-routes.js");

// set up routes
router.use("/users", userRoutes);
router.use("/images", imageRoutes);

module.exports = router;
