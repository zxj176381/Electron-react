import React, { Component, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { setPageSession } from '@/storage';
import { getRouteName } from '@/shared';
import EleReactLoading from '@/components/Ele-React-Loading';

export default class Routers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { routerConfig, location } = this.props;
    let { pathname, query } = location;
    let routerLength = routerConfig.length,
      index = 0;
    for (index; index < routerLength; index++) {
      const routeConfig = routerConfig[index];
      const alias = getRouteName(true);
      if (alias === routeConfig.alias) {
        console.log(`routerConfig[${index}]`, routeConfig);
        if (query) {
          setPageSession(pathname, query);
        }
        return (
          <Suspense fallback={<EleReactLoading />}>
            <Route
              exact
              path={routeConfig.pathname}
              component={routeConfig.component}
            />
          </Suspense>
        );
      }
    }
  }
}
