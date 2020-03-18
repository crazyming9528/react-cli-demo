import React from "react";

export const info = {
    test1: {
        greeting: "利用context传递数据1",
        color: "gray"
    }, test2: {
        greeting: "利用context传递数据2",
        color: "pink"
    }
};

export const TestContext = React.createContext(info.test1);
