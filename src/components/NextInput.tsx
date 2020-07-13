import React from "react";

interface IProps {
    index: number
}

class NextInput extends React.Component<IProps> {
    public render() {
        return (<input placeholder={`${this.props.index+1}`} />);
    }
}

export { NextInput }