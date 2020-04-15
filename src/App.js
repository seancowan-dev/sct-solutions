import React, { Component } from 'react';
import { observable } from 'mobx';
import { Provider } from "mobx-react";
import ErrorBound from './comps/ErrorBound';
import DomainStore from './DomainStore'
import './App.css';

const store = {
  valueStore: DomainStore,
}

class App extends Component {
  @observable

  render() {
    return(
    <div className="primary-container">
      <Provider {...store}>
        <ErrorBound>
          {<div>put something here </div>}
        </ErrorBound>
      </Provider>
    
    </div>
    );
  };
};

export default App;
