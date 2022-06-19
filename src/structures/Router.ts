import { RouterType } from '../typings/Router';

export class Router {
  constructor(routerOptions: RouterType) {
    Object.assign(this, routerOptions);
  }
}
