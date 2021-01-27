import React, { Component } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import style from './index.module.scss';

export default class HeaderFold extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {React.createElement(
          this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: style.trigger,
            onClick: this.props.toggle,
          }
        )}
      </div>
    );
  }
}
