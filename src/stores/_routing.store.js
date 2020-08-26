import React from 'react';
import { observable, action, computed, set } from 'mobx';

// This store handles routing for the site and admin panel

class _RoutingStore { 
  // Variable Declaration

  // Routing
  @observable currentRoutes = [];

  //Setters
  @action setCurrentRoutes = (data) => {
      this.currentRoutes = data;
  }

  //Getters
  @computed get getCurrentRoutes() {
      return this.currentRoutes.slice();
  }
}

export default new _RoutingStore();
