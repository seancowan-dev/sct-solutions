import React from 'react';

const SiteContext = React.createContext({
    displayNote: () => {},
    displayFolder: () => {},
    updateNote: () => {},
    updateFolder: () => {},
    deleteNote: () => {},
    deleteFolder: () => {},
    addNote: () => {},
    addFolder: () => {},
    getNotes: () => {},
    getFolders: () => {},
    promises: () => {},
    updateType: "",
    updateFolderId: "",
    updateNoteId: "",
    currentNote: null,
    done: ""
  });

export const SiteProvider = SiteContext.Provider;
export const SiteConsumer = SiteContext.Consumer;
export default SiteContext;