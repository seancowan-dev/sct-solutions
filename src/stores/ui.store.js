import React from 'react';
import { observable, action, computed, set } from 'mobx';
import NavItem from '../_models/_nav_item.model';
import config from '../config';
import uuid from 'uuid';

const LOCAL_URI = config.CLIENT_URI;

// This store handles state management for UI elements of the site
// Form elements are obfuscated elsewhere in the Form Store

class UIStore { 

  // // Variable Declaration

  // Paths
  // Hard coded paths for the UI

  @observable logoPath = `${LOCAL_URI}/assets/logocompact.png`; // Define the path to the site logo here

  @computed get getLogoPath() { // Return the path when the client needs it
    return this.logoPath;
  }

  // Component States

  // Nav
    
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
        return <NavItem key={uuid.v4()} route={link.route} name={link.name} isActive={link.isActive} navClick={this.navClick}/>;
      });
    }

    @action navClick = (name, route) => { // Event handler for when a nav link is clicked
      let updatedItem = {
        name: name,
        route: route,
        isActive: "active"
      }

      let index = this._findNavIndex(name); // Find the nav link in the local store
      this._updateNavItem(updatedItem, index); // Update it
    }

    _findNavIndex = (name) => {
      let foundIndex;
      this.navLinks.slice().find((link, idx) => { // Search for the item
        if (link.name === name) { // If it is found
          foundIndex = idx; // Return the index
          return true;
        } else {
          return false; // Otherwise do nothing
        }
      });

      return foundIndex;
    }

    @action _updateNavItem = (updatedItem, index) => { // Update the nav item at the selected index
      let shallow = this.navLinks.slice(); // Get a shallow copy of the array in the store
      let newNavLinks = shallow.map(navLink => { // Map the nav links
        if (navLink.name === updatedItem.name) { // If the navlink is the same as the one to be updated
          navLink.isActive = updatedItem.isActive; // Set its active to active
          return navLink; // Return the updated nav link
        } else {
          navLink.isActive = ""; // Otherwise set it to blank, to be inactive
          return navLink; // Return the updated nav link
        }
      })
      this.navLinks = newNavLinks; // Assign the completed navlinks array to the store
    }
  

  // Login 
  @action toggleLoginModal = (visible) => {
    if (visible === true) {
      if (document.querySelector('.login-inactive')) {
        document.querySelector('.login-container').classList.remove('login-inactive');
      }
      document.querySelector('.login-container').classList.add('login-active');
    }
    if (visible === false) {
      if (document.querySelector('.login-active')) {
        document.querySelector('.login-container').classList.remove('login-active');
      }
      document.querySelector('.login-container').classList.add('login-inactive');
    }
  }
}

export default new UIStore();
