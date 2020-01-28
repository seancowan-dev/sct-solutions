import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Store from '../../Store';
import Note from './note/Note';
import './Notes.css';

class Notes extends Component {
    render() {
        const notes = Store.notes.map((note) => {
            return (
                <Note
                    key={note.id} 
                    id={note.id}
                    name={note.name}
                    mod={note.modified}
                    folderId={note.folderId}
                    content={note.content}
                />
            );
        });
        return(
            <section className="notes-section">
                {notes}
            </section>
        );
    };
};

export default Notes;