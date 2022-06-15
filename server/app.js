var express = require("express");
var path = require("path");
const cors = require("cors");
var cookieParser = require("cookie-parser");
const multer = require("multer");
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./uploads");
	},
	filename: (req, file, cb) => {
		cb(
			null,
			file.fieldname +
				"-" +
				new Date().getMilliseconds() +
				path.extname(file.originalname)
		);
	},
});
const upload = multer({ storage: storage });

var app = express();
let name = "Nick Leo";

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/api/profile", (req, res) => {
	res.status(200).json({
		message: "sucess",
		profile: { name: name },
	});
});
app.post("/api/profile", upload.single("avatar"), (req, res) => {
	const name = req.body.name;

	res.status(200).json({
		message: "Name is submitted sucess",
		profile: { name: name },
	});
});

app.listen(8000, () => console.log("Server is running now."));
module.exports = app;
