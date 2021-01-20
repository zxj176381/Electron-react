import React, { Component } from 'react';
import { navigateTo } from '@/shared';
import logo from '@/logo.svg';
import './index.scss';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/User.js</code> and save to reload.
          </p>
          <p>You clicked {this.state.count} times</p>
          {/* <p>age: {options.age}</p> */}
          {/* <p>name: {options.name}</p> */}
          <button onClick={() => this.setCount()}> Click me </button>
          <button onClick={() => this.navigateToUser()}> 跳转User </button>
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
