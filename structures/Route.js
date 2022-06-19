class Route {
  /**
   * @param {import("../typings/Route").RouteType} option
   */
  constructor(option) {
    this.path = option.path;
    this.method = option.method;
    this.run = option.run;
  }
}

module.exports = Route;
