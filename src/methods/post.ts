import { Method } from '../structures/Method';
import { Router } from '../structures/Router';
import { RouteType } from '../typings/Route';

export default new Method('post', (app) => {
  app.routesArray.forEach((route) => {
    if (route instanceof Router && (route as RouteType).method !== 'POST')
      return;
    app.post(route.path, (route as RouteType).run);
  });
});
