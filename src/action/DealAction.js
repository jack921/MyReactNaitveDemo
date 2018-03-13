
import * as types from '../constants/DealTypes';

export function DealMessageItem(message) {
    return {
        type: types.DEAL_MESSAGE,
        dealMessage: message,
    }
}

