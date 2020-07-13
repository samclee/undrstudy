import React from "react";
import { Func } from "../types";

interface IProps {
    index: number;
    funcIndex: number;
}

class FuncInput extends React.Component {
    public render() {
        return (<input />);
    }
}


export { FuncInput }