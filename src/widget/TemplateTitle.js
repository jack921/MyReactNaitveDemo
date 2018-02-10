import {
    StyleSheet,
    TouchableOpacity,
    ToastAndroid,
    View,
    Text,
    Image,
} from 'react-native';

import React, { Component } from 'react';

export default class TemplateTitle extends Component{

    render(){
        return(
            <View style={styles.titleBar}>
                {this._showTitle()}
                {this._showTitleImage()}
                {this._showRightTitle()}
            </View>
        );
    }

    _showTitle(){
        if(this.props.title==null){
            return null;
        }
        return(
            <View style={styles.titleTextEase}>
                <Text style={styles.titleText}>{this.props.title}</Text>
            </View>
        )
    }

    _showTitleImage(){
        if(this.props.img==null){
            return null;
        }
        return(
                <View style={styles.titleImageEase} >
                    <TouchableOpacity onPress={this.props.backOnClick} activeOpacity={0.5}>
                        <Image style={styles.titleImage} source={require("../banner/ic_back.png")}></Image>
                    </TouchableOpacity>
                </View>
        )
    }

    _showRightTitle(){
        if(this.props.rightText==null){
            return null;
        }
        return(
            <View style={styles.titleTextRightEase}>
                <TouchableOpacity onPress={this.props.rightOnClick} activeOpacity={0.5}>
                    <Text style={styles.titleTextRight}>{this.props.rightText}</Text>
                </TouchableOpacity>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },

    titleBar: {
      height: 50,
      width: "100%",
      flexDirection: 'row',
      backgroundColor: '#329CFF',
    },

    titleImageEase: {
      width: 40,
      height: 50,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
    },

    titleImage: {
      width: 12,
      height: 22,
      marginLeft: 15,
      marginRight: 10,
    },

    titleTextEase:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    titleTextRightEase: {
        width: 40,
        height: 50,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        right: 0,
        marginRight: 15,
    },

    titleTextRight: {
      color: '#ffffff',

    },

    titleText: {
        color: '#ffffff',
        fontSize: 17,
    },

});