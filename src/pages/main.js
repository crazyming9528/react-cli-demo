import React from "react";
import '../style/main.scss';
import {withRouter,Link} from 'react-router-dom'
 class Main extends React.Component{


    render() {
        return (
            <div className="main_wrapper">
                <div className="menu">
                    <h1>react-router-dom 实践</h1>
                    <Link to="/">首页</Link>
                    <Link to="/news">资讯</Link>
                    <Link to="/list">商品列表</Link>
                    <Link to="/about">关于</Link>
                    <Link to="/user-center">个人中心</Link>
                    <Link to="/feedback">提交表单</Link>
                    <Link to="/login">登录</Link>
                </div>
                <div id="body">
                    {this.props.children}
                </div>
            </div>
        );
    }

}

export default withRouter(Main)
