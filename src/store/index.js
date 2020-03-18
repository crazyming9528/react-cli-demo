import  {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";

import  rootReduce from "./reducers/index"
const initialState ={};
const middleware = [thunk];
export const store = createStore(rootReduce,initialState,applyMiddleware(...middleware));




