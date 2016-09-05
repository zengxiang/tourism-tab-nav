/**
 * Created by zengxiang on 16/9/5.
 */
'use strict'
import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';

export default class Page1_1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button onPress={Actions.pop}>返回</Button>

                <Text style={styles.welcome} onPress={Actions.pop}>
                    Welcome to Page1_1 {this.props.title}
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
            </View>
        );
    }
}

const styles =  {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
} ;
