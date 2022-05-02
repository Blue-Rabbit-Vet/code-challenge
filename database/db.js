const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/names';
const db = mongoose.connect(mongoURI, { useNewUrlParser: true});

db
  .then(db => console.log(`Connected to ${mongoURI}`))
  .catch(err => {
    console.log(`There is a problem connecting to ${mongoURI}`)
    console.error(err);
  })

module.exports = db;