import React from 'react';
import { observable, action, computed, set } from 'mobx';

// As the admin panel is quite extensive all states  
// including UI and form states for the admin panel are stored here
// The only other location fro admin panel states is the component
// Store which is where all the components that the admin panel needs
// are kept

class _AdminStore { 
    // Variable Declaration

    // Routing
    @observable routingForm = {
        routeName: "",
        routePath: "",
        componentName: ""
    };
        //Setters
        @action setRouteName = (data) => {
            this.routingForm.routeName = data;
        }
        @action setRoutePath = (data) => {
            this.routingForm.routePath = data;
        }
        @action setComponentName = (data) => {
            this.routingForm.componentName = data;
        }

        //Getters
        @computed get getRouteName() {
            return this.routingForm.routeName;
        }
        @computed get getRoutePath() {
            return this.routingForm.routePath;
        }
        @computed get getComponentName() {
            return this.routingForm.componentName;
        }
}

export default new _AdminStore();
