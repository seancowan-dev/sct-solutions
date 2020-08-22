import React from 'react';
import { Provider } from "mobx-react";
import ErrorBound from './comps/ErrorBound';
import DomainStore from './DomainStore'

const store = {
  uiStore: DomainStore.uiStore,
  formStore: DomainStore.formStore,
  componentStore: DomainStore.componentStore
}


const App = (props) => {
  
  return(
    <Provider {...store}>
      <ErrorBound>
        {props.routes}
      </ErrorBound>
    </Provider>
    );
};

export default App;
