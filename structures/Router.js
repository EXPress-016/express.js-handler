class Router {
  /**
   * @param {import("../typings/Router").RouterType} option
   */
  constructor(option) {
    this.path = option.path;
    this.routes = option.routes;
  }
}

module.exports = Router;
