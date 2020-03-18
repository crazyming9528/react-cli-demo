import React from 'react';
import {TestContext} from "./contex-demo";

export default class Demo2 extends React.Component {


    // static  contextTypes = {
    //     title: ""
    // };

    render() {

        return (
            <TestContext.Consumer>
                {
                    value =>(
                        <div style={{backgroundColor: "#10b0ec",padding:"15px"}}>
                            <h3>This is demo2 component</h3>
                            <p>{this.props.tips}</p>
                            <p style={{color:value.color}}>{value.greeting}</p>
                        </div>
                    )
                }
            </TestContext.Consumer>
        );
    }


}
