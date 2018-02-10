import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

import React, { Component } from 'react';
import TemplateTitle from '../widget/TemplateTitle.js';

export default class minapp extends  Component{
    render(){
        return(
            <View style={styles.container}>
                <TemplateTitle title='小程序'></TemplateTitle>

                <View style={styles.orderBar}>
                    <Text style={styles.orderBarText}>订单管理</Text>
                    <View style={styles.orderBarMore}>
                        <Text style={styles.orderBarTip}>查看全部订单</Text>
                        <Image style={styles.orderBarImg} source={require("../banner/ic_youjiantou.png")}></Image>
                    </View>
                </View>

                <View style={[styles.orderEase,{marginTop:1}]}>
                    <View style={styles.orderEaseItem}>

                        <View style={styles.orderEaseContent}>
                            <Image style={{width: 30,height: 30}} source={require("../banner/ic_yifahuo.png")}></Image>
                            <Text style={{marginTop:10,color:'#323232'}}>已付款</Text>
                        </View>

                    </View>

                    <View style={styles.orderEaseItem}>
                        <View style={styles.orderEaseContent}>
                            <Image style={{width: 30,height: 30}} source={require("../banner/ic_yiqianshou.png")}></Image>
                            <Text style={{marginTop:10,color:'#323232'}}>待付款</Text>
                        </View>
                    </View>

                    <View style={styles.orderEaseItem}>
                        <View style={styles.orderEaseContent}>
                            <Image style={{width: 30,height: 30}} source={require("../banner/ic_yiquxiao.png")}></Image>
                            <Text style={{marginTop:10,color:'#323232'}}>已取消</Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.orderItem,{marginTop:10}]}>
                    <View style={styles.orderItemLeft}>
                        <Image style={{width: 22,height: 22,marginLeft:10}} source={require("../banner/ic_merchants_setting.png")}></Image>
                        <Text style={{color:'#323232',marginLeft:10}}>商家设置</Text>
                    </View>
                    <Image style={[styles.orderBarImg,{marginRight:20}]} source={require("../banner/ic_youjiantou.png")}></Image>
                </View>

                <View style={[styles.orderItem,{marginTop:1}]}>
                    <View style={styles.orderItemLeft}>
                        <Image style={{width: 22,height: 22,marginLeft:10}} source={require("../banner/ic_dining_table_code.png")}></Image>
                        <Text style={{color:'#323232',marginLeft:10}}>餐桌二维码</Text>
                    </View>
                    <Image style={[styles.orderBarImg,{marginRight:20}]} source={require("../banner/ic_youjiantou.png")}></Image>
                </View>

                <View style={[styles.orderItem,{marginTop:1}]}>
                    <View style={styles.orderItemLeft}>
                        <Image style={{width: 22,height: 22,marginLeft:10}} source={require("../banner/ic_hold_service.png")}></Image>
                        <Text style={{color:'#323232',marginLeft:10}}>呼叫服务</Text>
                    </View>
                    <Image style={[styles.orderBarImg,{marginRight:20}]} source={require("../banner/ic_youjiantou.png")}></Image>
                </View>

                <View style={[styles.orderItem,{marginTop:1}]}>
                    <View style={styles.orderItemLeft}>
                        <Image style={{width: 22,height: 22,marginLeft:10}} source={require("../banner/ic_net_remark.png")}></Image>
                        <Text style={{color:'#323232',marginLeft:10}}>网友点评</Text>
                    </View>
                    <Image style={[styles.orderBarImg,{marginRight:20}]} source={require("../banner/ic_youjiantou.png")}></Image>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2f2f2',
    },
    orderBar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#ffffff',
      height: 50,
    },

    orderBarImg:{
      flexDirection: 'row',
      marginLeft: 10,
      marginRight: 15,
    },

    orderBarMore: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

    orderBarText:{
      color: '#323232',
      fontSize: 16,
      marginLeft: 13,
    },

    orderBarTip: {
      fontSize: 16,
    },

    orderEase:{
      width: '100%',
      flexDirection: 'row',
      height: 100,
      backgroundColor: '#ffffff',
    },

    orderEaseItem:{
      flex: 1,
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
    },

    orderEaseContent:{
        alignItems: 'center',
    },

    orderItem:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 50,
      backgroundColor: '#ffffff',
    },

    orderItemLeft:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

    }

);
