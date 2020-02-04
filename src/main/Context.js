import React from 'react';
import STORE from '../Store';

const SiteContext = React.createContext({
    store: STORE, //temp b4 api res made
    displayNote: () => {},
    displayFolder: () => {},
    deleteNote: () => {},
    addNote: () => {},
    addFolder: () => {}
  });

export const SiteProvider = SiteContext.Provider;
export const SiteConsumer = SiteContext.Consumer;
export default SiteContext;