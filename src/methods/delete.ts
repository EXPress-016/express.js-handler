import { Method } from '../structures/Method';
import { Router } from '../structures/Router';
import { RouteType } from '../typings/Route';

export default new Method('delete', (app) => {
  app.routesArray.forEach((route) => {
    if (route instanceof Router && (route as RouteType).method !== 'DELETE')
      return;
    app.delete(route.path, (route as RouteType).run);
  });
});
