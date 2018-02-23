import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Root from './src/Root.js';

class index extends Component{
    render() {
        return (
            <Root />
        );
    }
}

AppRegistry.registerComponent('MyReactNaitveDemo', () => index);
