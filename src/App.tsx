import * as React from 'react';

import PhotoSwipe  from './components/PhotoSwipe';

// import { Hello } from "./components/Hello";
// import SimpleTransition from './reactMotionDemos/SimpleTransition';
// import ChatHeads from './reactMotionDemos/ChatHeads';
// import DraggableBalls from './reactMotionDemos/DraggableBalls';
// import RequestAndCancel from './components/RequestAndCancel'
import ProxyComponent from './ES6Component/ProxyComponent';

import * as classNames from 'classnames/bind';
const styles = require('./App.less');
const cx = classNames.bind(styles);

const App = () => (
    <div className={cx('app')}>
        <ProxyComponent />
    </div>
);

export default App;
