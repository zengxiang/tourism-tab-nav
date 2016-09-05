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

    _pressButton(title) {
        const {navigator} = this.props;
        // if (navigator) {
        // 	navigator.push({
        // 		name: 'Page11',
        // 		component: Page11,
        // 		params: {
        // 			title: title,
        // 		},
        // 	});
        // }

        alert(title);
    }

    _handlePress() {
        Actions.HomeDetail();
    }

    render() {

        let pushNext = ()=>alert('下一个');
        return (
            <View style={{margin: 64}}>
                <Text onPress={Actions.tab3}>This is PageOne!</Text>
                <Button onPress={()=>this._pressButton('2222')}>push</Button>
                <Button onPress={Actions.HomeDetail}>push11</Button>

                <Button
                    style={{fontSize: 20, color: 'green'}}
                    styleDisabled={{color: 'red'}}
                    onPress={this._handlePress}>
                    Press Me!
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
