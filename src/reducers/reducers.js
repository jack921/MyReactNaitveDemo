'use strict';

import { combineReducers } from 'redux';
import minapp from './minappreducers';

const rootReducer=combineReducers({
    minapp: minapp,
});

export default rootReducer;




