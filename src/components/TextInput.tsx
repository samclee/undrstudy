import React from "react";
import { connect } from "react-redux";
import { Actions } from "../store";
import { InputMode, DialogPackage } from "../types";

interface PropsFromDispatch {
    changeText: typeof Actions.changeText;
}

const mapDispatchToProps = {
    changeText: Actions.changeText
}

interface TextInputProps {
    row: DialogPackage;
    index: number;
}

type IProps = TextInputProps & PropsFromDispatch;

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
                    onChange={this.onChange}
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

    private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.changeText(this.props.index, e.target.value);
    }
}

const textInput = connect(null, mapDispatchToProps)(TextInput);
export { textInput as TextInput }