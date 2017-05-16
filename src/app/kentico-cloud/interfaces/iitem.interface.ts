import { ISystem } from './isystem.interface';

export interface IItem<T> {
  system: ISystem,
  elements: T
}

