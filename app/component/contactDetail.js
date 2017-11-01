import React, { Component } from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import contacts from '../data/fixture';

export default class ContactDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {contacts, index} = this.props;
        const contact = contacts[index];
        return (
            <ScrollView>
                <View style={styles.containers}>
                    <Image style={styles.image}
                           source={require('../image/001.jpg')}/>

                    <Text style={styles.name}>{contact.name}</Text>
                </View>
                <Text style={styles.contactText}>电话：{contact.phoneNumber}</Text>
                <Text style={styles.contactText}>生日：{contact.birthday}</Text>
                <Text style={styles.contactText}>地址：{contact.address}</Text>
                <Text style={styles.contactText}>公司名称：{contact.company}</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    containers: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        paddingBottom: 50,
        borderColor: 'grey',
        borderWidth: 1,
    },
    name: {
        fontSize: 40,
        marginBottom: 20,
    },
    contactText: {
        padding: 10,
        lineHeight: 20,
        fontSize: 20,
    },
});