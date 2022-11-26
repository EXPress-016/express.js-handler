const express = require('express');
const { glob } = require('glob');
const { promisify } = require('util');
const globPromise = promisify(glob);

class ExtendedApp {
  constructor() {
    /**
     * @type {import("../typings/Express").ExtenedExpress}
     */
    this.express = express();
    this.registerRoutes();
    this.registerMethods();
  }

  async registerRoutes() {
    this.express.routesArray = [];
    const routeFiles = await globPromise(`${__dirname}/../routes/*.js`);
    routeFiles.forEach(async (filePath) => {
      /**
       * @type {import('../typings/Route').RouteType | import('../typings/Router').RouterType}
       */
      const file = require(filePath);
      if (!file.path) return;
      this.express.routesArray.push(file);
    });
  }
  async registerMethods() {
    const Methods = await globPromise(`${__dirname}/../methods/*.js`);
    Methods.forEach(async (filePath) => {
      /**
       * @type {import("../typings/Method").MethodType}
       */
      const file = await require(filePath);
      if (!file.method) return;
      file.run(this.express);
    });
  }
}

module.exports = ExtendedApp;
