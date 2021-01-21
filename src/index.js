import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Routers from '@/core/router/Router';
import { routerMap } from '@/core';
import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Routers routerConfig={routerMap} />
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
