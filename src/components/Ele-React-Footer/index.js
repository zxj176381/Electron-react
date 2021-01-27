import React, { Component } from 'react';
import style from './index.module.scss';
import { Layout } from 'antd';
const { Footer } = Layout;

export default class index extends Component {
  render() {
    return (
      <Footer className={style.footer}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    );
  }
}
