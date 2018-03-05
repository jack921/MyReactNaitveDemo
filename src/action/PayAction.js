'use strict';

import * as types from '../constants/PayTypes';

export function AddPayItem(sourceData) {
    return dispatch=>{
        console.log(sourceData);
        let list=[];
        list=list.concat(sourceData);
        list.push({startSend: '6',
            endSend:'7',
            qs_money:'8',
            ps_money:'9',
            free_money:'10'
        });
        console.log(list);
        dispatch(AddPaySuccess(list));
    }
        // fetch('https://www.baidu.com/')
        //     .then((response)=>response.text())
        //     .then((result)=>{
        //         dispatch(AddPaySuccess(result));
        //     }).catch((error)=>{
        //         dispatch(AddPaySuccess('出现错误'));
        // });
}

function AddPaySuccess(sourceData) {
    return {
        type: types.PAY_ADD_ITEM,
        sourceData: sourceData,
    }
}
