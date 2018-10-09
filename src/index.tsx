import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Router from './router/index';

import './index.less';

const App = () => <React.Fragment>
    <Router />
</React.Fragment>;

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);
