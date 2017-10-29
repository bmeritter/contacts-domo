import React from 'react';
import {ScrollView, Text} from 'react-native';
import contacts from '../data/fixture';

export default class ContactDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const contact = contacts[this.props.index];
        return (
            <ScrollView>
                <Text>{contact.name}</Text>
                <Text>{contact.phoneNumber}</Text>
                <Text>{contact.photoPath}</Text>
            </ScrollView>
        );
    }
}