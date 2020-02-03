import React, { Component } from 'react';
import $ from 'jquery';
import { SiteProvider } from './main/Context';
import displayNote from './main/displayNote';
import displayFolder from './main/displayFolder';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Main from './main/Main';
import './App.css';

class App extends Component {
    handleErrors(response) { // prepares error message for HTTP request errors
      if (response.ok === true) {
          return response.json();
      } else {
          throw new Error("Code " + response.status + " Message: " + response.statusText)
      }
  }

  async getFolders() {
    await fetch(`http://localhost:9090/folders`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(response => this.handleErrors(response))
    .then(responseJSON => {
      this.setState({
        folders: responseJSON,
      });
    })
    .catch(e => alert(e));
  }

  async getNotes() {
    await fetch(`http://localhost:9090/notes`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(response => this.handleErrors(response))
    .then(responseJSON => {
      this.setState({
        notes: responseJSON,
        done: true
      })
    })
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
      });

      this.setState({
        notes: newNotes,
      });
    })
    .catch(e => alert(e));

  }

  constructor(props) {
    super(props);

    this.state = {
      displayNote: displayNote,
      displayFolder: displayFolder,
      deleteNote: this.deleteNote.bind(this),
      done: false
    };
  };

  componentDidMount() {
    this.getFolders();
    this.getNotes();
  }

  render() {
    return(
    <div className="primary-container">
      
      <Header 
        pageTitle="Welcome to Noteful"
      />
      <Sidebar />
      <SiteProvider value={this.state}>
        <Main
          />
      </SiteProvider>
    </div>
    );
  };
};

export default App;
