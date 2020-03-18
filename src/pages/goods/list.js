
import React from "react";

import  {Provider} from "react-redux";
// import {fetchPosts} from "../../store/action/postAction";

import {store} from "../../store";

export default class List extends React.Component{


    render() {
        return (
            <Provider store={store}>
            <div>
                <h3>欢迎来到商品列表</h3>
            </div>
            </Provider>
        );
    }

}
