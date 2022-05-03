const mongoose = require('mongoose');
const db = require('./db.js')
mongoose.Promise = global.Promise;

const nameSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  image: String
})

const Name = mongoose.model('Name', nameSchema);

module.exports = Name;