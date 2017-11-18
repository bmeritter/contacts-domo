import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './app/reducer/index';
import thunkMiddleware from 'redux-thunk';
import AppRouter from "./app/router";

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppRouter/>
            </Provider>
        );
    }
}
