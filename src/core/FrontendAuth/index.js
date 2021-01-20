import React from 'react';
import { Route } from 'react-router-dom';
import { setPageSession } from '@/storage';
import { getRouteName } from '@/shared';

export * from './routesMap';

export function FrontendAuth(props) {
  const { routerConfig, location } = props;
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
        <Route
          exact
          path={routeConfig.pathname}
          component={routeConfig.component}
        />
      );
    }
  }
}
