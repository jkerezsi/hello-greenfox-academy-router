import React from 'react';
import Navbar from './navbar'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './home'
import SimpleACorn from './states-app'
import App from './redux-app'

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
        <Navbar />
            <Route path='/home' component={Home} />
            <Route path='/simple/state' component={SimpleACorn} />
            <Route path='/simple/redux' component={App} />   
        </Provider>
    </BrowserRouter >,
    document.getElementById('root'),
);