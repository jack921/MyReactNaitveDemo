import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import App from '../App';
import Pay from  './merchant/Pay.js';
import Deal from './merchant/Deal.js';

const SimpleApp = StackNavigator({
    App: {screen:App },
    Pay:{screen:Pay},
    Deal:{screen:Deal},
},{
    headerMode: 'none',
});

export default SimpleApp
