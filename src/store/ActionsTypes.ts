import { AnyAction } from "redux";

export enum Action {
    AddRow = "AddRowAction",
    RemoveRow = "RemoveRowAction"
}

export interface AddRow extends AnyAction {
    type: typeof Action.AddRow;
}

export interface RemoveRow extends AnyAction {
    type: typeof Action.RemoveRow;
    index: number
}

export type ActionsType =
    | AddRow
    | RemoveRow;