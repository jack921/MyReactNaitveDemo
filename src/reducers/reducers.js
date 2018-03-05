'use strict';

import { combineReducers } from 'redux';
import minapp from './minappreducers';
import payReducers from './PayReducers';

const rootReducer=combineReducers({
    minapp: minapp,
    payReducers: payReducers,
});

export default rootReducer;




