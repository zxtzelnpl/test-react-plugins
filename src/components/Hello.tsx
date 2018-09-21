import * as React from "react";

import * as classNames from "classnames/bind";

const styles = require("./Hello.less");


let cx = classNames.bind(styles);


export interface HelloProps {
    compiler: string;
    framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {

    render() {

        let className = cx({
            'hello':true,
            'hello-red':true
        });
        console.log(styles);
        console.log(cx);
        console.log(className);

        return <h1 className={className}>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
