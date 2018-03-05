'use strict';

import * as types from '../constants/PayTypes';

const initialState={
    sourceData: [
        {
            startSend: '1',
            endSend:'2',
            qs_money:'3',
            ps_money:'4',
            free_money:'5',
        }
    ],
}

export default function AddPayItem(state=initialState,action){
    switch(action.type){
        case types.PAY_ADD_ITEM:
            return{
                ...state,
                sourceData: action.sourceData,
            }
            break;
        default:
            return state;
    }
}



