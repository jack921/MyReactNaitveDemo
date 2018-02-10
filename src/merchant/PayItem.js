import {
    StyleSheet,
    View,
    Text,
    TextInput,
} from 'react-native';

import React, { Component } from 'react';

export default class PayItem extends Component{

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.container_item}>
                    <Text style={styles.container_item_text}>配送范围:</Text>
                    <View style={styles.container_item_right}>
                        <TextInput style={styles.container_item_input}
                                   underlineColorAndroid='transparent'
                                   onChangeText={(text)=>{
                                       this.props.sendStart(this.props.index,text);
                                   }}></TextInput>
                        <Text style={styles.container_item_text_tip}>KM~</Text>
                        <TextInput style={styles.container_item_input}
                                   underlineColorAndroid='transparent'
                                   onChangeText={(text)=>{
                                       this.props.sendEnd(this.props.index,text);
                                   }}></TextInput>
                        <Text style={styles.container_item_text_tip}>KM</Text>
                    </View>
                </View>

                <View style={styles.container_item}>
                    <Text style={styles.container_item_text}>起送金额:</Text>
                    <View style={styles.container_item_right}>
                        <TextInput style={styles.container_item_input}
                                   underlineColorAndroid='transparent'
                                   onChangeText={(text)=>{
                                       this.props.qsMoney(this.props.index,text);
                                   }}></TextInput>
                        <Text style={styles.container_item_text_tip2}>元</Text>
                    </View>
                </View>

                <View style={styles.container_item}>
                    <Text style={styles.container_item_text}>配送费用:</Text>
                    <View style={styles.container_item_right}>
                        <TextInput style={styles.container_item_input}
                                   underlineColorAndroid='transparent'
                                   onChangeText={(text)=>{
                                       this.props.psMoney(this.props.index,text);
                                   }}></TextInput>
                        <Text style={styles.container_item_text_tip2}>元</Text>
                    </View>
                </View>

                <View style={styles.container_item}>
                    <Text style={styles.container_item_text}>订单免费配送金额:</Text>
                    <View style={styles.container_item_right}>
                        <TextInput style={styles.container_item_input}
                                   underlineColorAndroid='transparent'
                                   onChangeText={(text)=>{
                                       this.props.freeMoney(this.props.index,text);
                                   }}></TextInput>
                        <Text style={styles.container_item_text_tip2}>元</Text>
                    </View>
                </View>

            </View>

        )
    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        height: 190,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 7,
        marginBottom: 7,
    },

    container_item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },

    container_item_text:{
        color: '#323232',
        marginLeft: 10,
        fontSize: 15,
    },

    container_item_text_tip:{
        color: '#888888',
        marginRight: 5,
        marginLeft: 5,
    },

    container_item_text_tip2:{
        color: '#888888',
        marginRight: 10,
        marginLeft: 5,
    },

    container_item_right:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },

    container_item_input:{
        borderRadius: 10,
        borderColor: '#C6C7CD',
        borderWidth: 1,
        width: 60,
        height: 35,
        fontSize: 12,
        backgroundColor: 'white',
    },


});




