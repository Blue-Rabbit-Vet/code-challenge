const express = require('express');
const router = require('./router.js')
const db = require('../database/db.js');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', router);

const port = 3001;
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`server listening on port ${port}`);
})