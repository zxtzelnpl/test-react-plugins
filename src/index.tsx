import * as React from 'react';
import * as ReactDOM from 'react-dom';

import PhotoSwipe  from './components/PhotoSwipe';

import * as classNames from 'classnames/bind';
const styles = require('./index.less');
const cx = classNames.bind(styles);

const App = () => <div className={cx('app')}>
    <PhotoSwipe />
</div>;

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);
