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

    public static changeText(index: number, newText: string): ActionsType {
        return {
            type: Action.ChangeText,
            index,
            newText
        }
    }
}