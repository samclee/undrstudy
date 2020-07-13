import { Action, ActionsType } from "./ActionsTypes";

export class Actions {
    public static addRow(): ActionsType {
        return {
            type: Action.AddRow,
        }
    }

    public static removeRow(index: number): ActionsType {
        return {
            type: Action.RemoveRow,
            index
        }
    }
}