import React from 'react'

import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';


import Main from "../pages/main"; //主界面
import Home from "../pages/home"; //首页页面
import News from "../pages/news"; //商品列表页
import List from "../pages/goods/list"; //商品列表页
import UserCenter from '../pages/auth/user-center' //用户中心界面
import About from "../pages/about"; //关于页面
import Login from '../pages/auth/login' //登录页面
import NotFound from '../pages/sys/not-found'
import Feedback from "../pages/form/feedback"; //404 错误提示页


const R = () => (
    <HashRouter >
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/not-found" component={NotFound}/>
            <Route path="/" render={() =>
                <Main>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/news" component={News}/>
                    <Route exact path="/list" component={List}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/user-center" component={UserCenter}/>
                    <Route exact path="/feedback" component={Feedback}/>
                </Main>
            }/>

            <Redirect from="/*" to='/not-found'/>
        </Switch>
    </HashRouter>
);

export default R;
