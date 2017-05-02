import { System } from './system.class'

export abstract class BaseItem {
    constructor(
        public system: System,
    ) { }
}