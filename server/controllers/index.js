const router = require("express").Router();

const apiRoutes = require("./api");

router.get("/", (req, res) => {
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
  }
});

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
