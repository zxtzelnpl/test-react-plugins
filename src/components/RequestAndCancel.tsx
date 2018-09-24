import * as React from 'react';
import * as classNames from 'classnames/bind';
const styles = require('./RequestAndCancel.less');
const cx = classNames.bind(styles);

class RequestAndCancel extends React.Component {

    myReq:number = null;
    start:number = 0;

    state:{left:string} = {
        left:'0px'
    }

    componentDidMount() {

    }

    begin = ()=>{
        this.myReq = requestAnimationFrame(this.step);
    }

    end = () =>{
        cancelAnimationFrame(this.myReq);
    }

    step = (timestamp:number)=>{

        if(this.start === 0){
            this.start = timestamp;
        }

        let progress = timestamp - this.start;

        console.log(progress)

        let left = Math.min(progress/10,700)+"px";
        this.setState({
            left:left
        })
        if(progress<7000){
            this.myReq = requestAnimationFrame(this.step);
        }
    }


    render() {
        return (
            <div>
                <div className={cx('wrap')}>
                    <div
                        className={cx('inner')}
                        style={this.state}
                    >
                        requestAndCancel
                    </div>

                </div>
              <button onClick={this.begin}>Begin</button>
              <button onClick={this.end}>End</button>
            </div>

        )
    }
}

export default RequestAndCancel