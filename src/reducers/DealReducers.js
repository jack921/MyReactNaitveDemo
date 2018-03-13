import * as types from '../constants/DealTypes';

const initialState={
    dealMessage:'Test'
}

export default function DealMessageItem(state=initialState,action){
    switch(action.type){
        case types.DEAL_MESSAGE:
            return{
                ...state,
                dealMessage: action.dealMessage,
            }
            break;
        default:
            return state;
    }
}