import { RouteType } from '../typings/Route';

export class Route {
  constructor(routeOptions: RouteType) {
    Object.assign(this, routeOptions);
  }
}
