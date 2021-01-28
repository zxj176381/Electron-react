import React, { Component } from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import style from './index.module.scss';
import UserDefault from '@/assets/header/user-default.png';
import { connect } from 'react-redux';
import { setShowLogin } from '@/redux/actions';

class HeaderLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userMenu: [
        {
          key: '0',
          name: '登录',
        },
        {
          key: '1',
          name: '开通VIP',
        },
      ],
      asSystem: [
        {
          key: '2',
          name: '设置',
        },
        {
          key: '3',
          name: '意见反馈',
        },
        {
          key: '4',
          name: '满意度调查',
        },
      ],
    };
  }

  // 登录
  popupLogin() {
    const { setShowLogin } = this.props;
    setShowLogin(true);
  }

  // 点击选项
  clickMenu = ({ item, key, keyPath, domEvent }) => {
    // console.log(item, key, keyPath, domEvent);
    if (key === '0') {
      this.popupLogin();
    } else if (key === '1') {
    }
  };

  render() {
    const menu = (
      <Menu onClick={this.clickMenu}>
        {this.state.userMenu.map((item, index) => {
          return <Menu.Item key={item.key}>{item.name}</Menu.Item>;
        })}
        <Menu.Divider />
        {this.state.asSystem.map((item, index) => {
          return <Menu.Item key={item.key}>{item.name}</Menu.Item>;
        })}
      </Menu>
    );
    return (
      <div className={style.login}>
        <Dropdown
          className={style.login__drop}
          overlay={menu}
          trigger={['click']}
        >
          <div onClick={(e) => e.preventDefault()}>
            <img className={style.login__avatar} src={UserDefault} alt="" />
            <DownOutlined />
          </div>
        </Dropdown>
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLogin);
