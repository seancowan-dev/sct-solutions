import React, { useState, lazy, Suspense, Component } from 'react';
import loadable from '@loadable/component'
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
      const blob_data = store.componentStore.getComponentBlobDataByName(element.component_name + '.js');

      const DynamicComponent = lazy(() => import(window.localStorage.getItem(element.component_name)));
      console.log(<DynamicComponent />);
      const LocalComponent = lazy(() => import(`../src/views/${element.component_name}/${element.component_name}`));
      // if (compData !== undefined) {
      //   let file = new File(compData, element.component_name + '.js', {
      //     type: 'text/javascript',
      //   });

      //   console.log(file);

      //   // file.text().then(text => {
      //   //   const Component = lazy(() => import(text));
      //   //   console.log(<Component key={uuid.v4()} />);
      //   //   routes[element.route_path] = () => <Suspense fallback={<div>Loading...</div>}><Component key={uuid.v4()} /></Suspense>;
      //   // });

      // }
      // const Component = lazy(() => import(componentText));
      // console.log(<Component key={uuid.v4()} />);
      // console.log(currentComp);
      routes[element.route_path] = () => <Suspense fallback={<div>Loading...</div>}><DynamicComponent /></Suspense>;
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
