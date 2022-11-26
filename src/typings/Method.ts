import { ExtenedExpress } from './Express';

export type MethodType = {
  method: string;
  run: (app: ExtenedExpress) => any;
};
