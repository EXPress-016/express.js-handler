const { Request, Response } = require('express');
const Route = require('../structures/Route');

module.exports = new Route({
  path: '/',
  method: 'GET',
  run: [
    async (req, res) => {
      res.send('Hello World!');
    },
  ],
});
