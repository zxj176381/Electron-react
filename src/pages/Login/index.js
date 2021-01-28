import React, { Component } from 'react';
import style from './index.module.scss';
import { Input, Radio, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import logo from '@/logo.svg';
import closeIcon from '@/assets/header/close.png';
import closeIconHover from '@/assets/header/close-hover.png';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCloseIcon: closeIcon,
      isAutoLogin: false,
      loading: false,
    };
  }

  // 关闭登录窗口
  closeLogin = () => {};

  // 找回密码
  goFindPwd = () => {};

  render() {
    return (
      <div className={style.login}>
        <div className={style.login__border}>
          <div className={style.login__close}>
            <img
              onMouseOver={() => {
                this.setState({ currentCloseIcon: closeIconHover });
              }}
              onMouseOut={() => {
                this.setState({ currentCloseIcon: closeIcon });
              }}
              onClick={this.closeLogin}
              src={this.state.currentCloseIcon}
              alt="关闭"
            />
          </div>
          <section className={style.login__content}>
            <div className={style.login__logo}>
              <img
                src={logo}
                className={style['login__logo--image']}
                alt="logo"
              />
            </div>
            <div className={style.login__input}>
              <Input
                className={style['login__input--account']}
                // bordered={false}
                size="large"
                placeholder="请输入账号"
                prefix={<UserOutlined style={{ marginRight: '10px' }} />}
              />
              <Input
                className={style['login__input--password']}
                // bordered={false}
                size="large"
                placeholder="请输入密码"
                prefix={<LockOutlined style={{ marginRight: '10px' }} />}
              />
              <div className={style['login__input--config']}>
                <Radio checked={this.state.isAutoLogin}>自动登录</Radio>
                <div
                  className={style['login__input--find']}
                  onClick={this.goFindPwd}
                >
                  忘记密码？
                </div>
              </div>
            </div>
            <div className={style.login__submit}>
              <Button
                block
                type="primary"
                loading={this.state.loading}
                size="large"
              >
                登录
              </Button>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
