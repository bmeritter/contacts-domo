import React from 'react';
import {ScrollView, Text} from 'react-native';
import ContactDetail from "./contactDetail";

export default class ContactList extends React.Component {
    constructor(props) {
        super(props);

        this.goTo = this.goTo.bind(this);
    }

    goTo() {
        this.props.navigator.push({
            component: ContactDetail,
            title: 'contacts',
        });
    }

    render() {
        return (
            <ScrollView>
                <Text onPress={this.goTo}>contact 1</Text>
                <Text onPress={this.goTo}>contact 2</Text>
                <Text onPress={this.goTo}>contact 3</Text>
            </ScrollView>
        );
    }
}