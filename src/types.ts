export type Arg = string | number;

export interface Func {
    name: string,
    args: Arg[]
}

export interface DialogPackage {
  next: number,
  text: string,
  funcs: Func[]
}

export interface IState {
  rows: DialogPackage[]
}

export enum InputMode {
  StoreDisplay = "StoreDisplay",
  Edit = "Edit"
}