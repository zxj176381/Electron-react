import React, { Component } from 'react';
import { Layout } from 'antd';
import HeaderFold from './components/Header-Fold';
import HeaderLogin from './components/Header-System';
import HeaderWinOpera from './components/Header-Win-Opera';
import style from './index.module.scss';
const { Header } = Layout;
export default class ERHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggle = () => {
    this.props.selectCollapsed();
  };

  render() {
    return (
      <div
        style={{
          borderTop: '1px solid #fff',
        }}
      >
        <Header className={style.header}>
          <div>
            <HeaderFold toggle={this.toggle} />
          </div>
          <div className={style.header__right}>
            <HeaderLogin />
            <HeaderWinOpera />
          </div>
        </Header>
      </div>
    );
  }
}
