import * as React from 'react';

let index = 0;

class Test1 extends React.PureComponent {

    static = {
        a: true,
        b: true,
    };

    handleClick = () => {
        this.setState({
            a: false,
            b: false,
        });
    }

    componentDidUpdate() {
        // console.log(++index);
        // console.log(this.state);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                Test1-Click
            </button>
        );
    }
}

export default Test1;
