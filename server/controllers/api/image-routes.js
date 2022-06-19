const router = require("express").Router();
const sequelize = require("../../config/connection");
const User = require("../../models/User");
const { getFile, uploadFile } = require("../../utils/s3");
const multer = require("multer");

const upload = multer({
  dest: "uploads/",
});

router.get("/:key", async (req, res) => {
  key = req.params.key;
  console.log("Looking up image || ", key, " ||");
  try {
    const readStream = await getFile(key);
    readStream.pipe(res);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/uploadAvatar/:user", upload.single("file"), async (req, res) => {
  const { filename } = req.file;
  let file_key;
  const user = req.params.user;
  // Try to upload the file
  try {
    await uploadFile(req.file);
    file_key = `/api/images/${filename}`;
  } catch (err) {
    console.log(err);
  }
  // If file upload is successful, update the associated user.
  User.update(
    {
      avatar: file_key,
    },
    {
      where: {
        username: user,
      },
    }
  )
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({
          message: "No user found with this id",
        });
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
