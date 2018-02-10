import { StackNavigator } from 'react-navigation';
import { AppRegistry } from 'react-native';
import App from './App';
import Pay from  './src/merchant/Pay.js';
import Deal from './src/merchant/deal.js';

const SimpleApp = StackNavigator({
    App: {screen:App },
    Pay:{screen:Pay},
    Deal:{screen:Deal},
},{
    headerMode: 'none',
});

AppRegistry.registerComponent('MyReactNaitveDemo', () => SimpleApp);
