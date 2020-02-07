import React, { Component } from 'react';
import { SiteProvider } from './main/Context';
import ErrorBound from './comps/ErrorBound';
import displayNote from './main/displayNote';
import displayFolder from './main/displayFolder';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Main from './main/Main';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      displayNote: displayNote,
      displayFolder: displayFolder,
      deleteNote: this.deleteNote.bind(this),
      addNote: this.addNote.bind(this),
      addFolder: this.addFolder.bind(this),
      getNotes: this.getNotes.bind(this),
      getFolders: this.getFolders.bind(this),
      promises: this.promises.bind(this),
      done: false
    };
  };

  componentDidMount() {
    this.promises().then(res => {
      this.setState({
        folders: res[0],
        notes: res[1],
        done: true
      });
    });
  };

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
  };

  async getFolders() {
    return await fetch(`http://localhost:9090/folders`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(response => this.handleErrors(response))
    .then(resJSON => { return resJSON })
    .catch(e => alert(e));
  }

  async getNotes() {
    return await fetch(`http://localhost:9090/notes`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(response => this.handleErrors(response))
    .then(resJSON => { return resJSON })
    .catch(e => alert(e));
  }

  deleteNote(id) {
    fetch(`http://localhost:9090/notes/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(response => {
      if (response.ok === true) {
        return response.json();
    } else {
        throw new Error("Code " + response.status + " Message: " + response.statusText)
    }
    })
    .then(responseJSON => {
        let newNotes = this.state.notes.filter(note => {
        if (note.id !== id) {
          return note;
        }
        return null
      });

      this.setState({
        notes: newNotes,
      });
    })
    .catch(e => alert(e));

  }

  async addNote(event) {
    event.preventDefault();
    let workingArr = Array.from(event.target.parentNode.childNodes);
    let date = new Date(Date.now());
    let note = {
      id: "",
      name: "",
      modified: date.toISOString(),
      folderId: "",
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
        note.folderId = child.selectedOptions[0].id;
      }
      return null
    });

    note.id = this.hex(note.name);

    await fetch(`http://localhost:9090/notes/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(note)
    })
    .then(response => {
      if (response.ok === true) {
        this.promises().then(res => {
          this.setState({
            notes: res[1],
          });
        });
        return response.json();
    } else {
        throw new Error("Code " + response.status + " Message: " + response.statusText)
    }
    }).catch(e => alert(e));    
  }

  async addFolder(event) {
    event.preventDefault();
    let workingArr = Array.from(event.target.parentNode.childNodes);
    let folder = {
      id: "",
      name: "",
    };
    workingArr.filter(child => {
      if(child.name === "add-folder-title") {
        folder.name = child.value;
        folder.id = this.hex(child.value);
      }
      return null
    });

    await fetch(`http://localhost:9090/folders/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(folder)
    })
    .then(response => {
      if (response.ok === true) {
        this.promises().then(res => {
          this.setState({
            folders: res[0],
          });
        });
        return response.json();
    } else {
        throw new Error("Code " + response.status + " Message: " + response.statusText)
    }
    }).catch(e => alert(e));
  }

  promises() {
    return Promise.all([this.getFolders(), this.getNotes()]);
  }

  render() {
    return(
    <div className="primary-container">
      
      <Header 
        pageTitle="Welcome to Noteful"
      />
      <SiteProvider value={this.state}>
        <ErrorBound>
            <Sidebar />
        </ErrorBound>
        <ErrorBound>
            <Main/>
        </ErrorBound>
      </SiteProvider>
    </div>
    );
  };
};

export default App;
