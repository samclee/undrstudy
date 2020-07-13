import React from "react";
import { connect } from "react-redux";
import { DialogPackage, IState} from "../types";
import { Actions } from "../store";

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
                <h1 onClick={this.props.addRow}>Add row</h1>
                {this.props.rows.map(row => <h1>Yup this is a row</h1>)}
            </div>
        )
    }
}

const dialogDisplay = connect(mapStateToProps, mapDispatchToProps)(DialogDisplay);

export { dialogDisplay as DialogDisplay };