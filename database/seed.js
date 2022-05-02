const myName = require('./myName.json');
const mongoose = require('mongoose');
const Name = require('./model.js')

const insertMyName = function() {
  Name.insertMany(myName)
    .catch((err) => console.log('fail to insert data', err))
    .then(() => mongoose.connection.close());
};

insertMyName();