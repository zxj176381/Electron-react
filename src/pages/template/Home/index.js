import React, { Component } from 'react';
import { navigateTo } from '@/shared';
import { getUserListService, addUserService } from '@/service';
import logo from '@/logo.svg';
import style from './index.module.scss';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.getUserList();
  }

  addUser() {
    addUserService().then((res) => {
      console.log(res);
    });
  }

  getUserList() {
    getUserListService().then((res) => {
      console.log(res);
    });
  }

  setCount() {
    this.setState({
      count: this.count++,
    });
  }

  navigateToUser() {
    navigateTo(this.props, '/User/2?age=1&name=zhixinjie');
  }

  render() {
    return (
      <div className={style.App}>
        <header className={style['App-header']}>
          <img src={logo} className={style['App-logo']} alt="logo" />
          <p>
            Edit <code>src/User.js</code> and save to reload.
          </p>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setCount()}> Click me </button>
          <button onClick={() => this.navigateToUser()}> 跳转User </button>
          <button onClick={() => this.addUser()}> 添加User </button>
          <a
            className={style['App-link']}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
