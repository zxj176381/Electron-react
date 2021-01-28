import React, { Component } from 'react';
import style from './index.module.scss';
import { Input, Radio, Modal } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import logo from '@/logo.svg';
import { connect } from 'react-redux';
import closeIcon from '@/assets/header/close.png';
import { setShowLogin } from '@/redux/actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCloseIcon: closeIcon,
      isAutoLogin: true,
      submitLoading: false,
    };
  }

  // 关闭登录窗口
  closeLogin = () => {
    const { setShowLogin } = this.props;
    setShowLogin(false);
  };

  // 找回密码
  goFindPwd = () => {};

  render() {
    const { submitLoading, isAutoLogin } = this.state;
    const { isShowLogin } = this.props;
    return (
      <div className={style.login}>
        <Modal
          zIndex={1051}
          centered
          closable
          confirmLoading={submitLoading}
          visible={isShowLogin}
          cancelText="取消"
          okText="登录"
          onCancel={this.closeLogin}
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
                <Radio checked={isAutoLogin}>自动登录</Radio>
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
    isShowLogin: state.isShowLogin,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setShowLogin(data) {
      dispatch(setShowLogin(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
