import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/ConfigureStore';
import Main from './Main.js';

const store=configureStore();
export default class Root extends Component{

    render() {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        );
    }

}
