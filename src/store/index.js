import  {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";

import  rootReduce from "./reducers/index"
const initialState ={};
const middleware = [thunk];
export const store = createStore(rootReduce,initialState,compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),);




