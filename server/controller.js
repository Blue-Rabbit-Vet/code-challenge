const express = require('express');
const Name = require('../database/model.js');

const getName = (req, res) => {
  Name.find({})
    .then((results) => res.status(200).send(results))
    .catch((err) => res.status(400).send(err))
}
const addName = (req, res) => {
  Name.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    image: req.body.image
  })
    .then((results) => res.status(201).send('success add a new name'))
    .catch((err) => res.status(400).send(err))
}

module.exports = {
  getName,
  addName
}