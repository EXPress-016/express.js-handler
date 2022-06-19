import { ExtenedExpress } from '../typings/Express';

export class Method {
  constructor(
    public method: string,
    public run: (app: ExtenedExpress) => any
  ) {}
}
