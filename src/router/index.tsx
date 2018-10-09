import * as React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import PhotoSwipe  from '../components/PhotoSwipe';

import { Hello } from '../components/Hello';
import SimpleTransition from '../reactMotionDemos/SimpleTransition';
import ChatHeads from '../reactMotionDemos/ChatHeads';
import DraggableBalls from '../reactMotionDemos/DraggableBalls';
import RequestAndCancel from '../components/RequestAndCancel';
import ProxyComponent from '../ES6Component/ProxyComponent';

import * as classNames from 'classnames/bind';
const styles = require('./ul.less');
const cx = classNames.bind(styles);
const ulClassName = cx('ul');

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Route exact path="/" component={Hello} />
                    <Route exact path="/SimpleTransition" component={SimpleTransition} />
                    <Route exact path="/ChatHeads" component={ChatHeads} />
                    <Route exact path="/DraggableBalls" component={DraggableBalls} />
                    <Route exact path="/RequestAndCancel" component={RequestAndCancel} />
                    <Route exact path="/PhotoSwipe" component={PhotoSwipe} />
                    <Route exact path="/ProxyComponent" component={ProxyComponent} />
                    <hr/>
                    <ul className={ulClassName}>
                        <li><Link to="/">Hello</Link></li>
                        <li><Link to="/SimpleTransition">SimpleTransition</Link></li>
                        <li><Link to="/ChatHeads">ChatHeads</Link></li>
                        <li><Link to="/DraggableBalls">DraggableBalls</Link></li>
                        <li><Link to="/RequestAndCancel">RequestAndCancel</Link></li>
                        <li><Link to="/PhotoSwipe">PhotoSwipe</Link></li>
                        <li><Link to="/ProxyComponent">ProxyComponent</Link></li>
                    </ul>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default Router;
