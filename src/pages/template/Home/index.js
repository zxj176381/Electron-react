import React, { useState, useEffect } from 'react';
import { getRouteName, navigateTo } from '@/shared';
import logo from '@/logo.svg';
import './index.scss';

function navigateToUser(props) {
  navigateTo(props, '/User/2?age=1&name=zhixinjie');
}

export function Home(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/Home.js</code> and save to reload.
        </p>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}> Click me </button>
        <button onClick={() => navigateToUser(props)}> 跳转 User </button>
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
