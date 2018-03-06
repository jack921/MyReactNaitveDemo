import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    FlatList,
    StyleSheet,
    ToastAndroid,
} from 'react-native';

import TemplateTitle from '../widget/TemplateTitle.js';
import *as PayAction from '../action/PayAction';
import { connect } from 'react-redux';
import PayItem from './PayItem.js';

class Pay extends Component{

    render(){
        const { sourceData } =this.props;
        return(
            <View style={styles.container}>
                <TemplateTitle
                    title='附近配送'
                    rightText='保存'
                    img='true'
                    backOnClick={this.backOnClick.bind(this)}
                    rightOnClick={this.rightOnClick.bind(this)}></TemplateTitle>
                <FlatList
                    ListHeaderComponent={this._headerView}
                    ListFooterComponent={this._footerView}
                    ListEmptyComponent={this._emptyComponent}
                    renderItem={this._renderItem}
                    refreshing={false}
                    data={sourceData}></FlatList>
            </View>
        );
    }

    _renderItem=({item,index})=>{
        const { sourceData,ChangItemData } =this.props;
        return (
           <PayItem
               index={index}
               sourceData={item}
               sendStart={(index,text)=>{
                   // sourceData[index].startSend=text;
                   ChangItemData(sourceData,text,1,index)
               }}
               sendEnd={(index,text)=>{
                   // sourceData[index].endSend=text;
                   ChangItemData(sourceData,text,2,index)
               }}
               qsMoney={(index,text)=>{
                   // sourceData[index].qs_money=text;
                   ChangItemData(sourceData,text,3,index)
               }}
               psMoney={(index,text)=>{
                   // sourceData[index].ps_money=text;
                   ChangItemData(sourceData,text,4,index)
               }}
               freeMoney={(index,text)=>{
                   // sourceData[index].free_money=text;
                   ChangItemData(sourceData,text,5,index)
               }}
           ></PayItem>
        );
    }

    _headerView=()=>{
        return (
            <Text style={styles.pay_tip}>请选择支持配送的附近范围,并填写对应的费用</Text>
        )
    }

    backOnClick(){
        this.props.navigation.goBack();
    }

    _footerView=()=>{
        const { AddPayItem ,sourceData}=this.props;
        return(
            <View style={styles.container}>
                <Text style={styles.pay_tip}>注:不在此配送范围内则不赠送</Text>
                <View style={styles.bottom_ease}>
                    <Button
                        onPress={this._deleteSend.bind(this)}
                        title="删除配送范围"
                        color="#D0D0D0"/>
                    <View style={{width:80}}></View>
                    <Button
                        onPress={()=>AddPayItem(sourceData)}
                        title="增加配送范围"
                        color="#329DFF"/>
                </View>
            </View>
        )
    }

    _emptyComponent(){
        return <View><Text>空</Text></View>
    }

    _deleteSend(){
        let list=[];
        list=list.concat(this.state.sourceData);
        list.splice(0,this.state.sourceData.length);
        this.setState({sourceData:list});
    }

    rightOnClick(){
        const { sourceData}=this.props;
        let data='';
        for(var i=0;i<sourceData.length;i++){
            data+=":"+sourceData[i].startSend+":"+sourceData[i].endSend+":"
                +sourceData[i].qs_money+":"+sourceData[i].ps_money+":"+sourceData[i].free_money;
        }
        console.log(data);
        console.log(sourceData)
    }

}

export default connect(
    (state)=>({
        sourceData: state.payReducers.sourceData,
        name: state.payReducers.name,
    }),
    (dispatch)=>({
        AddPayItem: (sourceData)=>dispatch(PayAction.AddPayItem(sourceData)),
        ChangItemData: (sourceData,data,type,index)=>dispatch(PayAction.ChangeItemData(sourceData,data,type,index)),
    })
)(Pay)

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2'
    },
    pay_tip:{
        color: '#888888',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 8,
    },
    bottom_ease:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 60,
    }
});

