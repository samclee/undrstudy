import React from "react";
import { connect } from "react-redux";
import { DialogPackage, IState} from "../types";
import { Actions } from "../store";
import { DialogLine } from "./DialogLine";

interface PropsFromState {
    rows: DialogPackage[]
};

function mapStateToProps(state: IState): PropsFromState {
    const {rows} = state;
    return { rows };
}

interface PropsFromDispatch {
    addRow: typeof Actions.addRow;
};

const mapDispatchToProps: PropsFromDispatch = {
    addRow: Actions.addRow
}

type IProps = PropsFromState & PropsFromDispatch;

class DialogDisplay extends React.Component<IProps> {
    public render(): JSX.Element {
        return (
            <div>
                {this.props.rows.map((row, index) => {
                    return <DialogLine 
                                index={index}
                                row={row}
                            />
                })}
                <h1 onClick={this.props.addRow}>Add row</h1>
            </div>
        )
    }
}

const dialogDisplay = connect(mapStateToProps, mapDispatchToProps)(DialogDisplay);

export { dialogDisplay as DialogDisplay };