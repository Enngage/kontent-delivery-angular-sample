import { ISystem } from '../interfaces/isystem.interface';

export class System implements ISystem {
  constructor(
    public id: string,
    public name: string,
    public codename: string,
    public type: string,
    public last_modified: Date
  ) { }
}
