import React from 'react';
import Demo from "./component/demo";
import {TestContext,info} from "./component/contex-demo";
export default class Home extends React.Component {
    // static contextType = TestContext;
    constructor(props) {
        super(props);
        this.state = {
            info:info.test2,
        };
    }

    render() {
        return (
            <div>
                <TestContext.Provider value={this.state.info}>
                <h1>欢迎来到首页</h1>
                    <h2>组件嵌套、context传值实践</h2>
                <Demo tips={"hello world"}/>
                </TestContext.Provider>
            </div>
        );
    }

}
