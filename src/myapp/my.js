import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
} from 'react-native';

import React, {Component} from 'react';

export default class my extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.containerMain}>
                        <Image style={{height: 250, width: '100%', position: 'absolute'}}
                               source={require("../banner/ic_my_bg.png")}></Image>
                        <View style={styles.containerUse}>
                            <Image style={{width: 70, height: 70}}
                                   source={require("../banner/ic_avatar_default.png")}></Image>
                            <Text style={{color: '#ffffff', fontSize: 20, marginTop: 10}}>全国总店</Text>
                        </View>
                    </View>

                    <View style={[styles.moneyItem]}>
                        <View style={styles.moneyItemLeft}>
                            <Image style={{width: 22, height: 22, marginLeft: 10}}
                                   source={require("../banner/ic_merchants_setting.png")}></Image>
                            <Text style={{color: '#323232', marginLeft: 10}}>储值:100.00</Text>
                        </View>
                    </View>

                    <View style={[styles.myItem,{marginTop:10}]}>
                        <View style={styles.myItemLeft}>
                            <Image style={{width: 22,height: 22,marginLeft:10}} source={require("../banner/ic_merchants_setting.png")}></Image>
                            <Text style={{color:'#323232',marginLeft:10}}>我的钱包</Text>
                        </View>
                        <Image style={[styles.myItemImg,{marginRight:20}]} source={require("../banner/ic_youjiantou.png")}></Image>
                    </View>

                    <View style={[styles.myItem,{marginTop:1}]}>
                        <View style={styles.myItemLeft}>
                            <Image style={{width: 22,height: 22,marginLeft:10}} source={require("../banner/ic_merchants_setting.png")}></Image>
                            <Text style={{color:'#323232',marginLeft:10}}>切换门店</Text>
                        </View>
                        <Image style={[styles.myItemImg,{marginRight:20}]} source={require("../banner/ic_youjiantou.png")}></Image>
                    </View>

                    <View style={[styles.myItem,{marginTop:1}]}>
                        <View style={styles.myItemLeft}>
                            <Image style={{width: 22,height: 22,marginLeft:10}} source={require("../banner/ic_merchants_setting.png")}></Image>
                            <Text style={{color:'#323232',marginLeft:10}}>员工管理</Text>
                        </View>
                        <Image style={[styles.myItemImg,{marginRight:20}]} source={require("../banner/ic_youjiantou.png")}></Image>
                    </View>

                    <View style={[styles.myItem,{marginTop:10}]}>
                        <View style={styles.myItemLeft}>
                            <Image style={{width: 22,height: 22,marginLeft:10}} source={require("../banner/ic_merchants_setting.png")}></Image>
                            <Text style={{color:'#323232',marginLeft:10}}>常见问题</Text>
                        </View>
                        <Image style={[styles.myItemImg,{marginRight:20}]} source={require("../banner/ic_youjiantou.png")}></Image>
                    </View>

                    <View style={[styles.myItem,{marginTop:1}]}>
                        <View style={styles.myItemLeft}>
                            <Image style={{width: 22,height: 22,marginLeft:10}} source={require("../banner/ic_merchants_setting.png")}></Image>
                            <Text style={{color:'#323232',marginLeft:10}}>基本设置</Text>
                        </View>
                        <Image style={[styles.myItemImg,{marginRight:20}]} source={require("../banner/ic_youjiantou.png")}></Image>
                    </View>

                    <View style={[styles.myItem,{marginTop: 1,marginBottom: 30}]}>
                        <View style={styles.myItemLeft}>
                            <Image style={{width: 22,height: 22,marginLeft:10}} source={require("../banner/ic_merchants_setting.png")}></Image>
                            <Text style={{color:'#323232',marginLeft:10}}>关于我们</Text>
                        </View>
                        <Image style={[styles.myItemImg,{marginRight:20}]} source={require("../banner/ic_youjiantou.png")}></Image>
                    </View>

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#f2f2f2',
        },

        containerMain: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },

        containerUse: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
        },

        moneyItem: {
            backgroundColor: '#ffffff',
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 55,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 30,
        },

        moneyItemLeft: {
            flexDirection: 'row',
            alignItems: 'center',
        },

        myItem:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 50,
            backgroundColor: '#ffffff',
        },

        myItemLeft:{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },

        myItemImg:{
            flexDirection: 'row',
            marginLeft: 10,
            marginRight: 15,
        },

    }
);
