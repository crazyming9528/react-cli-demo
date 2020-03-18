import React from 'react';
import Demo from "./component/demo";
import {store} from "../../store";
import {Provider} from "react-redux";
export default class News extends React.Component {
    // static contextType = TestContext;
    constructor(props) {
        super(props);
        this.state = {
            info:"",
        };
    }

    render() {
        return (
            <Provider store={store}>
            <div>
                <h1>欢迎来到新闻资讯页面</h1>
                <h2>redux实践</h2>
                <Demo tips={"hello world"}/>
            </div>
            </Provider>
        );
    }

}
