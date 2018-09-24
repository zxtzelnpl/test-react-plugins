import * as React from 'react';
import {StaggeredMotion,spring,presets} from 'react-motion';
import {range} from 'lodash';

import * as classNames from 'classnames/bind';
const styles = require('./ChatHeads.less');
const cx = classNames.bind(styles);

export interface P {

}

interface Position{
    pageX:number,
    pageY:number
}


export default class Demo extends React.Component<P,any>{

    constructor(props:P) {
        super(props);
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('touchmove', this.handleTouchMove);
    };

    handleMouseMove = ({pageX:x,pageY:y}:Position) => {
        console.log(x,y);
        this.setState({x, y});
    };

    handleTouchMove = ({touches}:any) => {
        this.handleMouseMove(touches[0]);
    };
    getStyles = (prevStyles:any) => {
        // `prevStyles` is the interpolated value of the last tick
        const endValue = prevStyles.map((_:any, i:any) => {
            return i === 0
                ? this.state
                : {
                    x: spring(prevStyles[i - 1].x, presets.gentle),
                    y: spring(prevStyles[i - 1].y, presets.gentle),
                };
        });
        return endValue;
    };

    render() {
        return (
            <StaggeredMotion
                defaultStyles={range(6).map(() => ({x: 0, y: 0}))}
                styles={this.getStyles}>
                {(balls:any) =>
                    <div className={cx(`demo1`)}>
                        {balls.map(({x, y}:any, i:any) =>
                            <div
                                key={i}
                                className={cx(`demo1-ball`,`ball-${i}`)}
                                style={{
                                    WebkitTransform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
                                    transform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
                                    zIndex: balls.length - i,
                                }} />
                        )}
                    </div>
                }
            </StaggeredMotion>
        );
    };
}