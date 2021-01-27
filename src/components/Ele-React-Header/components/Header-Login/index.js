import React, { Component } from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import style from './index.module.scss';

export default class HeaderLogin extends Component {
  constructor(props) {
    super(props);
    this.stare = {
      userMenu: [
        {
          key: '0',
          name: '登录',
        },
      ],
    };
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">3rd menu item</Menu.Item>
      </Menu>
    );
    return (
      <div className={style.login}>
        <Dropdown
          className={style.login__drop}
          overlay={menu}
          trigger={['click']}
        >
          <div
            className="ant-dropdown-link"
            onClick={(e) => e.preventDefault()}
          >
            <UserOutlined style={{ fontSize: '28px', marginRight: '3px' }} />
            <DownOutlined />
          </div>
        </Dropdown>
      </div>
    );
  }
}
