import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store from 'store';
import MainContainer from 'containers/MainContainer';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={MainContainer}></Route>
        </Router>
    </Provider>,
    document.getElementById('app-container')
);
