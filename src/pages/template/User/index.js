import React, { Component } from 'react';
import { getRouteQuery } from '@/storage';
import logo from '../../../logo.svg';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: null,
    };
  }

  onLoad() {
    const options = getRouteQuery();
    this.setState({
      userInfo: options,
    });
  }

  componentDidMount() {
    this.onLoad();
  }

  setCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  navigateBack() {}

  getDom() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/User.js</code> and save to reload.
          </p>
          {this.state.userInfo && <p>姓名：{this.state.userInfo.name}</p>}
          {this.state.userInfo && <p>年龄：{this.state.userInfo.age}</p>}
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setCount()}> Click me </button>
          <button onClick={() => this.navigateBack()}> 返回上一页 </button>
          <a
            className="App-link"
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
