import React from "react";
import { PortraitInput } from "./PortraitInput";
import { NextInput } from "./NextInput";
import { TextInput } from "./TextInput";
import { FuncDisplay } from "./FuncDisplay";
import "./DialogLine.css";

interface PropsFromDispatch {

}

interface DialogLineProps {
    index: number;
}

type IProps = DialogLineProps  & PropsFromDispatch

class DialogLine extends React.Component<IProps> {

    public render(): JSX.Element {

        return (
            <div className="dialogLine">
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
    }
}

export { DialogLine }