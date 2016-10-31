import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, match } from 'react-router';
import routes from './routes';

ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, document.getElementById('app'));
