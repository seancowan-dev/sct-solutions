import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { SiteConsumer } from '../Context';
import Note from './note/Note';
import './Notes.css';

class Notes extends Component {

    render() {
        return(
            <SiteConsumer>
                {props => {
                    if (props.done === true) {
                        const notes = props.notes.map((note) => {
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
                    return <section className="notes-section">
                        {notes}
                    </section>
                    }
                }}
            </SiteConsumer>

        );
    };
};

export default Notes;