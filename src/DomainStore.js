import {observable,action,toJS} from 'mobx';
import uuid from "uuid";

class DomainStore{
    // App Primary 
     @observable updateType = "";
     @observable updateFolderId = "";
     @observable updateNoteId = "";
     @observable currentNote = null;
     @observable done = "";
     @observable updated = null;
     @observable errorMsg = "";
     @observable notes = {};
     @observable folders = {};

    // Update Component
     @observable folderNotes = [];
     @observable selectedFolder = "";
     @observable selectedFolderId = "";
     @observable selectedFolderIdOld = "";
     @observable oldNoteId = null;
     @observable currentNoteId = null;
     @observable migrateChecked = false;
     @observable note = {
         id: null,
         name: null,
         folderid: null,
         modified: null,
         content: null
     };

    // Local methods to use with fetch api methods
     handleErrors(response) { // prepares error message for HTTP request errors
      if (response.ok === true) {
          return response.json();
      } else {
          throw new Error("Code " + response.status + " Message: " + response.statusText)
      }
    }
    hex(string) {
      let source = unescape(encodeURIComponent(string));
      let hex = '';
        for (var i = 0; i < source.length; i++) {
            hex += source.charCodeAt(i).toString(16)
        };
        return hex;
    }

  // Fetch API Methods

  @action async getFolders() {
    return await fetch(`http://localhost:8000/api/folders`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(response => this.handleErrors(response))
    .then(resJSON => { return resJSON })
    .catch(e => alert(e));
  }

  @action async getNotes() {
    return await fetch(`http://localhost:8000/api/notes`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(response => this.handleErrors(response))
    .then(resJSON => { return resJSON })
    .catch(e => alert(e));
  }

  @action async deleteNote(id) {
    return await fetch(`http://localhost:8000/api/notes/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(response => { 
      if (response.ok === true) {
        this.promises();
    } else {
        throw new Error("Code " + response.status + " Message: " + response.statusText)
    }
    })
    .catch(e => alert(e));

  }

  @action async addNote(event) {
    event.preventDefault();
    let workingArr = Array.from(event.target.parentNode.childNodes);
    let date = new Date(Date.now());
    let note = {
      id: uuid.v4(),
      name: "",
      modified: date.toISOString(),
      folderid: "",
      content: ""
    };
    workingArr.filter(child => {
      if(child.name === "add-note-content") {
        note.content = child.value;
      }
      if (child.name === "add-note-title") {
        note.name = child.value;
      }
      if (child.name === "select-note-folder") {
        note.folderid = child.selectedOptions[0].id;
      }
      return null
    });
    await fetch(`http://localhost:8000/api/notes/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(note)
    })
    .then(response => {
      if (response.ok === true) {
        this.promises()
    } else {
        throw new Error("Code " + response.status + " Message: " + response.statusText)
    }
    }).catch(e => alert(e));    
  }

  @action async addFolder(event) {
    event.preventDefault();
    let workingArr = Array.from(event.target.parentNode.childNodes);
    let folder = {
      id: "",
      name: "",
    };
    workingArr.filter(child => {
      if(child.name === "add-folder-title") {
        folder.name = child.value;
        folder.id = uuid.v4();
      }
      return null
    });

    await fetch(`http://localhost:8000/api/folders/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(folder)
    })
    .then(response => {
      if (response.ok === true) {
        this.promises()
    } else {
        throw new Error("Code " + response.status + " Message: " + response.statusText)
    }
    }).catch(e => alert(e));
  }

  @action async deleteFolder(id) {
    await fetch(`http://localhost:8000/api/folders/${id}`, {
      method: `DELETE`,
      headers: {
        'content-type': 'application/json'
      },

    })
    .then(response => { 
      if (response.ok === true) {
        this.promises()
    } else {
        throw new Error("Code " + response.status + " Message: " + response.statusText)
    }
    })
    .catch(e => alert(e));
  }

  @action async updateFolder(id, updates) {
    await fetch(`http://localhost:8000/api/folders/${id}`, {
      method: `PATCH`,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updates),
    })
    .then(response => {
      if (response.ok === true) {
        this.promises()
    } else {
        throw new Error("Code " + response.status + " Message: " + response.statusText)
    }
    })
    .catch(e => alert(e));
  }

  @action async updateNote(id, updates) {
    await fetch(`http://localhost:8000/api/notes/${id}`, {
      method: `PATCH`,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updates),
    })
    .then(response => {
        if (response.ok === true) {
          this.promises()
        } else {
          throw new Error("Code " + response.status + " Message: " + response.statusText)
        }
    })
    .catch(e => alert(e));
  }

  @action promises() {
    Promise.all([this.getFolders(), this.getNotes()]).then(res => {
      this.folders = res[0];
      this.notes = res[1];
      this.done = true;
    });
  }
}
export default new DomainStore();