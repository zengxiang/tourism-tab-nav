'use strict';
import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

// components
import navBarIcon from './components/navTabIcon';

// pages
import Home from './../Home/home';
import HomeDetail from './../Home/homeDetail';

import Page2 from './page2';
import Page3 from './page3';

export default class Frame extends Component {
    render() {
        let rightButton = () => {
            return (
                <View style={{flexDirection: 'row'}}>
                    <Text style={{marginRight: 10}}>收藏</Text>
                    <Text>分享</Text>
                </View>
            );
        };

        return (
            <Router key='modal'>
                <Scene key='root'>
                    <Scene key='tabbar' tabs={true}>
                        <Scene key='tab1'  title='首页' icon={navBarIcon} idx={0} initial={true}>
                            <Scene
                                key="Home"
                                component={Home}
                                title="首页"
                            />
                            <Scene
                                key="HomeDetail"
                                component={HomeDetail}
                                hideTabBar
                                title="首页详情"
                            />

                        </Scene>
                        <Scene key='tab2' component={Page2} title='消息' icon={navBarIcon} idx={1}
                               navigationBarStyle={{backgroundColor: 'red'}} titleStyle={{color: 'white'}}/>
                        <Scene key='tab3' component={Page3} title='发现' icon={navBarIcon} idx={2}
                               titleStyle={{color: 'blue'}} renderRightButton={rightButton}/>
                        <Scene key='tab4' component={Page2} title='我的' icon={navBarIcon} idx={3}
                               onLeft={() => alert("Left button!")} leftTitle="Left"
                               onRight={() => alert("Right button")}
                               rightTitle="Right"/>
                    </Scene>
                </Scene>

                {/*//公共页面最好这写这里 方便重用*/}
                <Scene
                    key="Page1_2"
                    component={HomeDetail}
                    title="Page1_1"
                />
            </Router>
        );
    }
}
