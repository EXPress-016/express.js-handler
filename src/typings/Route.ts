import { RequestHandler } from 'express-serve-static-core';

export type RouteType = {
  path: string;
  method: string;
  run: RequestHandler[];
};
