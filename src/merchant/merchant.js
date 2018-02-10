import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ToastAndroid,
    TouchableOpacity
} from 'react-native';

import { IndicatorViewPager, PagerDotIndicator} from 'rn-viewpager';
var deviceWidth = Dimensions.get('window').width;

const BANNER_IMGS = [
    require('../banner/ic_day_data.png'),
    require('../banner/ic_month_data.png'),
    require('../banner/ic_week_data.png'),
    require('../banner/ic_yesterday_data.png')
];

const BANNER_NAME=[
    "今日数据","昨日数据","本周数据","本月数据"
]

export default class merchant extends  Component{

    render(){
        return(
            <View style={styles.container}>
                <IndicatorViewPager
                    style={{height:200}}
                    indicator={this._renderDotIndicator()}
                    autoPlayEnable={true}>
                    {this._bannerView()}
                </IndicatorViewPager>

                <View style={styles.grid_item_view}>
                    <View style={styles.grid_item_ease}>
                        <TouchableOpacity style={styles.grid_item} activeOpacity={0.5} onPress={()=>this._onSelectTab(0)}>
                            <View style={styles.item_view}>
                                <Image source={require('../banner/ic_cash_register.png')} style={styles.item_img}/>
                                <Text>收款</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.grid_item} activeOpacity={0.5} onPress={()=>this._onSelectTab(1)}>
                            <View style={styles.item_view}>
                                <Image source={require('../banner/ic_turnover_bill.png')} style={styles.item_img}/>
                                <Text>流水</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.grid_item} activeOpacity={0.5} onPress={()=>this._onSelectTab(2)}>
                            <View style={styles.item_view}>
                                <Image source={require('../banner/ic_check_account.png')} style={styles.item_img}/>
                                <Text>到账查询</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.grid_item_ease}>
                        <TouchableOpacity style={styles.grid_item} activeOpacity={0.5} onPress={()=>this._onSelectTab(3)}>
                            <View style={styles.item_view}>
                                <Image source={require('../banner/ic_report.png')} style={styles.item_img}/>
                                <Text>报表</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.grid_item} activeOpacity={0.5} onPress={()=>this._onSelectTab(4)}>
                            <View style={styles.item_view}>
                                <Image source={require('../banner/ic_merchant_money.png')} style={styles.item_img}/>
                                <Text>商品管理</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.grid_item} activeOpacity={0.5} onPress={()=>this._onSelectTab(5)}>
                            <View style={styles.item_view}>
                                <Image source={require('../banner/ic_members.png')} style={styles.item_img}/>
                                <Text>会员管理</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.grid_item_ease}>
                        <TouchableOpacity style={styles.grid_item} activeOpacity={0.5} onPress={()=>this._onSelectTab(6)}>
                            <View style={styles.item_view}>
                                <Image source={require('../banner/ic_coupons.png')} style={styles.item_img}/>
                                <Text>卡券管理</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.grid_item} activeOpacity={0.5} onPress={()=>this._onSelectTab(7)}>
                            <View style={styles.item_view}>
                                <Image source={require('../banner/ic_taiqian.png')} style={styles.item_img}/>
                                <Text>台签</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.grid_item} activeOpacity={0.5} onPress={()=>this._onSelectTab(8)}>
                            <View style={styles.item_view}>
                                <Image source={require('../banner/ic_check_account.png')} style={styles.item_img}/>
                                <Text>硬件管理</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            );
    }

    _bannerView(){
        var imageViews=[];
        for(i=0;i<BANNER_IMGS.length;i++){
            imageViews.push(
                <View  style={styles.banner}>
                    <View style={styles.banner_view}>
                        <Image source={BANNER_IMGS[i]} style={styles.img}/>
                        <View style={styles.banner_tip_view}>
                            <Text style={styles.banner_tip}>{BANNER_NAME[i]}</Text>
                        </View>
                        <View style={styles.banner_contract}>
                             <View style={styles.banner_contract_item}>
                                 <Text style={styles.banner_money}>0.00</Text>
                                 <Text style={styles.banner_tip}>今日收入(元)</Text>
                             </View>
                            <View style={styles.banner_contract_item2}>
                                <Text style={styles.banner_money}>123</Text>
                                <Text style={styles.banner_tip}>交易笔数(笔)</Text>
                            </View>
                        </View>
                    </View>
                </View>
            );
        }
        return imageViews;
    }

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={4} />;
    }

    _onSelectTab(index){
        if(index==0){
            this.props.navigation('Pay',{user:'Jack'});
        }else if(index==1){
            this.props.navigation('Deal',{user:'Deal'});
        }else{
            ToastAndroid.show('This is a toast with long duration'+index, ToastAndroid.SHORT);
        }
    }

}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'column',
        flex: 1,
    },

    banner:{
        height: '30%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    banner_view: {
        height: '90%',
        width: '90%',
        borderRadius: 10,
    },


    banner_tip:{
        marginTop: 30,
        fontSize: 20,
        color: '#ffffff',
    },

    banner_tip_view:{
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 10,
      position: 'absolute',
    },

    banner_contract:{
      width: '100%',
      justifyContent: 'center',
      flexDirection: 'row',
      position: 'absolute',
      marginTop: 50,
    },

    banner_contract_item:{
      justifyContent: 'center',
      alignItems: 'center',
    },

    banner_contract_item2:{
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 60,
    },

    banner_money:{
      color: '#ffffff',
      fontSize: 30,
    },

    banner_tip:{
      color: '#ffffff',
      fontSize: 18,
      marginTop: 10,
    },

    img: {
      height: '100%',
      width: '100%'
    },

    item_img:{
      height: 40,
      width: 40,
      marginBottom: 7,
    },

    item_view:{
        alignItems: 'center',
    },

    page: {
        width: deviceWidth,
        flex: 1,
        resizeMode: 'stretch'
    },

    grid_item_view:{
        width: deviceWidth,
        flex: 1,
    },

    grid_item_ease:{
        flexDirection: 'row',
        flex: 1,
    },

    grid_item:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },



});
