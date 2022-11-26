const { Request, Response } = require('express');
const Router = require('../structures/Router');

module.exports = new Router({
  path: '/router',
  routes: [
    {
      path: '/',
      method: 'GET',
      run: [
        async (req, res) => {
          res.send('Hello World!');
        },
      ],
    },
    {
      path: '/',
      method: 'POST',
      run: [
        async (req, res) => {
          res.send('Hello World!');
        },
      ],
    },
  ],
});
