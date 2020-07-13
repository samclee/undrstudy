import React from "react";
import { connect } from "react-redux";
import { Actions } from "../store"
import { PortraitInput } from "./PortraitInput";
import { NextInput } from "./NextInput";
import { TextInput } from "./TextInput";
import { FuncDisplay } from "./FuncDisplay";
import "./DialogLine.css";

interface PropsFromDispatch {
    removeRow: typeof Actions.removeRow;
};

const mapDispatchToProps: PropsFromDispatch = {
    removeRow: Actions.removeRow
}

interface DialogLineProps {
    index: number;
}

type IProps = DialogLineProps  & PropsFromDispatch

class DialogLine extends React.Component<IProps> {

    public render(): JSX.Element {

        return (
            <div className="dialogLine">
                <h1 onClick={this.removeRow}>X</h1>
                {`Index: ${this.props.index}`}
                <NextInput
                    index={this.props.index}
                />
                <PortraitInput
                    index={this.props.index}
                />
                <TextInput
                    index={this.props.index}
                />
                <FuncDisplay
                    index={this.props.index}
                />
            </div>
        )
    } // render

    private removeRow = () => {
        console.log(this.props.index);
        this.props.removeRow(this.props.index);
    }
}

const dialogLine = connect(null, mapDispatchToProps)(DialogLine);

export { dialogLine as DialogLine };