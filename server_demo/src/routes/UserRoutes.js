'use strict';
const path = require('path')

module.exports = function(app) {
  let userController = require('../controller/UserController');

  // todoList Routes
  app.route('/api/v1/user')
    .post(userController.createUser);
};