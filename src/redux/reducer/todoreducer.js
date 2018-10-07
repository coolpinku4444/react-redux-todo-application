import {Add_Todo,Toggle_Todo,Delete_Todo}  from '../action/actiontype';

const initialState = {
    taskList : [
        {
            name:'Morning WakeUp',
            status : false
        },
        {
            name:'Morning Study',
            status:false
        }
    ]
}

export function todoReducer(state=initialState,action) {
    switch(action.type) {
        case Add_Todo :
            let newState = {...state};
            newState.taskList= [...newState.taskList,{name:action.task,status:false}];
            return newState;
            break;
        case Toggle_Todo :
         let myState = {...state};
         myState.taskList =  myState.taskList.map((value,index) => {
             if(index == action.index) {
                 return {
                     status : !value.status,
                     name : value.name
                 }
                

             }
             return value;
         }) 
         return myState;
         case Delete_Todo : 
           let customState = {...state};
           customState.taskList = customState.taskList.filter((value,index) => {
                    return index !=action.index;
           });
            return customState;
           default :
        return state;
    }
}