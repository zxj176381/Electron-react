import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import Routers from '@/core/router/Router';
import { routerMap } from '@/core';

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
