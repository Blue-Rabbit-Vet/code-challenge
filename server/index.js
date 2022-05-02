const express = require('express');
const router = require('./router.js')
const db = require('../database/db.js');

const app = express();
app.use('/api', router);

const port = 3000;
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`server listening on port ${port}`);
})