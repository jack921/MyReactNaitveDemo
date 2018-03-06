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

export function  ChangeItemData(sourceData,item,type,index) {

    return dispatch=>{
        let list=[];
        list=list.concat(sourceData);
        if(type==1){
            list[index].startSend=item;
        }else if(type==2){
            list[index].endSend=item;
        }else if(type==3){
            list[index].qs_money=item;
        }else if(type==4){
            list[index].ps_money=item;
        }else if(type==5){
            list[index].free_money=item;
        }
        dispatch(AddPaySuccess(list));
    }
}

function AddPaySuccess(sourceData) {
    return {
        type: types.PAY_ADD_ITEM,
        sourceData: sourceData,
    }
}
