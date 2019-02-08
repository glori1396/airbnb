import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import * as ReactRedux from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { store } from './Redux/Reducer'
import PrincipalPage from './App/Login/PrincipalPage'

import Root from './App/Root.js'

ReactDOM.render(
    <BrowserRouter>
        <ReactRedux.Provider store={store}>
            <React.Fragment>
                <Root>
                    <Switch>
                        <Route exact path="/" component={PrincipalPage} />
                        <Route path="/h" component={App} />
                    </Switch>
                </Root>
            </React.Fragment>
        </ReactRedux.Provider>
    </BrowserRouter>,
    document.getElementById('root'));

serviceWorker.register();
