import React from 'react';

const SiteContext = React.createContext({
    displayNote: () => {},
    displayFolder: () => {},
    deleteNote: () => {},
    addNote: () => {},
    addFolder: () => {},
    getNotes: () => {},
    getFolders: () => {},
    done: ""
  });

export const SiteProvider = SiteContext.Provider;
export const SiteConsumer = SiteContext.Consumer;
export default SiteContext;