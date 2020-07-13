import React from "react";
import { FuncInput } from "./FuncInput";

interface IProps {
    index: number;
}

class FuncDisplay extends React.Component<IProps> {
    public render() {
        return (
            <div className="funcDisplay">
                Stack of FuncInputs goes here
            </div>
        )
    }
}


export { FuncDisplay}