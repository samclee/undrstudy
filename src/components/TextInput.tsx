import React from "react";
import { InputMode, DialogPackage } from "../types";
import { throws } from "assert";

interface IProps {
    row: DialogPackage;
    index: number;
}

interface IState {
    mode: InputMode;
}

class TextInput extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            mode: InputMode.StoreDisplay
        }
    }

    public render() {
        if (this.state.mode === InputMode.StoreDisplay) {
            return (
                <input
                    value={this.props.row.text}
                    onFocus={this.onFocus}
                />
            );
        } else {
            return (
                <input
                    defaultValue={this.props.row.text}
                    onBlur={this.onBlur}
                />
            );
        }
    }

    private onBlur = () => {
        this.setState({mode: InputMode.StoreDisplay});
    }

    private onFocus = () => {
        this.setState({mode: InputMode.Edit});
    }
}

export { TextInput }