import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Banner extends  Component{

    render(){
        return(
           <View style={styles.container}>
               <Text>Jack</Text>
           </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
    },
});
