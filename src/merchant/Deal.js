import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button
} from 'react-native';

import *as DealAction from '../action/DealAction';
import { connect } from 'react-redux';

class Deal extends Component{

    constructor(props){
        super(props);
        this.state={
            name:'Jack',
        }
    }

    render() {
        const { dealMessage,DealMessageItem } =this.props;
        return (
            <View style={styles.container}>
                <Text>{this.state.name}</Text>
                <Text>{dealMessage}</Text>
                <Button onPress={()=>{this._onButtonPress(DealMessageItem)}} title="change"/>
            </View>
        );
    }

    _onButtonPress(DealMessageItem){
        this.setState({'name':'谢汉杰'});
        DealMessageItem("git");
    }

}

export default connect(
    (state)=>({
        dealMessage: state.dealReducers.dealMessage,
    }),
    (dispatch)=>({
        DealMessageItem: (sourceData)=>dispatch(DealAction.DealMessageItem(sourceData)),
    })
)(Deal)

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#f2f2f2'
    },

    container_item_input:{
        borderRadius: 10,
        borderColor: '#C6C7CD',
        borderWidth: 1,
        width: 300,
        height: 37,
        fontSize: 13,
        backgroundColor: 'white',
    },

});



