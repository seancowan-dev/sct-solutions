import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { SiteProvider } from './main/Context';
import STORE from './Store';
import displayNote from './main/displayNote';
import displayFolder from './main/displayFolder';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Main from './main/Main';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.displayNote = () => {
      this.setState(state => ({
        displayNote: displayNote,
      }));
    };
    this.displayFolder = () => {
      this.setState(state => ({
        displayFolder: displayFolder,
      }));
    }
    this.state = {
      store: STORE,
      displayNote: this.displayNote,
      displayFolder: this.displayFolder
    };
  };

  render() {
    return(
    <div className="primary-container">
      
      <Header 
        pageTitle="Welcome to Noteful"
      />
      <Sidebar />
      <SiteProvider value={this.state}>
        <Main
          />
      </SiteProvider>
    </div>
    );
  };
};

export default App;
