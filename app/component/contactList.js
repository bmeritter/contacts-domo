import React, {Component} from 'react';
import {Image, ListView, StyleSheet, Text, TouchableOpacity} from 'react-native';

import ContactDetail from './contactDetail';
import contacts from '../data/fixture';
import {loadContacts} from '../action/contact';
import {connect} from 'react-redux';

class ContactList extends Component {
    constructor() {
        super();
        this.state = {
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
            contacts: contacts,
        };
    }

    goTo = (index) => {
        return () => {
            this.setState({ currentIndex: index });
            this.props.navigator.push({
                component: ContactDetail,
                passProps: {
                    index,
                }
            });
        }

    };

    renderRow = ({ name }, sectionId, rowId) => {
        return (
            <TouchableOpacity style={styles.contact} key={rowId} onPress={this.goTo(rowId)}>
                <Image style={styles.image}
                       source={require('../image/001.jpg')}/>
                <Text style={styles.username}>{name}</Text>
            </TouchableOpacity>
        );
    };

    onEndReached = () => {
        this.props.loadContacts();
    };

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource.cloneWithRows(this.props.contacts)}
                renderRow={this.renderRow}
                onEndReachedThreshold={0.5}
                onEndReached={this.onEndReached}
            />
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
        width: 50,
        height: 50,
        borderRadius: 25,
        paddingBottom: 25,
        borderColor: 'grey',
        borderWidth: 1,
    },
    username: {
        padding: 5,
    }
});

const mapStateToProps = state => ({ contacts: state.contacts });

const mapDispatchToProps = (dispatch) => {
    return {
        loadContacts: () => {
            dispatch(loadContacts());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);