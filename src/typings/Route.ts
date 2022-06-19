import { Request, Response } from 'express';

export type RouteType = {
  path: string;
  method: string;
  run: (req: Request, res: Response) => void;
};
