import React from 'react';
import { observable, computed, action } from 'mobx';
import uuid from 'uuid';

// !Important! - Do not change these imports, your site won't work otherwise!
import Primary from '../../src/views/Primary/Primary';
import Admin from '../../src/views/Admin/Admin';

// Start User Imports

    // Import the component views you want to use here

// End User Imports

// This store is where you declare all of the components that should be available to receive routing in the Admin Panel
// Do not declare any components from models or _models - you should only be routing to completed views!

class ComponentStore { 

  // Variable Declaration

  @observable components = {
      // !Important! - Do not change these imports, your site won't work otherwise!
      Primary: <Primary />,
      Admin: <Admin />
  }

  // Getter
  @computed get getComponents() {
    return this.components;
  }

  // Controllers

  @action createSelectEntries = () => {
    
    let comps = this.components;  // Get the component list

    let entries = [];  // Setup an array to store the options

    for (const [key, value] of Object.entries(comps)) { // For each entry

        if (key === "Primary" || "Admin") { // Check if key is a required view
          entries.push(<option key={uuid.v4()} disabled>Required: {key}</option>); // User should not be able to select this option
        } else {
          entries.push(<option key={uuid.v4()}>{key}</option>); // User should be able to select this option
        }
       
    }

    return entries;
  }
  
}

export default new ComponentStore();
