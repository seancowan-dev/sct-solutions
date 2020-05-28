import React, { Component } from 'react';
import { observable } from 'mobx';
import { Provider } from "mobx-react";
import ErrorBound from './comps/ErrorBound';
import DomainStore from './DomainStore'
import './App.css';

// const store = {
//   storeLocal: DomainStore.storeScoped,
// }


const App = (props) => {
  
  return(
    // <Provider {...store}>
      <ErrorBound>
        {props.routes}
      </ErrorBound>
    // </Provider>
    );
};

export default App;
