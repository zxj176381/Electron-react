import React, { Component } from 'react';
import style from './index.module.scss';
import { Layout } from 'antd';
const { Content } = Layout;

export default class index extends Component {
  render() {
    return (
      <Content className={style.content}>
        <div>content</div>
      </Content>
    );
  }
}
