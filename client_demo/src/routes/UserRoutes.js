'use strict';
const path = require('path')

module.exports = function(app) {
  let userServerGrpc = require('../service/UserClientServiceGrpc');

  // todoList Routes
  app.route('/api/v1/user')
    .post(userServerGrpc.createUser);
};