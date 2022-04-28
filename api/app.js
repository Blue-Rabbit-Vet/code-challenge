const db = require('./database.js');
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './avatars');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)
    ); // Appending extension when saving file
  },
});
const upload = multer({ storage: storage });

const PORT = 8080;
const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/v1/name', (req, res) => {
  const sql = 'SELECT * FROM names WHERE id = 1';
  const params = [];
  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.status(200).json({
      message: 'success',
      data: row,
    });
  });
});

app.get('/api/v1/name/:id', (req, res) => {
  const selectSQL = 'SELECT * FROM names WHERE id = ?';
  const params = [req.params.id];
  db.get(selectSQL, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: row,
    });
  });
});

app.post('/api/v1/name', (req, res) => {
  console.log(req.body);
  const data = {
    name: req.body.name,
  };
  const insertSQL = 'INSERT INTO names (name) VALUES (?)';
  const params = [data.name];
  db.run(insertSQL, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.status(200).json({
      message: 'The name was successfully added.',
      data,
      id: this.lastID,
    });
  });
});

app.post('/api/v1/avatar', upload.single('avatar'), (req, res) => {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log(req.file);
  const file = req.file;
  const data = {
    fileType: file.mimetype,
    originalName: file.originalname,
    path: file.path,
  };
  const insertSQL =
    'INSERT INTO avatar (filetype, originalName, path) VALUES (?,?,?)';
  const params = [data.fileType, data.originalName, data.path];
  db.run(insertSQL, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.status(200).json({
      message: 'The avatar was successfully uploaded.',
      data,
      id: this.lastID,
    });
  });
});

app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
