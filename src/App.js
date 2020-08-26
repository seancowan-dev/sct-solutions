import React, { useState, lazy, Suspense, Component } from 'react';
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { useRoutes } from 'hookrouter';
import ErrorBound from './comps/ErrorBound';
import DomainStore from './DomainStore'
import uuid from 'uuid';

const store = {
  uiStore: DomainStore.uiStore,
  formStore: DomainStore.formStore,
  componentStore: DomainStore.componentStore,
  adminStore: DomainStore.adminStore,
  routingStore: DomainStore.routingStore
}

const App = (props) => {
  let routes = {};
  store.routingStore.getCurrentRoutes.forEach(element => {
      const Component = lazy(() => import(`../src/views/${element.component_name}/${element.component_name}`));
      console.log(<Component key={uuid.v4()} />);
      routes[element.route_path] = () => <Suspense fallback={<div>Loading...</div>}><Component key={uuid.v4()} /></Suspense>;
  });

  const routeResult = useRoutes(routes);

    return(
      <Provider {...store}>
        <ErrorBound>
          {routeResult}
        </ErrorBound>
      </Provider>
      );
  };

export default App;
