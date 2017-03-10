import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store from 'store';
import Root from 'components/Root';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Root}></Route>
        </Router>
    </Provider>,
    document.getElementById('app-container')
);
