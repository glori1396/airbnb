import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import * as ReactRedux from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { store } from './Redux/Reducer'
import Homes from './App/Places/Homes'
import Explore from './App/Explore/Explore'

import Root from './App/Root.js'

ReactDOM.render(
    <BrowserRouter>
        <ReactRedux.Provider store={store}>
            <React.Fragment>
                <Root>
                    <Switch>
                        <Route exact path="/" component={Explore} />
                        <Route path="/h" component={App} />
                    </Switch>
                </Root>
            </React.Fragment>
        </ReactRedux.Provider>
    </BrowserRouter>,
    document.getElementById('root'));

serviceWorker.unregister();