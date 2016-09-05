/**
 * Created by zengxiang on 16/9/5.
 */

'use strict';
import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import Button from 'react-native-button';

import {Actions} from 'react-native-router-flux';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _handlePress() {
        Actions.HomeDetail();
    }

    render() {

        let pushNext = ()=>alert('下一个');
        return (
            <View style={{margin: 64}}>
                <Button onPress={Actions.tab2}>跳到消息页面</Button>
                <Button onPress={Actions.HomeDetail}>push Detail</Button>
                <Button
                    style={{fontSize: 20, color: 'green'}}
                    styleDisabled={{color: 'red'}}
                    onPress={this._handlePress}>
                    push Detail(方法里跳转)
                </Button>
            </View>
        )
    }
}

const styles = {
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
};
