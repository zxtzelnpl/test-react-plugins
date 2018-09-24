import * as React from 'react';
import {Motion,spring} from 'react-motion';

import * as classNames from 'classnames/bind';
const styles = require("./SimpleTransition.less");
const cx = classNames.bind(styles);

export default class Demo extends React.Component<any,any>{

    constructor(props:any) {
        super(props);
        this.state = {open:false};
    }

    handleMouseDown = ()=>{
        this.setState({open:!this.state.open});
    };

    handleTouchStart = (e:any) => {
        e.preventDefault();
        this.handleMouseDown()
    };



    render(){
        const styleKey = 'demo0';

        return (
            <div>
                <button
                    onMouseDown={this.handleMouseDown}
                    onTouchStart={this.handleTouchStart}
                >
                    Toggle
                </button>

                <Motion style={{x:spring(this.state.open?400:0)}}>
                    {({x}) =>
                        // children is a callback which should accept the current value of
                        // `style`
                        <div className={cx(styleKey)}>
                            <div className={cx(`${styleKey}-block`)} style={{
                                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                                transform: `translate3d(${x}px, 0, 0)`,
                            }} />
                        </div>
                    }
                </Motion>
            </div>
        )
    }
}