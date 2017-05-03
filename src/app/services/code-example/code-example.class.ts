import { ISystem } from '../../kentico-cloud/interfaces/isystem.interface';
import { IItem } from '../../kentico-cloud/interfaces/iitem.interface';

export class CodeExample implements IItem {
  constructor(
    public system: ISystem,
    public code: string,
    public title: string,
  ) {}
}

