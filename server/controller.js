const express = require('express');
const Name = require('../database/model.js');

const getName = (req, res) => {
  Name.find({})
    .then((results) => res.status(200).send(results))
    .catch((err) => res.status(400).send(err))
}

module.exports = {
  getName
}