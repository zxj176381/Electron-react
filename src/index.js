import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Routers from '@/routers/route/Router';
import { routerMap } from '@/routers';
import './index.css';
import { Provider } from 'react-redux';
import store from '@/redux';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Routers routerConfig={routerMap} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
