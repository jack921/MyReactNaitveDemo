'use strict';
import * as types from '../constants/minappTypes';

const initialState={
    status: 'Jack',
}

export default function minappTest(state=initialState,action){
    switch(action.type){
        case types.MIN_APP_STATUS:
            return{
                ...state,
                status: action.status,
            }
            break;
        default:
            return state;
    }
}





