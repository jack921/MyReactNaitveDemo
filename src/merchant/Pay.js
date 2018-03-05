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
        const { sourceData , name } =this.props;
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
        return (
           <PayItem
               index={index}
               sourceData={item}
               sendStart={(index,text)=>{
                   // this.state.sourceData[index].startSend=text;
               }}
               sendEnd={(index,text)=>{
                   // this.state.sourceData[index].endSend=text;
               }}
               qsMoney={(index,text)=>{
                   // this.state.sourceData[index].qs_money=text;
               }}
               psMoney={(index,text)=>{
                   // this.state.sourceData[index].ps_money=text;
               }}
               freeMoney={(index,text)=>{
                   // this.state.sourceData[index].free_money=text;
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

    _createSend(){
        // let list=[];
        // list=list.concat(this.state.sourceData);
        // list.push({
        //     startSend: '',
        //     endSend:'',
        //     qs_money:'',
        //     ps_money:'',
        //     free_money:'',
        // });
        // this.setState({sourceData:list});
    }

    rightOnClick(){
        let test='';
        for(let i=0;i<this.state.sourceData.length;i++){
            test+=this.state.sourceData[i].startSend;
        }
        ToastAndroid.show(test,ToastAndroid.SHORT);
    }

}

export default connect(
    (state)=>({
        sourceData: state.payReducers.sourceData,
        name: state.payReducers.name,
    }),
    (dispatch)=>({
        AddPayItem: (sourceData)=>dispatch(PayAction.AddPayItem(sourceData)),
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

