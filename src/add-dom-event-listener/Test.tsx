import * as React from 'react';

function callback(e: any) {
    // console.log(this);
    // console.log(e);
}

class Test extends React.Component {

    button: any = null;

    handleClick = (e: any) => {
        // console.log(e);
    }

    componentDidMount() {
        // console.log(this.button);
        // console.log(this.button.nodeName);
        this.button.addEventListener('click', callback, false);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Test</button>

                <div>
                    <button ref={button => this.button = button}>Click2</button>
                </div>
            </div>
        );
    }
}

export default Test;
