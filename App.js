import React from 'react';
import {NavigatorIOS} from 'react-native';
import ContactList from "./app/component/contactList";

export default class App extends React.Component {
    render() {
        return (
            <NavigatorIOS
                style={{flex: 1}}
                initialRoute={{
                    component: ContactList,
                    title: 'Contacts',
                    passProps: {},
                }}
            />
        );
    }
}
