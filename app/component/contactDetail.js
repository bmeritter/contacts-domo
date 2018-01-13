import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import { NativeModules } from 'react-native';
const PhoneCall = NativeModules.PhoneCall;

class ContactDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {contact} = this.props;
        return (
            <ScrollView>
                <View style={styles.containers}>
                    <Image style={styles.image}
                           source={require('../image/001.jpg')}/>

                    <Text style={styles.name}>{contact.name}</Text>
                </View>
                <TouchableOpacity onPress={() => PhoneCall.call(contact.phoneNumber)}>
                    <Text style={styles.contactText}>电话：{contact.phoneNumber}</Text>
                </TouchableOpacity>
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

const mapStateToProps = state => ({contacts: state.contacts});

export default connect(mapStateToProps)(ContactDetail);