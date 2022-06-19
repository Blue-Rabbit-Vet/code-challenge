const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const imageRoutes = require("./image-routes.js");
const meRoutes = require("./me-routes");

// set up routes
router.use("/users", userRoutes);
router.use("/images", imageRoutes);
router.use("/me", meRoutes);

module.exports = router;
