import { Express } from 'express-serve-static-core';
import { RouteType } from './Route';
import { RouterType } from './Router';

export interface ExtenedExpress extends Express {
  routesArray: (RouteType | RouterType)[];
}
