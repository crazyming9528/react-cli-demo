import React from "react";
import '../../style/login.scss';

export default class Login extends React.Component {

    jump() {
        this.props.history.push('/')
    }

    register() {
        window.alert("暂无注册功能");
    }

    render() {
        return (
            <div className="login_wrapper">
                <div className="block"><h3>欢迎来到登录界面</h3>
                    <div className="form">

                        <label htmlFor="account">账号：</label><input id="account" type="text" value="demo"
                                                                   placeholder="用户名"/>
                        <label htmlFor="password">密码：</label><input id="password" type="password" value="demo"
                                                                    placeholder="密码"/>
                        <div className="button_group">
                            <button onClick={() => {
                                this.jump();
                            }}>登录
                            </button>
                            <button onClick={() => {
                                this.register();
                            }}>注册
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
