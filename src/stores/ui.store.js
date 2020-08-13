import React from 'react';
import { observable, action, computed, set } from 'mobx';
import NavItem from '../_models/_nav_item.model';

// This store handles state management for UI elements of the site
// Form elements are obfuscated elsewhere in the Form Store

class UIStore { 

  // // Variable Declaration
  // @observable myNewStateVariable = "";

  //   // Getters
  // @computed get getMyNewStateVariable() {
  //   return this.myNewStateVariable;
  // }
  //   // Setters
  // @action setMyNewStateVariable = (newState) => {
  //   this.myNewStateVariable = newState;
  // }

  // Variable Declaration

  // Nav
    @observable logoPath = "assets/logocompact.png"; // Define the path to the site logo here

    @computed get getLogoPath() { // Return the path when the client needs it
      return this.logoPath;
    }
    
    @observable navLinks = [ // Later pull these from server
      {
        name: "About",
        route: "#",
        isActive: "", // Empty = false, since active will have a bootstrap class and inactive will not
      },
      {
        name: "Blog",
        route: "#",
        isActive: "", // Empty = false, since active will have a bootstrap class and inactive will not
      },
      {
        name: "Services",
        route: "#",
        isActive: "", // Empty = false, since active will have a bootstrap class and inactive will not
      },
      {
        name: "Contact",
        route: "#",
        isActive: "", // Empty = false, since active will have a bootstrap class and inactive will not
      },
    ];

    @action generateNavItems = () => { // For each nav item return a completed link object
      return this.navLinks.slice().map(link => {
        return <NavItem route={link.route} name={link.name} isActive={link.isActive} navClick={this.navClick}/>;
      });
    }

    @action navClick = (name, route) => { // Event handler for when a nav link is clicked
      let updatedItem = {
        name: name,
        route: route,
        isActive: "active"
      }

      let index = this._findNavIndex(name);

      this._updateNavItem(updatedItem, index);

      console.log('i did a thing');
    }

    _findNavIndex = (name) => {
      return this.navLinks.slice().find((link, idx) => { // Search for the item
        if (link.name === name) { // If it is found
          return idx; // Return the index
        } else {
          return false; // Otherwise do nothing
        }
      });
    }

    @action _updateNavItem = (updatedItem, index) => { 
      this.navLinks[index] = updatedItem;
    }
  
}

export default new UIStore();
