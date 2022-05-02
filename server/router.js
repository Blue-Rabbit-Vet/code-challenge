const router = require('express').Router();
const controller = require('./controller.js');

router.route('/name')
  .get(controller.getName)
  .post(controller.addName)

module.exports = router;