import * as React from 'react';
import * as ReactDom from 'react-dom';
import { PureComponent } from 'react';

let index = 0;

class Parent extends PureComponent {
    state = {
        a: false,
    };

    componentDidUpdate() {
        // console.log('Parent-componentDidUpdate');
        // console.log(this.state);
    }

    render() {
        return <Sub setParentState={(...args) => this.setState(args)} />;
    }
}

interface SubProps {
    readonly setParentState: (object: object, callback: () => void) => void;
}

class Sub extends React.PureComponent<SubProps> {
    state = {
        b: false,
    };

    componentDidUpdate() {
        // console.log('Sub-componentDidUpdate');
        // console.log(this.state);
    }

    handleClick = () => {
        this.props.setParentState({
            a: true,
        }, function() {
            // console.log('Parent-setState');
        });
        this.setState({
            b: true,
        }, function() {
            // console.log('Sub-setState');
        });
    }

    handleClick2 = () => {
        let me = this;
        Promise
            .resolve()
            .then(function() {
                me.props.setParentState({
                    a: true,
                }, function() {
                    console.log('Parent-setState');
                });
                me.setState({
                    b: true,
                }, function() {
                    console.log('Sub-setState');
                });
            });
    }

    handleClick3 = () => {
        let me = this;
        Promise
            .resolve()
            .then(function() {
                ReactDom.unstable_batchedUpdates(function() {
                    me.props.setParentState({
                        a: true,
                    }, function() {
                        console.log('Parent-setState');
                    });
                    me.setState({
                        b: true,
                    }, function() {
                        console.log('Sub-setState');
                    });
                });

            });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click1</button>
                <button onClick={this.handleClick2}>Click2</button>
                <button onClick={this.handleClick3}>Click3</button>
            </div>

        );
    }
}

export default Parent;
