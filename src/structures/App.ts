import express from 'express';
import { glob } from 'glob';
import { promisify } from 'util';
import { ExtenedExpress } from '../typings/Express';
import { RouteType } from '../typings/Route';
import { RouterType } from '../typings/Router';
import { Method } from './Method';

const globPromise = promisify(glob);

export class ExtenedApp {
  express: ExtenedExpress;
  constructor() {
    this.express = express() as ExtenedExpress;
    this.registerRoutes();
    this.registerMethods();
  }
  async importFile(filePath: string) {
    return (await import(filePath))?.default;
  }
  async registerRoutes() {
    this.express.routesArray = [];
    const routeFiles = await globPromise(`${__dirname}/../routes/*{.ts,.js}`);
    routeFiles.forEach(async (filePath) => {
      const file: RouteType | RouterType = await this.importFile(filePath);
      if (!file.path) return;
      this.express.routesArray.push(file);
    });
  }
  async registerMethods() {
    const Methods = await globPromise(`${__dirname}/../methods/*{.ts,.js}`);
    Methods.forEach(async (filePath) => {
      const file: Method = await this.importFile(filePath);
      if (!file.method) return;
      file.run(this.express);
    });
  }
}
