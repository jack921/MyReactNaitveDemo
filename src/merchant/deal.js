import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
} from 'react-native';

export default class deal extends Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
            <TextInput style={styles.container_item_input}
                       placeholder ={'请输入'}
                       underlineColorAndroid='transparent'/>
            <TextInput placeholder ={'请输入2'} />
            </View>
        );
    }

}

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



