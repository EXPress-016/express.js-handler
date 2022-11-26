import { MethodType } from '../typings/Method';

export class Method {
  constructor(methodOptions: MethodType) {
    Object.assign(this, methodOptions);
  }
}
