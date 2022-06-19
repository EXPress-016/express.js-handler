const { Request, Response } = require('express');
const Route = require('../structures/Route');

module.exports = new Route({
  path: '/',
  method: 'POST',
  run: (req, res) => {
    res.send('Hello World!');
  },
});
