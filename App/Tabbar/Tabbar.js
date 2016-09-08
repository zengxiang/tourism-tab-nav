'use strict';
import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

// components
import TabbarItem from './TabbarItem';

// pages
import Home from './../Home/home';
import HomeDetail from './../Home/homeDetail';

// import Page2 from './page2';
// import Page3 from './page3';
export default class TabbarVC extends Component {
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
                    <Scene key='tabbar' tabs={true} style={{backgroundColor:'#eeeeee'}}>
                        <Scene key='tab1'  title='首页' icon={TabbarItem} idx={0} initial={true}>
                            <Scene
                                key="Home"
                                component={Home}
                                title="首页"
                            />
                            <Scene
                                key="HomeDetail"
                                component={HomeDetail}
                                title="首页详情"
                            />
                            <Scene
                                key="HomeDetail1"
                                component={HomeDetail}
                                hideNavBar
                                title="首页详情"
                            />
                            <Scene
                                key="HomeDetail2"
                                component={HomeDetail}
                                hideTabBar
                                title="首页详情"
                            />

                        </Scene>
                        <Scene key='tab2' component={Home} title='消息' icon={TabbarItem} idx={1}
                               navigationBarStyle={{backgroundColor: 'red'}} titleStyle={{color: 'white'}}/>
                        <Scene key='tab3' component={Home} title='发现' icon={TabbarItem} idx={2}
                               titleStyle={{color: 'blue'}} renderRightButton={rightButton}/>
                        <Scene key='tab4' component={Home} title='我的' icon={TabbarItem} idx={3}
                               onLeft={() => alert("Left button!")} leftTitle="Left"
                               onRight={() => alert("Right button")}
                               rightTitle="Right"/>
                    </Scene>
                </Scene>
            </Router>
        );
    }
}
