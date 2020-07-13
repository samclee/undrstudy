import React from "react";

interface IProps {
    index: number
}

class TextInput extends React.Component<IProps> {
    public render() {
        return (<input />);
    }
}

export { TextInput }