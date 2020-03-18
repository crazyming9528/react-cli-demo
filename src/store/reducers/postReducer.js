

import {FETCH_POST} from "../action/types";


const initialState ={
    items:[]
};
export  default  function(state= initialState,action){
    // console.log("reducer");
    switch (action.type) {
        case FETCH_POST:
            // return {
            //     ...state,
            //     items:action.payload
            // };
            return Object.assign({},initialState,{items:action.payload});
        case "sss":
            return {
                ...state
            };
        default:
            return state;

    }



}
