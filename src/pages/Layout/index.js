import React, { Component } from 'react';
import { Layout } from 'antd';
import style from './index.module.scss';
import EleReactSider from '@/components/Ele-React-Sider';
import EleReactHeader from '@/components/Ele-React-Header';
import EleReactContent from '@/components/Ele-React-Content';
import EleReactFooter from '@/components/Ele-React-Footer';
import { getMenuListService } from '@/service';
import { responseStatusMap } from '@/shared';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      menuList: [],
    };
  }

  // 获取导航菜单
  getMenuList = () => {
    getMenuListService().then((MenuRes) => {
      if (MenuRes.code === responseStatusMap.SUCCESS) {
        this.setState({
          menuList: MenuRes.data,
        });
      }
    });
  };

  // 切换导航菜单隐藏状态
  selectCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  componentDidMount() {
    this.getMenuList();
  }

  render() {
    return (
      <Layout className={style.layout}>
        <EleReactSider
          collapsed={this.state.collapsed}
          menuList={this.state.menuList}
        />
        <Layout>
          <EleReactHeader
            collapsed={this.state.collapsed}
            selectCollapsed={this.selectCollapsed}
          />
          <EleReactContent />
          <EleReactFooter />
        </Layout>
      </Layout>
    );
  }
}
