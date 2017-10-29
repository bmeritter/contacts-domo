import React from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import ContactDetail from "./contactDetail";

import contacts from '../data/fixture';

export default class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.goTo = this.goTo.bind(this);
    }

    goTo(index) {
        this.setState({currentIndex: index}, () => {

        });
        this.props.navigator.push({
            component: ContactDetail,
            title: 'contacts',
            passProps: {index}
        });
    }

    render() {
        return (
            <ScrollView>
                {
                    contacts.map((contact, index) => {
                        return (
                            <TouchableOpacity style={styles.contact} key={index} onPress={this.goTo.bind(this, index)}>
                                <Image style={styles.image}
                                       source={require('../image/001.jpg')}/>
                                <Text style={styles.username}>{contact.name}</Text>
                            </TouchableOpacity>
                        );
                    })
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    contact: {
        flex: 1,
        flexDirection: 'row',
        borderColor: 'grey',
        borderWidth: 1,
        padding: 5,
    },
    image: {
        width: 50, height: 50,
    },
    username: {
        padding: 5,
    }
});