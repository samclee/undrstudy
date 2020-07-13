import { IState, DialogPackage } from "../types";
import { Action, ActionsType, AddRow, RemoveRow } from "./ActionsTypes";


function handleAddRow(state: IState, _action: AddRow): IState {
    const rows = Array.from(state.rows);
    const newRow: DialogPackage = {
        next: rows.length + 1,
        text: "",
        funcs: []
    }

    rows.push(newRow);
    return { rows };
}

function handleRemoveRow(state: IState, action: RemoveRow): IState {
    const rows = state.rows.filter((_row, index) => {
        return index != action.index;
    });

    return { rows };
}

const initialState: IState = {
    rows: []
}

export function reducer(state: IState = initialState, action: ActionsType): IState {
    switch (action.type) {
        case Action.AddRow:
            return handleAddRow(state, action);
        case Action.RemoveRow:
            return handleRemoveRow(state, action);
        default:
            return state;
    }
}