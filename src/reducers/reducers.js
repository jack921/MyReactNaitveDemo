'use strict';

import { combineReducers } from 'redux';
import minapp from './minappreducers';
import payReducers from './PayReducers';
import dealReducers from './DealReducers';

const rootReducer=combineReducers({
    minapp: minapp,
    payReducers: payReducers,
    dealReducers: dealReducers,
});

export default rootReducer;




