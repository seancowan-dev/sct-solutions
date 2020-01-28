import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Main from './main/Main';
import './App.css';

class App extends Component {
  render() {
    return(
    <div className="primary-container">
      
      <Header 
        pageTitle="Welcome to Noteful"
      />
      <Sidebar />
      <Main
      />
    </div>
    );
  };
};

export default App;
