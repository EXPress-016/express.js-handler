import { Method } from '../structures/Method';
import { Router } from '../structures/Router';
import { RouteType } from '../typings/Route';

export default new Method('put', (app) => {
  app.routesArray.forEach((route) => {
    if (route instanceof Router && (route as RouteType).method !== 'PUT')
      return;
    app.put(route.path, (route as RouteType).run);
  });
});
