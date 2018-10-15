import * as React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import PhotoSwipe  from '../components/PhotoSwipe';

import { Hello } from '../components/Hello';
import SimpleTransition from '../reactMotionDemos/SimpleTransition';
import ChatHeads from '../reactMotionDemos/ChatHeads';
import DraggableBalls from '../reactMotionDemos/DraggableBalls';
import RequestAndCancel from '../components/RequestAndCancel';
import ProxyComponent from '../ES6Component/ProxyComponent';
import UnstableBatchedUpdatesTest1 from '../unstable_batchedUpdates/Test1';
import UnstableBatchedUpdatesTest2 from '../unstable_batchedUpdates/Test2';
import AddDomEventListenerTest from '../add-dom-event-listener/Test';

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
                    <Route exact path="/unstable_batchedUpdates/Test1" component={UnstableBatchedUpdatesTest1} />
                    <Route exact path="/unstable_batchedUpdates/Test2" component={UnstableBatchedUpdatesTest2} />
                    <Route exact path="/add_dom_event_listener/Test" component={AddDomEventListenerTest} />
                    <hr/>
                    <ul className={ulClassName}>
                        <li><Link to="/">Hello</Link></li>
                        <li><Link to="/SimpleTransition">SimpleTransition</Link></li>
                        <li><Link to="/ChatHeads">ChatHeads</Link></li>
                        <li><Link to="/DraggableBalls">DraggableBalls</Link></li>
                        <li><Link to="/RequestAndCancel">RequestAndCancel</Link></li>
                        <li><Link to="/PhotoSwipe">PhotoSwipe</Link></li>
                        <li><Link to="/ProxyComponent">ProxyComponent</Link></li>
                        <li><Link to="/unstable_batchedUpdates/Test1">/unstable_batchedUpdates_Test1</Link></li>
                        <li><Link to="/unstable_batchedUpdates/Test2">/unstable_batchedUpdates_Test2</Link></li>
                        <li><Link to="/add_dom_event_listener/Test">/AddDomEventListenerTest</Link></li>
                    </ul>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default Router;
