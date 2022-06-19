import { Method } from '../structures/Method';
import { Router } from '../structures/Router';
import { RouteType } from '../typings/Route';

export default new Method('get', (app) => {
  app.routesArray.forEach((route) => {
    if (route instanceof Router && (route as RouteType).method !== 'GET')
      return;
    app.get(route.path, (req, res) => {
      (route as RouteType).run(req, res);
    });
  });
});
