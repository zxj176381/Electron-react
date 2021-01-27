import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Routers from '@/routers/route/Router';
import { routerMap } from '@/routers';
import './index.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Routers routerConfig={routerMap} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
