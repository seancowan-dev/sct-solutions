import React from 'react';
import { observable, action, computed, set } from 'mobx';

// This store handles state management for HTML forms on the site
// Other UI element interactions and states are handled in the UI Store

class FormStore { 

  // Variable Declaration
  // Login

  @observable loginFields = {
    email: "",
    password: ""
  }

  // Setters
  @action setLoginEmail = (input) => {
    this.loginFields.email = input;
  }

  @action setLoginPassword = (input) => {
    this.loginFields.password = input;
  }

  // Getters
  @computed get getLoginEmail() {
    return this.loginFields.email;
  }

  @computed get getLoginPassword() {
    return this.loginFields.password;
}
  
}

export default new FormStore();
