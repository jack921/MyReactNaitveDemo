import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import Merchant from'./src/merchant/merchant.js';
import MinApp from'./src/minapp/minapp.js';
import My from './src/myapp/my.js';

import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedTab: 'merchant',
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <TabNavigator >
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'merchant'}
                        title="店铺管理"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("./image/ic_shop_uncheck.png")} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("./image/ic_shop_check.png")} />}
                        onPress={() => this.setState({ selectedTab: 'merchant' })}>
                        <Merchant navigation={navigate}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'minapp'}
                        title="小程序"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("./image/ic_wxapp_uncheck.png")} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("./image/ic_wxapp_check.png")} />}
                        onPress={() => this.setState({ selectedTab: 'minapp' })}>
                        <MinApp/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'my'}
                        title="我的"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("./image/ic_me_uncheck.png")} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("./image/ic_me_check.png")} />}
                        onPress={() => this.setState({ selectedTab: 'my' })}>
                        <My/>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    tabText: {
        color: '#000000',
        fontSize: 11
    },
    selectedTabText: {
        color: '#329cff'
    },
    icon: {
        width: 18,
        height: 18
    },
});