import React, { Component } from 'react';
import style from './index.module.scss';
import logo from '@/logo.svg';
import closeIcon from '@/assets/header/close.png';
import { Input, Checkbox, Modal, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { setShowLogin, setAutoLogin } from '@/redux/actions';
import { loginService } from '@/service';
import { responseStatusMap } from '@/shared';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCloseIcon: closeIcon,
      submitLoading: false,
      email: '',
      password: '',
    };
  }

  // 关闭登录窗口
  closeLogin = () => {
    const { setShowLogin } = this.props;
    setShowLogin(false);
  };

  // 登录
  userLogin = () => {
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    this.setState({
      submitLoading: true,
    });
    loginService(data).then((loginRes) => {
      const { setShowLogin } = this.props;
      this.setState({
        submitLoading: false,
      });
      if (loginRes.code === responseStatusMap.SUCCESS) {
        setShowLogin(false);
        message.success('登录成功！');
      }
    });
  };

  // 找回密码
  goFindPwd = () => {};

  render() {
    const { submitLoading } = this.state;
    const { isShowLogin, isAutoLogin, setAutoLogin } = this.props;
    return (
      <div className={style.login}>
        <Modal
          centered
          closable
          confirmLoading={submitLoading}
          visible={isShowLogin}
          cancelText="取消"
          okText="登录"
          onCancel={this.closeLogin}
          onOk={this.userLogin}
        >
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
                size="large"
                placeholder="请输入邮箱"
                value={this.state.email}
                prefix={<UserOutlined style={{ marginRight: '10px' }} />}
                onChange={($event) => {
                  this.setState({
                    email: $event.target.value,
                  });
                }}
              />
              <Input
                className={style['login__input--password']}
                size="large"
                placeholder="请输入密码"
                value={this.state.password}
                type="password"
                prefix={<LockOutlined style={{ marginRight: '10px' }} />}
                onChange={($event) => {
                  this.setState({
                    password: $event.target.value,
                  });
                }}
              />
              <div className={style['login__input--config']}>
                <Checkbox
                  checked={isAutoLogin}
                  onChange={() => {
                    setAutoLogin(!isAutoLogin);
                  }}
                >
                  自动登录
                </Checkbox>
                <div
                  className={style['login__input--find']}
                  onClick={this.goFindPwd}
                >
                  忘记密码？
                </div>
              </div>
            </div>
          </section>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAutoLogin: state.isAutoLogin,
    isShowLogin: state.isShowLogin,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setAutoLogin(data) {
      dispatch(setAutoLogin(data));
    },
    setShowLogin(data) {
      dispatch(setShowLogin(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
