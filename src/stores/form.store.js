import React from 'react';
import { observable, action, computed, set } from 'mobx';

// This store handles state management for HTML forms on the site
// Other UI element interactions and states are handled in the UI Store

class FormStore { 

  // Variable Declaration
  @observable myNewStateVariable = "";

    // Getters
  @computed get getMyNewStateVariable() {
    return this.myNewStateVariable;
  }
    // Setters
  @action setMyNewStateVariable = (newState) => {
    this.myNewStateVariable = newState;
  }
  
}

export default new FormStore();
