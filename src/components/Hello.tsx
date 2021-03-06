import * as React from 'react';

import * as classNames from 'classnames/bind';

const styles = require('./Hello.less');

let cx = classNames.bind(styles);

export interface HelloProps {
    compiler: string;
    framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {

    static defaultProps = {
        compiler: 'TypeScript',
        framework: 'React',
    };

    render() {
        let className = cx([
            'hello',
            'hello-red',
        ]);

        return <h1 className={className}>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
