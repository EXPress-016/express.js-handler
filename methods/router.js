const app = require('../index.js');
const Router = require('express').Router();
const Route = require('../structures/Route');

app.routesArray.forEach((router) => {
  if (router instanceof Route) return;
  router.routes.forEach((route) => {
    switch (route.method) {
      case 'GET':
        Router.get(route.path, async (req, res) => {
          route.run(req, res);
        });
        break;
      case 'POST':
        Router.post(route.path, async (req, res) => {
          route.run(req, res);
        });
        break;
      case 'PUT':
        Router.put(route.path, async (req, res) => {
          route.run(req, res);
        });
        break;
      case 'DELETE':
        Router.delete(route.path, async (req, res) => {
          route.run(req, res);
        });
        break;
    }
  });
  app.use(router.path, Router);
});
