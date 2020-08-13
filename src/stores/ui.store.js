import React from 'react';
import { observable, action, computed, set } from 'mobx';

// This store handles state management for UI elements of the site
// Form elements are obfuscated elsewhere in the Form Store

class UIStore { 

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

export default new UIStore();
