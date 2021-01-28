import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  BehanceCircleFilled,
  SnippetsFilled,
  DribbbleSquareFilled,
} from '@ant-design/icons';
import style from './index.module.scss';
import logo from '@/logo.svg';
const { Sider } = Layout;

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuListIcon: [
        <BehanceCircleFilled style={{ fontSize: '20px' }} />,
        <DribbbleSquareFilled style={{ fontSize: '20px' }} />,
        <SnippetsFilled style={{ fontSize: '20px' }} />,
        <UserOutlined style={{ fontSize: '20px' }} />,
        <UserOutlined style={{ fontSize: '20px' }} />,
      ],
      collapsed: false,
      currentMenuIndex: '0',
    };
  }

  render() {
    return (
      <div
        style={{
          borderLeft: '1px solid #f2f2f2',
        }}
      >
        <Sider className={style.sider} collapsed={this.props.collapsed}>
          <div className={style.sider__logo}>
            <img
              src={logo}
              className={style['sider__logo--image']}
              alt="logo"
            />
          </div>
          <Menu
            className={style['sider__menu']}
            mode="inline"
            defaultSelectedKeys={[this.state.currentMenuIndex]}
          >
            {this.props.menuList.map((item, index) => {
              return (
                <Menu.Item
                  className={style['sider__menu--item']}
                  key={index}
                  icon={this.state.menuListIcon[index]}
                >
                  {item.name}
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
      </div>
    );
  }
}
