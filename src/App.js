import React, { Component } from 'react';
import { observable } from 'mobx';
import { Provider } from "mobx-react";
import ErrorBound from './comps/ErrorBound';
import DomainStore from './DomainStore'
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Main from './main/Main';
import './App.css';

const store = {
  valueStore: DomainStore,
}

class App extends Component {
  @observable

  render() {
    return(
    <div className="primary-container">
      
      <Header 
        pageTitle="Welcome to Noteful"
      />
      <Provider {...store}>
        <ErrorBound>
            <Sidebar />
        </ErrorBound>
        <ErrorBound>
            <Main/>
        </ErrorBound>
      </Provider>
    
    </div>
    );
  };
};

export default App;
