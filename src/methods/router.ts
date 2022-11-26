import { Method } from '../structures/Method';
import { Route } from '../structures/Route';
import { RouterType } from '../typings/Router';

export default new Method('router', async (app) => {
  const Router = (await import('express')).Router();
  app.routesArray.forEach((router) => {
    if (router instanceof Route) return;
    (router as RouterType).routes.forEach((route) => {
      switch (route.method) {
        case 'GET':
          Router.get(route.path, route.run);
          break;
        case 'POST':
          Router.post(route.path, route.run);
          break;
        case 'PUT':
          Router.put(route.path, route.run);
          break;
        case 'DELETE':
          Router.delete(route.path, route.run);
          break;
      }
    });
    app.use(router.path, Router);
  });
});
