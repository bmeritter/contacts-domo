import React, {Component} from 'react';
import {Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class App extends Component {

    onPressRow() {
        Alert.alert("hello world");
    }

    render() {
        return (
            <ScrollView>
                <TouchableOpacity onPress={() => this.onPressRow()}>
                    <View>
                        <Text style={styles.header}>Contacts</Text>
                        <View style={styles.container}>
                            <Image style={styles.picture} source={require('./app/image/001.jpeg')}/>
                            <Text style={styles.userInfo}>username</Text>
                        </View>
                    </View>
                </TouchableOpacity>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: 'grey',
    },
    header: {
        fontSize: 30,
        padding: 15,
    },
    picture: {
        width: 50,
        height: 50,
    },
    userInfo: {
        padding: 10,
    },
});
