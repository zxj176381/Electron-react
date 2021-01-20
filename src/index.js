import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import { FrontendAuth, routerMap } from '@/core';

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <FrontendAuth routerConfig={routerMap} />
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
