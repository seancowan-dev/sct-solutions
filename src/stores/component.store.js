import React from 'react';
import { observable, computed, action } from 'mobx';
import ComponentsService from '../services/components.service';
import ComponentSerializer from '../serializers/components.serializers';
import _RoutingStore from '../stores/_routing.store';
import uuid from 'uuid';

// This store is where you declare all of the components that should be available to receive routing in the Admin Panel
// Do not declare any components from models or _models - you should only be routing to completed views!

class ComponentStore { 

  // Variable Declaration

    /* Site Components Storage */
    @observable comps = [];

      // Setters
      @action setAllComponents = (comps) => {
        console.log(comps);
        comps.forEach(comp => {
          console.log('checking comp: ' + comp.name);
           if (this.checkIfExists(comp.name) === false) {
            this.comps.push(comp);
           }
        });
      }

      @action setComponentByName = (name, component) => {
        let index;
        let found = this.comps.slice().find((comp, idx) => {
          if (comp.name === name) {
            index = idx;
            return comp;
          }
        });
        if (found) {
          this.comps[index].component = component;
        }
      }

      @action setComponentBlobData = (name, data) => {
        let index;
        let found = this.comps.slice().find((comp, idx) => {
          if (comp.name === name) {
            index = idx;
            return comp
          }
        });
        if (found) {
          this.comps[index].blob_data = data;
        }
      }
      // Getters
      @action getComponentDataByName = (name) => {
        let compData = this.comps.slice().find(comp => {
          if (comp.name === name) {
            return comp;
          }
        });
        if (compData !== undefined) {
          return compData.component_data;
        }
      }

      @action getComponentByName = (name) => {
        let compData = this.comps.slice().find(comp => {
          if (comp.name === name) {
            return comp;
          }
        });
        if (compData !== undefined) {
          return compData.component;
        }
      }

      @action getComponentBlobDataByName = (name) => {
        let compData = this.comps.slice().find(comp => {
          if (comp.name === name) {
            return comp;
          }
        });
        if (compData !== undefined) {
          return compData.blob_data;
        }
      }

      @computed get getAllComponents() {
        return this.comps;
      }

      // Helpers
      checkIfExists = (name) => {
        let exists = false;
        if (this.comps.length > 0) {
          let found = this.comps.find(comp => {
            console.log(comp.name);
            console.log(name);
            if (comp.name === name) {
              return comp
            }
          });
          if (found) {
            exists = true;
          } else {
            exists = false;
          }
        }
        return exists
      }

    /* JSX Uploader Admin Panel */
    @observable fileData = {
      file: null,
      loaded: 0
    }
      // Setters
      @action setFileData = (data) => {
        this.fileData.file = data;
      }
      @action setLoadedStatus = (status) => {
        this.fileData.loaded = status;
      }
      // Getters
      @computed get getFileData() {
        return this.fileData.file;
      }
      @computed get getLoadedStatus() {
        return this.fileData.loaded;
      }

    

  // Controllers

    // Routing
    @action createSelectEntries = () => {
      
      let comps = _RoutingStore.getCurrentRoutes;  // Get the component list

      let entries = [];  // Setup an array to store the options

      for (const [key, value] of Object.entries(comps)) { // For each entry

          if (key === "Primary" || "Admin") { // Check if key is a required view
            entries.push(<option key={uuid.v4()} >{value.component_name}</option>); // User should not be able to select this option
          } else {
            entries.push(<option key={uuid.v4()}>{value.component_name}</option>); // User should be able to select this option
          }
        
      }

      return entries;
    }

    // File Uploader (JS/JSX)
    @action handleJSXFileUpload = () => {
      let reader = new FileReader();
      let bytesArr = [];

      reader.readAsArrayBuffer(this.fileData.file);

      reader.onloadend = (e) => {
        if (e.target.readyState === FileReader.DONE) {
          let buffer = e.target.result
          let array = new Uint8Array(buffer);
          
          for (let i = 0; i < array.length; i++) {
            bytesArr.push(array[i]);
          }
          
          let json = ComponentSerializer._serialize_JSX_upload(this.fileData.file.name, bytesArr);
          // console.log(bytesArr);
          // let jsx;
          // for (let i = 0; i < bytesArr.length; i++) {
          //   jsx += String.fromCharCode(bytesArr[i]);
          // }
          // console.log(jsx);
          // console.log(json);
          ComponentsService.uploadJSXComponentFiles(json, this.fileData.file.name);
        }
      }
      
    }
}

export default new ComponentStore();
