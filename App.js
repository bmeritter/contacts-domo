import React, {Component} from 'react';
import {NavigatorIOS} from 'react-native';
import ContactList from './app/component/contactList';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from './app/reducer/index';
import thunkMiddleware from 'redux-thunk';

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <NavigatorIOS
                    style={{ flex: 1 }}
                    initialRoute={{
                        component: ContactList,
                        title: 'contacts',
                        passProps: {},
                    }}
                />
            </Provider>
        );
    }
}
